class InternalStorage {

    //WRITE TO FILE SYSTEM

    getSampleFile = (fileURL, fileName) => {
        console.log("fileURL", fileURL);
        // get image from url
        fetch(fileURL)
            //turn the image into binary information (similar to base 64)
            .then(response => response.blob())
            .then(file => {
                // Then create a local URL for that image and print it

                console.log("image?!", file);
                this.saveFile(file, fileName);
            })
    }

    saveFile = (fileContent, fileName, cb) => {
        //access phone’s file system
        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, (fs) => {

            // console.log('Request file system succeed, file system open: ' + fs.name);
            //create new file in the file system which is accessible to this cordova app only

            fs.root.getFile(fileName, { create: true, exclusive: false }, (fileEntry) => {
                // console.log("fileEntry is file?" + fileEntry.isFile.toString());
                //erite to that file we have created
                fileEntry.createWriter(fileWriter => {
                    fileWriter.onwriteend = () => {
                        // console.log("Successful file write...");
                        if(cb && typeof(cb) == "function"){
                            cb(fileContent);
                        }
                    };
                    fileWriter.onerror = e => {
                        console.log("Failed file write: " + e.toString());
                    };

                    fileWriter.write(fileContent);
                });

            }, (err) => {
                console.log("Error creating a new file, with err", err);
            });

        }, (err) => {
            console.log("Error requesting file system ?! with err", err);
        });
    }

    //READ FROM FILE SYSTEM

    readFile = (fileName, cb) => {
        //accessing file system
        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, (fs) => {
            // console.log('Request file system succeed, file system open: ' + fs.name);
            //get wanted file

            fs.root.getFile(fileName, { create: true, exclusive: false }, fileEntry => {
                
                //Do something with the file/image (ex. save to state)

                // var self = this;

                //var displayImage = function (imageContent) {
                //console.log("fileEntry on displayImage", fileEntry);
                // localStorage.setItem("messages", JSON.stringify(imageContent));
                // self.setState({ loadedImg: fileEntry.nativeURL });
                //}

                fileEntry.file(function (file) {

                    let reader = new FileReader();

                    reader.onloadend = () => {
                        // console.log("Successful file read: " + reader.result);
                        //displayImage(reader.result);
                        cb(reader.result);
                    };

                    reader.readAsText(file);

                }, err => {
                    console.log("Could not read file, err: ", err);

                });

            });

        });
    }
}

export default new InternalStorage;
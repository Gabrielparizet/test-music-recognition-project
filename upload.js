let http = require("http");
let fs = require("fs");
let formidable = require("formidable");

http.createServer(function(req, res){

    // Create an instance of the form object.
    let form = new formidable.IncomingForm();

    // Process the file upload in Node
    form.parse(req, function(error, fields, file){
        let filepath = file.fileupload.filepath;
        let newpath = '/Users/gabrielparizet/Desktop/Projet Perso/test-music-recognition-project/';
        newpath += file.fileupload.originalFilename;
        console.log(filepath);
        console.log(newpath);

        // Copy the uploaded file to a custom folder
        fs.rename(filepath, newpath, function(){
            // Send a NodeJS file upload confirmation message
            res.write('NodeJS File Upload Success!')
            res.end();
        });
    });
}).listen(80);
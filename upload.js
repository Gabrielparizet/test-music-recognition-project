let http = require("http");
let fs = require("fs");
let formidable = require("formidable");

http.createServer(function(req, res){
    let form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, file){
        let filepath = file.fileupload.filepath;
        let newpath = '/Users/gabrielparizet/Desktop/Projet Perso/test-music-recognition-project/';
        newpath += file.fileupload.originalFilename;
        console.log(filepath);
        console.log(newpath);
        fs.rename(filepath, newpath, function(){
            res.write('NodeJS File Upload Success!')
            res.end();
        });
    });
}).listen(80);
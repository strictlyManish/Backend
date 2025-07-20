var ImageKit = require("imagekit");
const mongoose = require("mongoose");
var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint :process.env.IMAGEKIT_URL_ENDPOINT
});


function uploadFile(file){
    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:new mongoose.mongo.ObjectId().toString(),
            folder:"moddy_player_sons"
        },(err,result)=>{
             if(err){
                reject(err)
             }else{
                resolve(result)
             }
        })
    })
};

module.exports = uploadFile;
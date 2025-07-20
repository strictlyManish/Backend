const express = require("express");
const multer = require("multer");
const router = express.Router();
const uploadFile = require("../service/storage.service")
const upload = multer({storage:multer.memoryStorage()});
const song = require("../models/song.model")


router.post("/songs",upload.single("audio"), async (req,res)=>{
    const fileData = await uploadFile(req.file);
    const {title,mood,artist,audio} = req.body


    const songs = await song.create({
        title:title,
        mood:mood,
        artist:artist,
        audio:fileData.url
    })

    res.status(201).json({
        msg:"Success : Data uploded",
        data:req.body,
        file:songs
    })
});

router.get("/songs", async (req,res)=>{
    const {mood} = req.query;
    let sonsdata = await song.find({mood:mood});

    res.status(201).json({
        msg:"Success : song fetched ",
        data:sonsdata
    })
});



module.exports = router;
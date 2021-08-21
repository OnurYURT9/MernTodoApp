const mongoose = require("mongoose")

const Schema = mongoose.Schema

const GorevSchema = new Schema({
    isim:{
        type:String,
        required:true
    },
    olusturulma_tarihi:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("task",GorevSchema)
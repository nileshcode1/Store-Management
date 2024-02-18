const express = require("express");
const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    name: {
        type:String
    },
    qty: {
        type:Number
    },
    unit: {
        type:String
    },
    category: {
       type:String 
    },
    image: {
        type:String
    },
    id: {
        type:Number
    }
})

const ItemsList = new mongoose.model("Item", itemSchema);

module.exports = ItemsList;
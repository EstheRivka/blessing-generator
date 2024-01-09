// import express  from "express";
// import router from "./router.js";
const express = require("express");
const router=require("./router.js");
const app = express();
app.use(express.json());
app.use("/", router);


app.listen(3000, () => {
    console.log("app ruuning");
});

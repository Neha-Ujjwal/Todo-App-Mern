// const express = require("express");
import express from "express";
import connectToDB from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Routes);
const PORT = 8000;

connectToDB();

app.listen(PORT, () => {
  console.log(`Your server is successfully running at ${PORT}`);
});

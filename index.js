import express from "express";
import consign from "consign";

console.log("Iniciando projeto");

const app = express();

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

module.export = app;

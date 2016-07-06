import express from "express";

const PORT = 3000;

const app = express();

console.log("Iniciando projeto");

app.set("json spaces", 4);

app.get("/", (req, res) => res.json({status: "Ntask API"}));
app.get("/tasks", (req, res) => res.json({
    "tasks" : [
        {"title" : "Comprar pão"},
        {"title" : "Namorar"},
        {"title" : "teste"}
    ]
}));


app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));


module.export = app => {
    app.get("/", (req, res) => res.json({status: "Ntask API"}));
}

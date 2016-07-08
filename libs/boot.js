
// module.exports = app => {
//     app.listen(app.get("port"), () => {
//         console.log(`NTask API - porta ${app.get("port")}`);
//     });
// }


module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Ntask API - porta ${app.get("port")}`);
    });
}

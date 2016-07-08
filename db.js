import Sequelize from "sequelize";
const config = require("./libs/config.js");
let sequelizer = null;

module.exports = () => {
    if(!sequelizer) {
        sequelizer = new Sequelize (
            config.database,
            config.username,
            config.password,
            config.params
        );
    }
    return sequelizer;
}

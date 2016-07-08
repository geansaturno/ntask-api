module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback ([
                {"title" : "Comprar pão"},
                {"title" : "Namorar"},
                {"title" : "teste"}
            ]);
        }
    };
};

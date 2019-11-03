module.exports = function (app, server) {
    require('./public')(app);
    require('./movies')(app);
    require('./health')(app);
};

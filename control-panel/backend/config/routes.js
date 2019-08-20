const admin = require('./admin')

module.exports = app => {
    app.get(app.api.houses.get)
    app.get(app.api.clients.get)

    app.route('/regactions')
        .post(app.api.actions.save)

    //app.post('/regadm', app.api.admin.save)


    app.route('/houses')
        //.all(app.config.passport.authenticate())
        .post(app.api.houses.save)
        

    app.route("/clients")
        //.all(app.config.passport.authenticate())
        .post(app.api.clients.save)
        .get(app.api.clients.get)
        

    app.route('/news')
        //.all(app.config.passport.authenticate())
        .post(/* admin( */app.api.news.save/* ) */)

    app.route('/neighborhood')
        .post(app.api.neighborhood.save)
        .get(app.api.neighborhood.get)

    app.route('/uploads')
        .post(app.api.uploads.save)
}
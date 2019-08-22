const admin = require('./admin')

module.exports = app => {
    app.get(app.api.houses.get)
    app.get(app.api.clients.get)

    //app.post('/regadm', app.api.admin.save)


    app.route('/houses')
        //.all(app.config.passport.authenticate())
        .post(app.api.houses.save)
        .get(app.api.houses.get)

    app.route('/houses/:id')
        .delete(app.api.houses.remove)
        .put(app.api.houses.save)
        

    app.route("/clients")
        //.all(app.config.passport.authenticate())
        .post(app.api.clients.save)
        .get(app.api.clients.get)

    app.route("/clients/:id")
        .delete(app.api.clients.remove)
        

    app.route('/news')
        //.all(app.config.passport.authenticate())
        .post(/* admin( */app.api.news.save/* ) */)

    app.route('/neighborhood')
        .post(app.api.neighborhood.save)
        .get(app.api.neighborhood.get)

    app.route('/uploads')
        .post(app.api.uploads.save)
    
    app.route('/housePics')
        .post(app.api.housesPics.save)
        .get(app.api.housesPics.get)
    
    app.route('/housePics/:id')
        .delete(app.api.housesPics.remove)

    app.route('/actions')
        .post(app.api.actions.save)
        .get(app.api.actions.get)

    app.route('/actions/:id')
        .delete(app.api.actions.remove)
        .put(app.api.actions.save)

    app.route('/actionPics')
        .post(app.api.actionsPics.save)
        .get(app.api.actionsPics.get)
}
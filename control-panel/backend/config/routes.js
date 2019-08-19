const admin = require('./admin')

module.exports = app => {
    app.get(app.api.houses.get)
    app.get(app.api.clients.get)

    app.route('/regactions')
        .post(app.api.actions.save)

    //app.post('/regadm', app.api.admin.save)


    app.route('/houses')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.houses.save))
        

    app.route("/clients")
        .all(app.config.passport.authenticate())
        .post(admin(app.api.clients.save))
        

    app.route('/news')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.news.save))
}
const multer = require('multer')
const path = require('path')

module.exports = app => {
    const save = (req, res) => {
        const storage = multer.diskStorage({
            destination: `./uploads/`,
            filename: function(req, file, cb){
                cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
            }
        })
        
        const upload = multer({
            storage: storage,
        }).any()

        upload(req, res, (err) => {
            const imgsPath = []
            for(let i = 0; i < req.files.length; i++){
                imgsPath.push(path.normalize(req.files[i].path))
            }

            console.log(imgsPath)
            
            res.status(201).send(imgsPath)

        })
    }

    return {save}
}
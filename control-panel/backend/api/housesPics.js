module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = async (req, res) => {
        const housePics = { ...req.body }

        try {
            existsOrError(housePics.idHouse, 'Imóvel não informado')
            existsOrError(housePics.pics, 'Não existem imagens para serem salvas')
        }
        catch (err) {
            res.status(500).send(err)
        }

        for(let i = 0; i < housePics.pics.length; i++){
            app.db('houses-pics')
                .insert({idHouse:housePics.idHouse, url:housePics.pics[i]})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código é inexistente!')

            const rowsDeleted = await app.db('houses-pics').del()
                .where({ id: req.params.id })
            existsOrError(rowsDeleted, 'Imagem não encontrada')

            res.status(204).send
        }
        catch (msg) {
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('houses-pics')
            .then(houses => res.json(houses))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('houses-pics')
            .where({ id: req.params.id })
            .first()
            .then(house => res.json(house))
    }

    return { save, remove, getById, get }
}
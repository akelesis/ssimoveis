module.exports = app =>{
    const {existsOrError} = app.api.validation

    const save = (req, res) =>{
        const houseInfo = {...req.body}

        
        
        if(req.params.id) houseInfo.id = req.params.id

        try{
            
            existsOrError(houseInfo.title, 'Titulo não informado!')
            existsOrError(houseInfo.description, 'Descrição do imóvel não informada')
            existsOrError(houseInfo.price, 'Valor do imóvel não informado!')
            existsOrError(houseInfo.type, 'Tipo do imóvel não informado')
            existsOrError(houseInfo.area, 'Zona do imóvel não informada')
            existsOrError(houseInfo.neighborhood, 'Bairro do imóvel não informado')
            existsOrError(houseInfo.transaction, 'Tipo de transação do imóvel não informada')
        }
        catch(err){
            res.status(400).send(err)
        }
        
        houseInfo.price = parseFloat(houseInfo.price)
        if(houseInfo.id){
            app.db('houses')
                .update(houseInfo)
                .where({id: houseInfo.id})
                .then(res => res.status(201).send(res.data))
                .catch(err => res.status(500).send(err))
        }
        else{
            app.db('houses')
                .insert(houseInfo)
                .then(_ => res.status(201).send())
                .catch(_ => res.status(500).send())
        }
    }

    const remove = async (req, res) => {
        try{
            existsOrError(req.params.id, 'Código é inexistente!')

            const rowsDeleted = await app.db('houses').del()
                .where({id: req.params.id})
            existsOrError(rowsDeleted, 'Imóvel não encontrado')

            res.status(204).send
        }
        catch(msg){
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('houses')
            .then(houses => res.json(houses))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('houses')
            .where({id: req.params.id})
            .first()
            .then(house => res.json(house))
    }

    return {save, remove, getById, get}
}
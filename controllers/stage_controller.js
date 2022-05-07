// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stages } = db 

// FIND ALL BANDS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stages.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC STAGE
stages.get('/:id', async (req, res) => {
    try {
        const foundStages = await Stages.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})


// CREATE A STAGE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stages.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stages.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stages.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// EXPORT
module.exports = stages
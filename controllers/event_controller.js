// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Events } = db 

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try {
        const foundEvents = await Events.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// UPDATE AN EVENT
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Events.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// DELETE AN EVENT
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Events.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = events
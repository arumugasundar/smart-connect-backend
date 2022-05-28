const express = require("express");
const router = express.Router();
const EventModel = require("../models/event");

router.get('/', (req,res) => {
    res.send('response from dashboard.js!');
});

router.get('/getPrevEvents/:id/:type', (req,res) => {
    const refId = req.params.id; /* First News Id */
    
    if(req.params.type === '0'){ /* For All Types of News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('_id').gt(refId)
        .sort({ _id: 1})
        .limit(5)
        .then( events =>{
            res.send(events.reverse());
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else if(req.params.type === '1'){ /* For Positive News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').gte(0)
        .where('_id').gt(refId)
        .sort({ _id: 1})
        .limit(5)
        .then( events =>{
            res.send(events.reverse());
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else{ /* For Negative News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').lt(0)
        .where('_id').gt(refId)
        .sort({ _id: 1})
        .limit(5)
        .then( events =>{
            res.send(events.reverse());
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }
});

router.get('/getNextEvents/:id/:type', (req,res) => {
    const refId = req.params.id; /* Last News Id */

    if(req.params.type == '0'){ /* For All Types of News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .sort({ _id: -1})
        .where('_id').lt(refId)
        .limit(10)
        .then( events => {
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else if(req.params.type == '1'){ /* For Positive News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').gte(0)
        .sort({ _id: -1})
        .where('_id').lt(refId)
        .limit(10)
        .then( events => {
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else{ /* For Negative News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').lt(0)
        .sort({ _id: -1})
        .where('_id').lt(refId)
        .limit(10)
        .then( events => {
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }
});

router.get('/getInitialEvents/:type', (req,res) => {

    if(req.params.type == '0'){ /* For All Types of News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .sort({ _id: -1})
        .limit(15)
        .then( events =>{
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else if(req.params.type == '1'){ /* For Positive News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').gte(0)
        .sort({ _id: -1})
        .limit(15)
        .then( events =>{
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }else{ /* For Negative News */
        EventModel
        .find({})
        .select('Date Actor2Geo_Fullname Actor1Geo_Fullname ActionGeo_Fullname AvgTone HEADLINE SOURCEURL')
        .where('AvgTone').lt(0)
        .sort({ _id: -1})
        .limit(15)
        .then( events =>{
            res.send(events);
        }).catch(err => {
        res.send({message:err.toString()});
        });
    }
});

module.exports = router;
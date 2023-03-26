const Service = require('../models/service');

const getAllServices = async (req, res) => {
try {
    const services = await Service.find({});

    res.json(services)
} catch (error){
    console.error(error);
    res.status(500).json({message:'Server Error'});
}
}

const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
    
        res.json(service)
    } catch (error){
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
    }

    module.exports = {
        getAllServices,
        getServiceById,
    }
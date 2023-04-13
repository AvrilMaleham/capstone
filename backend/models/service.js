const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    paraone: {
        type: String,
        required: true,
    },
    paratwo: {
        type: String,
       
    },
    parathree: {
        type: String,
      
    },
    parafour: {
        type: String,
       
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;
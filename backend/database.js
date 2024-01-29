const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:root@clustergaia.t9u3di8.mongodb.net/Repaso';

mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(err=>console.error(err));

module.exports = mongoose;
const express = require('express');
    var path = require('path');
    var cors = require('cors');
    var mongoose = require('mongoose');
    var config = require('./config/DB');

    const itemRoutes = require('./expressRoutes/itemRoutes');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors());

    app.use('/items', itemRoutes);
    
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
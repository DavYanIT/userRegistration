const express = require('express');
const app = express();
const port = 3070;

app.get('/', function(req, res) {
    res.send('App works!!');
});

app.listen(port, function(err) {
     console.log('running server on from port:::::::' + port);
});

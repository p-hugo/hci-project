const Express = require('express');
const path = require('path');
let app = Express();

app.use(Express.static("public"));

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, "songdb.html"));

});

app.listen(8080);
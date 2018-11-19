const Express = require('express');
const path = require('path');
let app = Express();
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.use(Express.static("public"));

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, "songdb.html"));

});

app.listen(server_port, server_ip_address);
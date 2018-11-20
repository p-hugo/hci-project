const Express = require('express');
const path = require('path');
let app = Express();
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.use(Express.static("build"));

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, "build", "index.html"));

});

app.listen(server_port, server_ip_address, ()=>{
    console.log(`Server running ${server_ip_address}:${server_port}`);
});
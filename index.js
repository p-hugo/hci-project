const Express = require('express');
const path = require('path');
let app = Express();
const server_port = process.env.PORT || 8080;
app.use(Express.static("build"));

app.get('/', (req, res) =>{

    res.sendFile(path.join(__dirname, "build", "index.html"));

});

app.listen(server_port, ()=>{
    console.log(`Server running on port ${server_port}`);
});
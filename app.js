const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

//middlewares
app.use(express.static("public"));




// Routes
app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "/views/home.html"))
    // res.write("Hola Mundo")
    // res.end()
});

app.get("/register", (req,res)=> {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", (req,res)=> {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

// Server
app.listen(PORT, () => console.log(` 
Servidor escuchando en el puerto ${PORT} 
http://localhost:${PORT}
`));
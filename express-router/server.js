const { json } = require('express');
const express = require('express');

//Index Router
// const index = require('./routes/index')

const path = require('path')

//Direct Routes
const alphaRouter = require('./routes/alpha')
const betaRouter = require('./routes/beta')





//set a port
const PORT = 3001;

//instantiate express
const app = express();

//socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json())

app.use('/alpha', alphaRouter)
app.use('/beta', betaRouter)

app.use(express.static('public'))

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.send('You may not like it, but I am the homepage')
})

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/form.html'))
})

app.get('*', (req, res) => {
  res.send('You may not like it, but I am a page')
})


// app.use('/', index)



// GET Route for homepage


//Listen for traffic on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

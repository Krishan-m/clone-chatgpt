const express = require('express')
const path = require('path')
const ollama = require('ollama');
const port = 3000;

const app = express()

app.use(express.urlencoded({extended: true}))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('main')
})

app.post('/sendChat', async (req, res)=>{
    const response = await ollama.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: req.body.userQuery }]
      });
      console.log(response.message.content);    
    console.log(req.body.userQuery)
})

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
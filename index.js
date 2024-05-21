const express = require('express')
const path = require('path')
const {default: ollama} = require('ollama');

const port = 3000;

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render('main')
})

app.post('/response/sendChat', async (req, res)=>{
    console.log(req.body.userQuery)
    const response = await ollama.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: req.body.userQuery }]
      });
    console.log("Giving response")
    console.log(response)
    res.json(response)
})

app.listen(port, ()=> console.log(`Listening at http://localhost:${port}`))
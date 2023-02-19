const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(
    path.join(__dirname, './out')
))

app.get('/l',(req, res) => {
    res.json({message:'Bienvenu'})
})
const port = process.env.PORT || 3001

app.listen(port, () => console.log(port))
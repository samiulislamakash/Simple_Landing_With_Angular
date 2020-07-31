const express = require('express')
const path = require('path')

const app =  express()
const port = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname,'../dist/Resturent')))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,'../dist/Resturent/index.html'))
})
app.listen(port, ()=>{
    console.log('Angular in production port'+port)
})
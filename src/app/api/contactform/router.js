const express = require('express')
const contactModel = require('../../../../Schema/Contact_Schema')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const MongoDB = process.env.MONGODB;

const ConnectDB = mongoose.connect(MongoDB)
.then(() => console.log('Connected to MongoDB'))
.catch((err)=> console.error('Could not connect to MongoDB:', err))

ConnectDB();

app.post('/contactform',(req,res)=>{
    // const [name, email, phone, ]
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
require('dotenv').config()
import mongoose from 'mongoose'

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const dbname = process.env.MONGO_DATABASE;
const uri = 
`mongodb+srv://${user}:${password}@prueba.bcbg6.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Db is conected'))
    .catch(error => console.log(error))
import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/webprojectdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is conected'))
    .catch(error => console.log(error))
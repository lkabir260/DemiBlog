const express =require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()


mongoose.connect('mongodb://localhost/blog', { 
    userNaeUrlPArser: true , userUnifiedTopology: true
})
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false}))

// app.get('/', (req,res)  => {
//     res.send('Hello World')

app.get('/', (req, res)  => {
    const articles = [{
        title: 'Test',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles: articles})

})

app.listen(5000)
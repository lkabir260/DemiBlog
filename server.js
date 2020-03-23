const express =require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// app.get('/', (req,res)  => {
//     res.send('Hello World')

app.get('/', (req, res)  => {
    const articles = [{
        title: 'Test',
        createAt: Date.now(),
        description: 'Test description'
    },
    {
        title: 'Test2',
        createAt: Date.now(),
        description: 'Test description 2'
    }]
    res.render('index', { articles: articles})

})

app.listen(5000)
const express = require('express')
const router = express.Router()
const axios = require('axios')


// API for all the news 
router.get('/', async(req, res) => {
    try {
        var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3bd4ba881709410e983f0d0ff5ebc64e'

        const news_get = await axios.get(url)
        res.render('news', {articles:news_get.data.articles})


    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})


// API for search to be used on the frontend for searching
router.post('/search', async(req, res) => {
    const search = req.body.search

    try {
        var url = `http://newsapi.org/v2/top-headlines?country=${search}&apiKey=3bd4ba881709410e983f0d0ff5ebc64e`

        const news_get = await axios.get(url)
        res.render('news', {articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

module.exports = router
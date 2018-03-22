const express = require('express');
const router = express.Router();
const database = require('../db');

//Consultar todas las notas o las notas marcadas como favoritas
router.get('/tweets', (req, res) => {
  let favorite = req.query.favorite;
  res
    .status(200)
      .json(database.get('tweets',favorite));
});

//Consultat una nota
router.get('/tweets/:id', (req, res) => {
  let tweetId = req.params.id;
  res
    .status(200)
      .json(database.getByid(tweetId));
});

//Crear una nota
router.post('/tweet', (req, res) => {
  const _tweet = req.body;
  const { tweet, comment, favorite } = _tweet;
  if (!tweet || !comment ) {
      console.log('Tweets and comments are required')
      res.sendStatus(400);
  } else {
    try {
      database.addTweet(req.body);
      res.sendStatus(204);
    } catch(e) {
      console.log(e)
      res.sendStatus(404);
    }
  }
});

//Marcar como favorita una nota
router.put('/tweet/:id', (req, res) => {
  const tweetId = req.params.id;
  let tweet = req.body;
  let { favorite } = tweet;
  res
    .status(200)
      .json(database.setFavorite(tweetId, favorite));

});

module.exports = router;
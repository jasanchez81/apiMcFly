const fs = require('fs');
const path = require('path');

class DB {
    constructor() {
        this.dbPath = path.join(__dirname, 'db.json');
        this._db = JSON.parse(fs.readFileSync(this.dbPath, 'utf-8'));
    }
    
    get(key, favorite) {
        let arrayTweets = [];
        if(favorite){
            let totalTweets = this._db.tweets;
            for(let i=0; i<totalTweets.length; i++){
                let tweetId = this._db.tweets[i];
                if( tweetId.favorite == true ){
                    arrayTweets.push(tweetId)
                }
            }   
            return arrayTweets;
        }else{
            console.log(`get(${key})`);
            return this._db[key];
        }
    }
    
    getByid(id,like){
        let totalTweets = this._db.tweets;
        for(let i=0; i<totalTweets.length; i++){
            let tweetId = this._db.tweets[i];
            if( tweetId.id == id ){
                return totalTweets[i];
            }
        }   
    }

    addTweet(tweet) {
        if (!tweet.tweet || !tweet.comment) {
            throw new Error('Tweets y comments are required');
        }
        const tweets = this.get('tweets');

        tweet.id = Math.random().toString(4).slice(2);
        tweets.push(tweet);

        //Escribimos en fichero db.json. Este fichero simula el almacenamiento en BBDD.
        this._writeDB();
    }

    _writeDB() {
        fs.writeFile(this.dbPath, JSON.stringify(this._db), 'utf-8', (err) => {
            if (err) {
                console.error('Error al escribir fichero: ', err);
            } else {
                console.log('El tweet se ha almacenado correctamente!');
            }
        });
    }

    setFavorite(id, favorite){
        const tweets = this.get('tweets');
        for(let i=0; i<tweets.length; i++){
            let tweet = this._db.tweets[i];
            if( tweet.id == id ){
                let aux = tweet;
                tweets.splice((tweets.indexOf(tweet)),1)
                aux.favorite = favorite;
                tweets.push(aux);
                this._writeDB();
                return this._db['tweets'];
            }
        }
    }
}
module.exports = new DB();
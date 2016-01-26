var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    port = process.env.PORT || 3000,
    app = express()

app.use( bodyParser.json() )

var router = express.Router()

router.get( '/', function( req, res ) {
  console.log( 'get' )
  setTimeout( function() {
    res.json({
      message: 'hello!'
    })
  }, 5000 )
})

router.post( '/', function( req, res ) {
  console.log( 'post' )
  setTimeout( function() {
    res.json({
      message: 'hello!'
    })
  }, 5000 )
})

app.use( '/', router )

app.listen( port )

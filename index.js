var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    port = process.env.PORT || 3001,
    app = express()

app.use( bodyParser.json() )

var router = express.Router()

router.get( '/', function( req, res ) {
  console.log( 'get' )
  res.json({
    message: 'hello!'
  })
})

router.post( '/', function( req, res ) {
  console.log( 'post' )
  res.json({
    message: 'hello!'
  })
})

app.use( '/', router )

app.listen( port )

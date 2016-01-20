var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    port = process.env.PORT || 3000,
    app = express()

app.use( bodyParser.json() )

var router = express.Router()

router.get( '/', function( req, res ) {
  res.json({
    message: 'hello!'
  })
})

app.use( '/api', router )

app.listen( port )

var express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' )

var port = process.env.PORT || 3000

app.use( bodyParser.json() )

app.listen( port )

# connect-mongo-session-store

## An implementation of connect session store with MongoDb.
    * It also support passport authentication automatically.
    * Specified https://github.com/senchalabs/connect/blob/master/lib/middleware/session/store.js

## Installation

    $ npm install connect-mongo-session-store

## Usage

    var express = require('express'),
    sessionStore = require("connect-mongo-session-store")(express),
    app = express(),
    server = http.createServer(app),
    sessionStore = new sessionStore({
        host: 'localhost',
        port: 27017,
        db: 'mydb',
        stringify: false,
        maxAge: 60 * 60 * 1000,
        autoRemoveExpiredSession: true
    });
    app.use(express.session({
        secret: 'mlpi',
        key: 'mlpi.sid',
        cookie: {
          path: '/',
          domain: '',
          httpOnly: true,
          maxAge: 60 * 60 * 1000
        },
        store: sessionStore
    }));


## Credits

  - [Sajib Sarkar](http://github.com/thebapi)

## License

The MIT License (MIT)

Copyright (c) 2013 Sajib Sarkar

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


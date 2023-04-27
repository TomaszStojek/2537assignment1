const express = require('express');
const app = express();
const session = require('express-session');
const port = process.env.PORT || 4000;
const node_session_secret = '63e21b25-6461-41f1-ab4b-771624025b83';
app.use(session({
    secret: node_session_secret,
    saveUninitialized: false,
    resave: true
}))

// var pageHits = 0;
app.get('/', (req, res) => {
    if(req.session.pageHits == null) {
        req.session.pageHits = 0;
    }
    req.session.pageHits++;
    res.send('You have visited this page ' + req.session.pageHits + ' times');
})

app.listen(port, () => {
    console.log(`Node App is Listening on port ${port}`);
})
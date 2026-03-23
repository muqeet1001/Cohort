import fs from 'fs'
import express from 'express'

const app = express();

function sendHtmlPage(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Page</title>
        </head>
        <body>
            <h1>Hello 👋</h1>
            <p>This is a simple HTML response.</p>
        </body>
        </html>
    `);
}

app.get('/',sendHtmlPage);
app.listen(3000,()=>{
    console.log("server is running ");
})

import express from "express"

const app = express();
app.get('/sum',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const name = (req.query.name) 
    console.log(name);
    
    const sum = a+b;
     res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Multiplication Result</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 50px;
                }
                .box {
                    padding: 20px;
                    border: 2px solid #333;
                    display: inline-block;
                    border-radius: 10px;
                }
                h1 {
                    color: green;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h2>Sum Result</h2>
                <p>${a} × ${b} =</p>
                <h1>${sum}</h1>
            </div>
        </body>
        </html>
    `);
})

app.get('/sub/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const sum = a-b;
    res.json({
        ans:sum
    })
})

app.get('/mul',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a*b;
    res.json({
        ans:sum
    })
})
app.get('/div',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a/b;
    res.json({
        ans:sum
    })
})
app.listen(3000,()=>{
    console.log("Server is running is port 3000");
})

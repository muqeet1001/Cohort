import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/sum', (req, res) => {
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);
   const ans = a+b;
   res.json({
     sum:ans
   })
})

app.get('/sub', (req, res) => {
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);
   const ans = a-b;
   res.json({
     sub:ans
   })
})



app.listen(3000, () => {
    console.log("server is running in port 3000");

})


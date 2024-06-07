const express=require('express')
const app=express();
const port=3000
const userRouter=require('./routes/user.route')
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.get('/',(req,res)=>
{
    res.send(`Hello I am Home Page`)
})

app.use((req,res)=>
{
    res.send(`404!! Not Found `)
})
app.listen(port,()=>
{
    console.log(`server is running at http://localhost:${port}`)
})
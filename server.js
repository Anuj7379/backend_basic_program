// const express =require('express');
// const app = express();
// const port =4010;
// app.get('/',(req,res)=>{
//     res.send("<h1>hi anuj gvhjdgsu<h1>")
// })
// app.listen(port,()=>{
//     console.log(`server is runnibg at ${port}`)

// })
//---------------------------------------------------------

const app = require('./app')
const PORT =process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is runnibg at ${PORT}`)
})

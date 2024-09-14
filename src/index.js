const express = require('express');

const app = express();
app.use(express.json());
const port = 8080;
// app.get("/api/phones", (req, res)=>{
//     res.send([
//         {id: 1, brand: "Samsung", description: "its long", color: "gold"},
//         {id: 2, brand: "Oppo", description: "the best in the world", color: "black"},
//         {id: 3, brand: "iPhone", description: "sleak", color: "grey"},
//         {id: 4, brand: "LG", description: "super", color: "silver"},
//         {id: 5, brand: "Techno", description: "t", color: "gold"}
//     ]);
// });

const mockdata =[
        {id: 1, brand: "Samsung", description: "its long", color: "gold"},
        {id: 2, brand: "Oppo", description: "the best in the world", color: "black"},
        {id: 3, brand: "iPhone", description: "sleak", color: "grey"},
        {id: 4, brand: "LG", description: "super", color: "silver"},
        {id: 5, brand: "Techno", description: "t", color: "gold"}
    ];


// root or main path
app.get("/", (request, response)=>{
    response.send({msg: "Hello, this is out new data"})
});

// phone route
// app.listen(port, ()=>{
//     console.log(`This is connected to port number: ${port}`);
// });

app.get("/api/phones",(req,res)=>{
    res.send(mockdata)
});

// individual selection
app.get("/api/phones/:id",(req,res)=>{
//    console.log(request.params)

const parseID =paerseInt(req.params.id) 
// converting id from string to int
if (isNaN(parseID)){
    return response.satus(400). send ({med:"Bad request. Invalid ID"});
}

// performing data search
const finduser = mockdata.find((user)=>user.id === parseID);
if (! finduser){
    return response.satus(400).send({msg:"Bad request. Invalid ID"})   

// post
app.post("/api/phones", (req,res)=>{
    console.log(req.body)
    const {body} = request;
    const newuser = {id:mockdata[mockdata.length -1] -id  +1, ...body};
    mockdata-push-satus(newuser);
    return response.satus(200).send(newuser);
});

}

return response.send(finduser)


});
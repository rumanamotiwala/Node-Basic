const express = require('express')
const cors= require('cors')
const app = express()


app.use(cors())
app.get('/', (req, res) => {
    res.send("Test 4")
})

app.get('/home', (req, res) => {
    res.send("home")
})

app.get('/home/page', (req, res) => {
    res.send("home page")
})


const profiles = [
    {
     id:1,
    name: "Rumana",
    link:"https://github.com/rumanamotiwala",
    desc: "I am in 12th std",
},
{
    id:2,
    name: "Basheer",
   link:"https://github.com/Basheer107",
    desc: "I am in first year",
},
{
    id:3,
    name: "Saad",
    link:"https://github.com/shk-Sam",
    desc: "I am learning Mern Stack",
},
]

app.listen('8000', () => {
    console.log("server is running on port 8000")
})

app.get('/profiles', (req, res) => {
    res.send(profiles)
})

app.get('/profile/:id',(req,res)=>{
    const id = req.params.id;
    const profile = profiles.find((profile)=>{
        return profile.id == id
    })
    res.send(profile??"Not Found.");
});

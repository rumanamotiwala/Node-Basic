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
    age: 17,
    desc: "I am in 12th std",
},
{
    name: "Tehseen",
    age: 21,
    desc: "I have completed with graduation",
},
{
    name: "Moin",
    age: 12,
    desc: "I am in 7th std",
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

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const port = 4000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    srNo : 1,
    name : "Ankush",
    surname : "Kawde"
  },
  {
    srNo : 2,
    name : "Akanksha",
    surname : "Kawde"
  },
  {
    srNo : 3,
    name : "Ashwini",
    surname : "Kawde"
  },
  {
    srNo : 4,
    name : "Kamal",
    surname : "Kawde"
  },
  {
    srNo : 5,
    name : "Rajendra",
    surname : "Kawde"
  }
]

app.get("/api/getUsers", (request,response) => {
  response.send(users)
})

app.post("/api/createUser", (request,response) => {
  if(request.body){
    users.push({...request.body , srNo: users.length + 1})
  }
  response.send(users)
})

app.listen(port, () => {
  console.log("Listening on Port ", port);
});

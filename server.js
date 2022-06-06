const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheya Bin Abraham",
    birthLocation: "London, england",
  },
  "chance the rapper": {
    age: 29,
    birthName: "chancellor",
    birthLocation: "Chicaho, Illinouis",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/", (req, res) => {
 
res.redirect('/')
 
  });

app.get("/api/:nome", (req, res) => {
  const rapperName = req.params.nome.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Better go catch it`);
});

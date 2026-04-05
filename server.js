const express = require("express");
const cors = require("cors");
const pronote = require("pronote-api");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { url, username, password } = req.body;

  try {
    const session = await pronote.login(url, username, password);

    res.json({
      success: true,
      name: session.user.name
    });

  } catch (err) {
    res.json({
      success: false,
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});


const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Route principale
app.get("/", (req, res) => {
    res.send("Hello from Render!");
});

// Démarrer le serveur
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});

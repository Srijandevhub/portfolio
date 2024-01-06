const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.render("index", { title: "Srijan Sinha | Developer", "h1": ["Srijan Welcome", "Srijan Welcome1"], "h2": [{ content: "Name" }, { content: "Mail" }] });
})
module.exports = router;
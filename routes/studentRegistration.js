const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    res.status(200).json({message: "this is register route"});
});

router.post('/login', async (req, res) => {
    res.status(200).json({ message: " this is the login route" });
})
router.get('/me', async (req, res) => {
    res.status(200).json({ message: "this is aboutMe route"});
});
module.exports = router;

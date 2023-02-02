const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    res.status(200).json({message: "this is register route"});
});


module.exports = router;

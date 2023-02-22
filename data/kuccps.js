const axios = require('axios');
const fs = require('fs');
const getKuccps = async (req, res) => {
    try {
        const { data } = await axios.get('https://kuccps.net/api/v1/programmes');
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}


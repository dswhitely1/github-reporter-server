const axios = require('axios');

async function findProfile(req, res, next) {
    const {user} = req.params;
    try {
       const response = await axios.get(`http://api.github.com/users/${user}`);
        res.json(response.data);
    } catch (error) {
        next(error)
    }
}

module.exports = {findProfile}
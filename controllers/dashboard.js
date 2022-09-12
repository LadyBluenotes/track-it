const Dashboard = require('../models/Dashboard')

module.exports = {
    getDashboard: async (req, res) => {
        console.log(req.user)
    }
}
const Developer = require('../models/Developer');

module.exports = {
    async index(req, res) {
        try {
            const developers = await Developer.findAll();
            return res.json(developers);
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
    async store(req, res) {
        try {
            console.log('ok');
            const { name } = req.body;
            const developer = await Developer.create({ name });
            return res.json(developer);
        } catch (error) {
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    }
};
const Developer = require('../models/Developer');

module.exports = {
    // List
    async index(req, res) {
        try {
            const developers = await Developer.findAll();
            return res.json(developers);
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
    // Find By Id
    async find(req, res) {
        try {
            const { developerId } = req.params;
            const developers = await Developer.findByPk(developerId);
            return res.json(developers || { message: 'developer not exist' });
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Create
    async store(req, res) {
        try {
            const { name } = req.body;
            const developer = await Developer.create({ name });
            return res.json(developer);
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
    // Update
    async update(req, res) {
        try {
            const { developerId: id } = req.params;
            const { name } = req.body;
            // Validate that developer exists
            const developer = await Developer.findByPk(id);
            if (developer) {
                const [code, developerUpdated] = await Developer.update({ name }, { where: { id } });
                return res.json({ message: code ? 'Developer updated successfully!' : `Developer already have data "${name}"` });
            } else {
                return res.json({ message: 'Developer not found' });
            }
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Delete
    async destroy(req, res) {
        try {
            const { developerId: id } = req.params;

            const code = await Developer.destroy({ where: { id } });
            return res.json({ message: code ? 'Developer deleted Successully' : 'Developer not found' });
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    }
};
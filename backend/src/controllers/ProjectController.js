const Project = require('../models/Project');
const Developer = require('../models/Developer');

module.exports = {
    // List All Projects
    async index(req, res) {
        try {
            const projects = await Project.findAll();
            return res.json(projects);

        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
    // Find By Id
    async find(req, res) {
        try {
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Create And associate for dev
    async store(req, res) {
        try {
            const { developerId } = req.params;
            const { name, description } = req.body;

            const developer = await Developer.findByPk(developerId)

            if (!developer) {
                return res.status(400).send({ error: 'Developer not found' });
            }
            const [ project, created ]  = await Project.findOrCreate({
                defaults: { name, description },
                where: { name },
            });
            await developer.setProjects([project]);

            return res.json({ developer })
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
    // Update
    async update(req, res) {
        try {
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Delete
    async destroy(req, res) {
        try {
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    }
};
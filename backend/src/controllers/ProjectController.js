const Project = require('../models/Project');
const Developer = require('../models/Developer');
const DeveloperProjects = require('../models/DeveloperProjects');

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
    // List By Developer
    async indexForDeveloper(req, res) {
        try {
            const { developerId } = req.params;

            const developer = await Developer.findByPk(developerId)

            if (!developer) {
                return res.status(400).send({ error: 'Developer not found' });
            }
            const projects = await developer.getProjects();

            return res.json({ projects })
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Create And associate for dev
    async store(req, res) {
        try {
            const { developerId } = req.params;
            const { name, description, workedTimeInMiliseconds } = req.body;
            const developer = await Developer.findByPk(developerId)

            if (!developer) {
                return res.status(400).send({ error: 'Developer not found' });
            }

            const [project, created] = await Project.findOrCreate({
                defaults: { name, description },
                where: { name },
            });
            project.developerProjects = {
                workedTimeInMiliseconds, developerId
            };
            console.log(project);
            const devProject = await DeveloperProjects.create(project);

            return res.json({ devProject })
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Delete Project for user
    async destroyForDeveloper(req, res) {
        try {
            const { developerId } = req.params;
            const { name } = req.body;

            const developer = await Developer.findByPk(developerId)

            if (!developer) {
                return res.status(400).send({ error: 'Developer not found' });
            }

            const project = await Project.findOne({ where: { name } });
            await developer.removeProject(project);

            return res.json({ developer })
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    }
};
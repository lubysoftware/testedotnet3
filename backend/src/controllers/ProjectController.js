const Project = require('../models/Project');
const Developer = require('../models/Developer');
const DeveloperProject = require('../models/DeveloperProject');

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

            const developer = await DeveloperProject.findByPk(developerId)

            if (!developer) {
                return res.status(400).send({ error: 'Developer not found' });
            }
            console.log(developer);
            const projects = await developer.getProjects();

            return res.json({ projects })
        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Find Project By Developer
    async findforDeveloperByProject(req, res) {
        try {
            const { developerId } = req.params;
            const { projectId } = req.params;

            const developerProject = await DeveloperProject.findOne({ where: { developerId, projectId } })

            if (!developerProject) {
                return res.status(400).send({ error: 'Developer not found' });
            }
            return res.json({ developerProject })
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

            const devProject = await DeveloperProject.create(
                { developerId: developer.id, workedTimeInMiliseconds, projectId: project.dataValues.id },
                { fields: ['developerId', 'workedTimeInMiliseconds', 'projectId'] }
            );
            return res.json({ project })

        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },

    // Update project for dev
    async update(req, res) {
        try {
            const { developerId } = req.params;
            const { projectId } = req.params;

            const { workedTimeInMiliseconds } = req.body;

            const developerProject = await DeveloperProject.findOne({ where: { developerId, projectId } })
            const workedTimeIncremented = workedTimeInMiliseconds + developerProject.workedTimeInMiliseconds;
            console.log(workedTimeIncremented);
            const [code, developerProjectUpdated] = await DeveloperProject.update(
                { workedTimeInMiliseconds: workedTimeIncremented > 0 ? workedTimeIncremented : 0 },
                { where: { id: developerProject.id } }
            );
            console.log(developerProjectUpdated);
            return res.json({ message: code ? 'Developer Worked Time updated successfully!' : `Developer Worked Time isn't updated` });

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
const { Op, fn, col } = require('sequelize');
const Developer = require('../models/Developer');
const Project = require('../models/Project');
const DeveloperProject = require('../models/DeveloperProject');
const dayjs = require('dayjs');
module.exports = {
    // List Ranking
    async index(req, res) {
        try {
            const startDate = new Date(dayjs().startOf('week').toISOString());
            const endDate = new Date(dayjs().endOf('week').toISOString());
            const developerProjects = (await DeveloperProject.findAll({
                attributes: [
                    [fn('sum', col('workedTimeInMiliseconds')), 'totalTime'],
                    'updatedAt',
                    'developerId',
                ],
                where: {
                    updatedAt: {
                        [Op.between]: [
                            startDate,
                            endDate,
                        ]
                    }
                },
                group: ['developerId'],
                include: [
                    {
                        model: Developer,
                        as: 'Developers',
                        attributes: ['name'],
                    },
                ],
                order: [[fn('sum', col('workedTimeInMiliseconds')), 'DESC']]
            }));

            return res.json(developerProjects);

        } catch (error) {
            console.log(error);
            return res.status(error.code || 400).json({ code: error.code, message: error.message });
        }
    },
};
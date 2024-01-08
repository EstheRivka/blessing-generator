
const service = require("./service");

class Controller {
    getBlessings = async (req, res) => {
        const options=req.query.options;
        const blessings = await service.getBlessings(options);
        if (blessings)
            res.status(200).json(blessings);
        else
            res.status(400).send("failed to create blessings");
    }
    
}
const controller = new Controller();
module.exports = controller;
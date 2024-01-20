const service = require('./service.js')
class Controller {
    getBlessings = async (req, res) => {
        const options = req.body;
        try {
            const blessings = await service.getBlessings(options);
            if (blessings == "חסרים פרטים")
                res.status(400).json(blessings);

            else if (blessings)
                res.status(200).json(blessings);
            else
                res.status(401).send("failed to create blessings");
        }
        catch (err) {
            if (err.code === 'insufficient_quota') {
                // Handle rate-limiting error
                console.error('Rate limit exceeded. Please check your usage.');
                res.status(429).json(err.message)
            } else {
                // Handle other errors
                console.error('An error occurred:', err.message);
            }
        }
    }

}
const controller = new Controller();
module.exports = controller;
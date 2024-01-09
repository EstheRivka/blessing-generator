
import service from './service.js'
class Controller {
    getBlessings = async (req, res) => {
        const options=req.query;
        console.log(options.event+"fffffffffffffffffffffff")
        const blessings = await service.getBlessings(options);
        if(blessings=="חסרים פרטים"){
            res.status(400).json(blessings);
        }
        else if (blessings)
            res.status(200).json(blessings);
        else
            res.status(401).send("failed to create blessings");
    }
    
}
const controller = new Controller();
export default controller;
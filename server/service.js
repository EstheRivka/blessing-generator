// import OpenAI from "openai";
// import dotenv from 'dotenv';

// dotenv.config();
require('dotenv').config();
const openAi = require('openai');
const openai = new openAi({apiKey: process.env.api_key});
class Service {


    getBlessings = async (options) => {
        if(!options||!options.nameReciver||!options.nameGiver||!options.amount||!options.gender||!options.event||!options.atmosphere || !options.length)
            return("חסרים פרטים");
        console.log("getBless");
        console.log(new Date())
        let prompt = `write a blessing to  ${options.nameReciver} a ${options.amount} ${options.gender} from ${options.nameGiver} for a ${options.event} in a ${options.atmosphere} atmosphere of a ${options.length} length`;
        if(options.age){
            prompt +=`for age ${options.age}`;
        }
        try {
        //conection to api service
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
            temperature:0.8,
            n: 3,
        });

        console.log(completion.choices[0]);
        return(completion.choices[0])
    }
        catch (error) {
            return error;
           
        }
        
    }


}
const service = new Service();
// export default service
module.exports = service;
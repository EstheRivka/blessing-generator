import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({apiKey: process.env.api_key});
class Service {


    getBlessings = async (options) => {
        if(!options.event||!options.mood || !options.length)
            return("חסרים פרטים");
        console.log("getBless");
        console.log(new Date())
        let prompt = `write a blessing for a ${options.event} in a ${options.mood} mood of a ${options.length} length`;
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
            if (error.code === 'insufficient_quota') {
                // Handle rate-limiting error
                console.error('Rate limit exceeded. Please check your usage.');
            } else {
                // Handle other errors
                console.error('An error occurred:', error.message);
            }
        }
        
    }


}
const service = new Service();
export default service
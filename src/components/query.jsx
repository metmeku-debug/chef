import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('my gemini API was here, so put your');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function query(ingredients) {
    const prompt = "create a recipe from the following ingredients: " + ingredients;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
    
}
export default query;



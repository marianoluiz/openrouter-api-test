import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'; // To load environment variables

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,
    /* stopSequences: ["x"], */
    maxOutputTokens: 100,
    temperature: 1.0,
  },
});

async function run() {

  try {
  const prompt = "Is andrew tate censored here?"

  const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text);
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
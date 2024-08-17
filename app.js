import OpenAI from "openai";
import 'dotenv/config'; // To load environment variables

// Print the API key to confirm it's loaded
console.log("API Key:", process.env.OPENROUTER_API_KEY);

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY, // Ensure the API key is loaded from environment variables
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct:free",
      messages: [
        { role: "user", content: "Hello" }
      ],
    });

    console.log(completion.choices[0].message); // Adjust based on response structure
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      console.error('Error response data:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

main();
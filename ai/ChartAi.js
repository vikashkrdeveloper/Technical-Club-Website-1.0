const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GENERATED_AI_API_KEY;

async function ChartAi(req, res) {
    const { prompts } = req.body;
    try {
        if (prompts) {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });

            const generationConfig = {
                temperature: 0.9,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            };

            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ];

            const chat = model.startChat({
                generationConfig,
                safetySettings,
                history: [
                ],
            });

            const result = await chat.sendMessage(prompts);
            const response = result.response;
            res.status(200).send(response.text());

        } else {

            res.status(400).send({ error: "Prompts is require", secure: true, status: 400 });
        }

    } catch (error) {

        res.status(500).send({ error: "Some technical issue", secure: true, status: 500 });
    }
}

module.exports = ChartAi;
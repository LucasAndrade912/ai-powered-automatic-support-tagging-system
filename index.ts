import os from 'node:os';
import { createAgent } from 'langchain';

const agent = createAgent({
    model: 'ollama:llama3.2:3b',
});

const response = await agent.stream(
    {
        messages: [
            {
                role: 'human',
                content: 'O que são os LLMs? Faça uma explicação simples.',
            },
        ],
    },
    {
        streamMode: 'messages',
    },
);

for await (const [token] of response) {
    process.stdout.write(token.content.toString());
}

process.stdout.write(os.EOL);

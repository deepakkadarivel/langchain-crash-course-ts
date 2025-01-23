import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
  model: "mario",
  temperature: 1,
  maxRetries: 2,
  format: "json",
});

const aiMsg = await llm.invoke([
  ["system", "Translate English to Dutch."],
  ["human", "I love programming."],
]);
console.log(aiMsg);

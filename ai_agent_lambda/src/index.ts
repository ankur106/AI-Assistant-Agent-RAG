
import {
  
  fetchCalendarEventTool,
  insertCalanderEventTool
} from "./Tools/calander.tool";
import {
  OpenAI,
  OpenAIAgent,
  Settings,
} from "llamaindex"
import 'dotenv/config'

import { getCircularReplacer } from "./healper";
import { pdfReaderTool } from "./Tools/pdfreader.tool";



async function main() {

  Settings.llm = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
  })






  const queryEngineTool = await pdfReaderTool();

  const agent = new OpenAIAgent({
    tools: [queryEngineTool, fetchCalendarEventTool, insertCalanderEventTool],
    verbose: true
  });

  let response5 = await agent.chat({ message: "Tell me about Ankur and few availabilities to meet him." })


  console.log("\n\n\n\n");
  console.log(JSON.stringify(response5.response.message.content, getCircularReplacer()));



}

main().catch(console.error);


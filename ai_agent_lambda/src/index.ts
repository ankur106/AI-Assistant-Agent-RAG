
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
// import { pdfReaderTool } from "./Tools/pdfreader.tool";
// import { qdrant_ingestion } from "./vector-store/qdrant.ingestion";
import { qdrant_vector_tool } from "./Tools/qdrant_vector_store.tool";



async function main() {

  Settings.llm = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
  })





  //tool for pdf index
  // const queryEngineTool = await pdfReaderTool();

  //tool for vector index
  const vectorEngineTool = await qdrant_vector_tool();


  const agent = new OpenAIAgent({
    tools: [vectorEngineTool, fetchCalendarEventTool, insertCalanderEventTool],
    verbose: true
  });

  // let response5 = await agent.chat({ message: "Tell me about Ankur and few availabilities to meet him." })
  let response5 = await agent.chat({ message: "Tell me about Ankur" });



  console.log("\n\n\n\n");
  console.log(JSON.stringify(response5.response.message.content, getCircularReplacer()));



}

main().catch(console.error);
// qdrant_ingestion().catch(console.error);


// npm run build
// node lib/index.js --trace-deprecation

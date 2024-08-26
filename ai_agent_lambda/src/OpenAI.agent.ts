
import {

  fetchCalendarEventTool,
  insertCalendarEventTool
} from "./Tools/calendar.tool";
import {
  ChatMessage,
  OpenAI,
  OpenAIAgent,
  Settings,
} from "llamaindex";
import 'dotenv/config';
  
    // import { pdfReaderTool } from "./Tools/pdfreader.tool";
  // import { qdrant_ingestion } from "./vector-store/qdrant.ingestion";
  import { qdrant_vector_tool } from "./Tools/qdrant_vector_store.tool";
  
  export interface IaskChat {
    message : string;
    chatHistory?: ChatMessage[],
    userTimeZone ?: string, //will see later

  }
  
  export const askChat: (input : IaskChat)=> Promise<ReadableStream>  = async ({message, chatHistory, userTimeZone}) => {
  
    Settings.llm = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-3.5-turbo",
      temperature : 0.3
    })
  
  
  
  
  
    //tool for pdf index
    // const queryEngineTool = await pdfReaderTool();
  
    //tool for vector index
    const vectorEngineTool = await qdrant_vector_tool();
  
  
    const agent = new OpenAIAgent({
      tools: [vectorEngineTool, fetchCalendarEventTool, insertCalendarEventTool],
      verbose: true,
      systemPrompt : "You are Maya, AI Assistant of Ankur Patel. Your job is to answer questions about Ankur of other people. Your additional ability is giving summary/detail info of ankur. You can also help setting up meeting with ankur. You like to add humour in Your answer."
    });
  

    let response = agent.chat({ message: message, stream: true, chatHistory: chatHistory });
  

    return response as Promise<ReadableStream<any>>;
  
  
  
  
  }
  
//   main().catch(console.error);
  // qdrant_ingestion().catch(console.error);
  
  
  // npm run build
  // node lib/index.js --trace-deprecation
  
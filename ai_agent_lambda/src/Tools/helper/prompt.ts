import { TextQaPrompt } from "llamaindex";

// Define a custom prompt
export const newTextQaPrompt: TextQaPrompt = ({ context, query }) => {
    return `Context information is below.
  ---------------------
  ${context}
  ---------------------
  Given the context information and not prior knowledge, answer the query.
  Modify answer to make it factually correct. Make it as a conversation between two people. Don't just summarize the context.
  Say No if you don't have particular information or question is weird.
  Query: ${query}
  Answer:`;
  };
# AI Assistant with RAG (Retrieval Augmented Generation) and Agent

## Check out live at [ask.ankurpatel.dev](https://ask.ankurpatel.dev/)

This is a proof of concept project for an LLM application with RAG and AI Agents.

#### 1. The Chat_UI folder contains a chatbot UI built with React and Tailwind. 

![Light Theme](/Pictures/white.png)
![Dark Theme](/Pictures/dark.png)

### 2. The endpoint can be deployed as a lambda function on Amazon with the following components:

1. Agent Augmentation with [LlamaIndex](https://www.llamaindex.ai).

   - **TypeScript** is used for agent and tool calling.
   - Inference is done via **GPT 3.5**.

2. Vector Storage with Qdrant Vector [Database](https://qdrant.tech).
   - A free tier cluster is used via Qdrant.
   - Points/Vectors are stored in a separate collection on a cluster.
   - **OpenAI Embeddings** are used for vector generation.

3. Tools/Scripts Information
   - **/src/Tools/calendar.tool.ts** - Used to fetch availability from Google Calendar. It also includes a tool for meeting creation on Google Calendar (NOTE: Domain-wide Delegation is needed for the service account to add attendees to Google Calendar events.)
   - **src/Tools/pdfreader.tools.ts** - This tool can be used to create embeddings and then indexes for documents stored in the /data folder.
   - **src/Tools/qdrant_vector_store.tool.ts** - This is how the vector store can be made available as a tool.
   - **src/vector-store/qdrant.ingestion.ts** - This is used to create vectors from documents stored in the /data folder and store them in the vector database.


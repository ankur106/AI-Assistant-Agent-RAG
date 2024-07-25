# AI Assistant with RAG (Retrival Augmanted Generation) and Agent

## Checkout live at  [ask.ankurpatel.dev](https://ask.ankurpatel.dev/)

<p>This is proof of concept project for llm application with RAG and AI Agents.</p>

#### 1. Chat_UI folder consist chatbot UI with react and tailwand. 

![Light Theme!](/Pictures/white.png)
![Dark Theme!](/Pictures/dark.png)

### 2. Endpoint can be deployed with lambda function on amazon which can have following things.

1. Agent Augmentation with **[llamaindex](https://www.llamaindex.ai)**.

- **TypeScript** is used for agent and tool calling.
- Inference is done via **GPT 3.0**.

2. Vector Storage with Qdrant Vector **[database](https://qdrant.tech)**.
- Free tier cluster is used via qdrant.
- Points/Vectors are stored in separate collection on a cluster.
- **OpenAI Embeddings** for vector generation.

3. Tools/Scripts Information
- **/src/Tools/calander.tool.ts** - It is used to fetch availability from google calander. It also includes tool for meeting creation on google calander ( NOTE : Domain-wide Delegation is needed for service account to add attendee in google calander event.)
- **src/Tools/pdfreader.tools.ts** - This tool can be used to create embeddding and then indexes for documents stored in /data folder.
- **src/Tools/qdrant_vector_store.tool.ts** - This is how vector store can ve made available as a tool.
- **src/vector-store/qdrant.ingestion.ts** - This is to created vectors from documents stored in /data folder and store it in vector database.
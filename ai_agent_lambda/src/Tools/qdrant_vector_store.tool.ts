import { Document, VectorStoreIndex, QdrantVectorStore, storageContextFromDefaults, QueryEngineTool } from "llamaindex";

import { QdrantClient } from "@qdrant/js-client-rest";

export const qdrant_vector_tool : () => Promise<QueryEngineTool> = async()=>{
    const client = new QdrantClient({
        host: process.env.QDRANT_ENDPOINT,
        apiKey: process.env.QDRANT_API_KEY,
    });

    const vectorStore = new QdrantVectorStore({
        collectionName: "ANKUR_BACKGROUND",
        client : client
    });

    const index = await VectorStoreIndex.fromVectorStore(vectorStore);

    const vectorStoreIndex = index.asQueryEngine();

    return new QueryEngineTool({
        queryEngine : vectorStoreIndex,
        metadata: {
            name: "Vectorstore_Index",
            description: "Tool for questions about Ankur",
        }
    });
}
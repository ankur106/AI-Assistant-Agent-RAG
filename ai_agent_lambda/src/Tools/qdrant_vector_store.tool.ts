import { Document, VectorStoreIndex, QdrantVectorStore, storageContextFromDefaults, QueryEngineTool, VectorIndexRetriever, RetrieverQueryEngine, ResponseSynthesizer, TreeSummarize, SimpleResponseBuilder } from "llamaindex";

import { QdrantClient } from "@qdrant/js-client-rest";
import { newTextQaPrompt } from "./helper/prompt";

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

    const retriever = new VectorIndexRetriever({index : index, similarityTopK : 10})
    const synthesizer = new ResponseSynthesizer({responseBuilder : new SimpleResponseBuilder()})



    const vector_store_query_engine = new RetrieverQueryEngine(retriever, synthesizer);

    // const prompts = vector_store_query_engine.getPrompts();

    vector_store_query_engine.updatePrompts({
        "responseSynthesizer:textQATemplate": newTextQaPrompt,
      });
    const vectorStoreIndex = index.asQueryEngine();

    return new QueryEngineTool({
        queryEngine : vector_store_query_engine,
        metadata: {
            name: "Vectorstore_Index",
            description: "Tool for questions about Ankur",
        }
    });
}
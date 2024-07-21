
import * as path from 'path';

import {
    // Document,
    IngestionPipeline,
    // MetadataMode,
    OpenAIEmbedding,
    TitleExtractor,
    SimpleNodeParser,
    QdrantVectorStore,
    VectorStoreIndex,
    SimpleDirectoryReader,
  } from "llamaindex";

import { QdrantClient } from "@qdrant/js-client-rest";

export const qdrant_ingestion = async() =>{
    const client = new QdrantClient({
        host: process.env.QDRANT_ENDPOINT,
        apiKey: process.env.QDRANT_API_KEY,
    });

    const vectorStore = new QdrantVectorStore({
        collectionName: "ANKUR_BACKGROUND",
        client : client
    });


    const pipeline = new IngestionPipeline({
        transformations:[
            new SimpleNodeParser({chunkSize:1024, chunkOverlap:20}),
            new TitleExtractor(),
            new OpenAIEmbedding(),
        ],
        vectorStore
    });

    const directoryPath = path.resolve(__dirname, '../data/');
    
    const documents = await new SimpleDirectoryReader().loadData({directoryPath : directoryPath});
    const nodes = await pipeline.run({ documents: documents });

    const index = VectorStoreIndex.fromVectorStore(vectorStore);


}

// ingestion().catch(console.error);
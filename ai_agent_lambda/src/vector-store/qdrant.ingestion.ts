
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
    Settings,
    OpenAI,
    MetadataMode,
  } from "llamaindex";

import { QdrantClient } from "@qdrant/js-client-rest";

export const qdrant_ingestion = async() =>{

    Settings.llm = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        model: "gpt-3.5-turbo",
        temperature : 0.3
      })

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

    const directoryPath = path.resolve(__dirname, '../data/folder6/');
    
    const documents = await new SimpleDirectoryReader().loadData({directoryPath : directoryPath});
    console.log("now running pipeline")
    const nodes = await pipeline.run({ documents: documents });

    const index = VectorStoreIndex.fromVectorStore(vectorStore);


    // print out the result of the pipeline run
  for (const node of nodes) {
    console.log(node.getContent(MetadataMode.NONE));
  }



}

qdrant_ingestion().catch(console.error);
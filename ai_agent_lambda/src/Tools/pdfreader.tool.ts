import { QueryEngineTool, SimpleDirectoryReader, VectorStoreIndex } from "llamaindex";


import * as path from 'path';

export const pdfReaderTool = async () =>{

    const directoryPath = path.resolve(__dirname, '../data/');
    const documents = await new SimpleDirectoryReader().loadData({directoryPath : directoryPath});
    const index = await VectorStoreIndex.fromDocuments(documents);
    const queryEngineOnPDFIndex = index.asQueryEngine();

    return new QueryEngineTool({
        queryEngine: queryEngineOnPDFIndex,
        metadata: {
            name: "Document_Index",
            description: "Tool for questions about Ankur",
        },
    });
}
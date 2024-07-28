import { LambdaFunctionURLEvent } from "aws-lambda";
import { askChat } from "./OpenAI.agent";
import { streamifyResponse, ResponseStream } from 'lambda-stream'
// import { qdrant_ingestion } from "./vector-store/qdrant.ingestion";


export const handler = streamifyResponse(myhandler)
async  function myhandler(event: LambdaFunctionURLEvent, responseStream: ResponseStream): Promise<void> {

    try {

        let body = JSON.parse(event.body!);
        let message = body['message'];
        let chatHistory = body['chatHistory'];
        console.log(JSON.stringify(event));
        const response = await askChat({message, chatHistory});

        let reader   = response.getReader();

        responseStream.setContentType("text/html");

  
        readStream(reader, responseStream);
    }
    catch (err) {
        console.log(err);
    }

}

function readStream(reader, responseStream) {
    return reader.read().then(({ done, value }) => {
      if (done) {
        // console.log('Stream complete');
        responseStream.end();
        return;
      }
      console.log( value.response.delta);
        responseStream.write(value.response.delta);
  
      // Read the next chunk
      return readStream(reader, responseStream);
    }).catch(error => {
      console.error('Stream reading error:', error);
    });}

    // qdrant_ingestion().catch(console.error);
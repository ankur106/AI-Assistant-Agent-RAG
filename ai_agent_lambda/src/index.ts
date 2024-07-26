import { APIGatewayProxyEvent, APIGatewayProxyResult, LambdaFunctionURLEvent } from "aws-lambda";
import { askChat } from "./OpenAI.agent";
import { streamifyResponse, ResponseStream } from 'lambda-stream'

const headers = {
    'Content-Type': 'text/html',
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "X-Requested-With": "*"
};


export const handler = streamifyResponse(myhandler)
async  function myhandler(event: LambdaFunctionURLEvent, responseStream: ResponseStream): Promise<void> {

    try {

        let body = JSON.parse(event.body!);
        let message = body['message'];
        let chatHistory = body['chatHistory'];
        console.log(JSON.stringify(event));
        const response = await askChat({message, chatHistory});

        let reader   = response.getReader();

        const metadata = {
          statusCode : 200,
          headers : headers
        }

        //@ts-ignore
        // responseStream = awslambda.HttpResponseStream.from(responseStream, metadata);

        responseStream.setContentType("text/html");

      
        // setTimeout(()=>{
        //   responseStream.write("Hello\n");
        //   setTimeout(()=>{
        //     responseStream.write("Hello\n");
        //     setTimeout(()=>{
        //       responseStream.write("Hello\n");
        //       setTimeout(()=>{
        //         responseStream.write("Hello\n");
        //         setTimeout(()=>{
        //           responseStream.write("Hello\n");
        //           setTimeout(()=>{
        //             responseStream.write("Hello\n");
        //             setTimeout(()=>{
        //               responseStream.end();
                      
        //             },1000)
        //           },1000)
        //         },1000)
        //       },1000)
        //     },1000)
        //   },1000)
        // },1000)

  
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
    //   console.log( value.response.delta);
        responseStream.write(value.response.delta);
  
      // Read the next chunk
      return readStream(reader, responseStream);
    }).catch(error => {
      console.error('Stream reading error:', error);
    });}
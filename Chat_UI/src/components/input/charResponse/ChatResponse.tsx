import './CharResponse.scss';
import { SiCircle } from "react-icons/si";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IsingleChat } from '../../../healper/props.interface';
import ReactMarkdown from 'react-markdown';
import { TbPointFilled } from "react-icons/tb";



export const ChatResponse: React.FC<IsingleChat> = (payload : IsingleChat) => {

    return (
        <div className='w-full  py-1 px-3 md:px-4 mb-3 md:px-5 lg:px-1 xl:px-5 text-lightTheme-text dark:text-darkTheme-text-light text-base h-fit'>
            <div className='flex flex-1 gap-3 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]'>
                <div className='flex-shrink-0 flex flex-col relative'>
                    <SiCircle size='1.5rem' />
                </div>

                <div className='relative flex-w-full min-w-0 flex-col'>
                    <div className='flex-col gap-1 md:gap-3'>
                        <div className='flex flex-grow flex-col max-w-full'>
                            
                            <ReactMarkdown>{payload.message}</ReactMarkdown>
                            {payload.message?.length==0 && <TbPointFilled size="2.5rem" className='animate-bounce '/>}
                            {payload.isloading &&  <TbPointFilled size="2rem" className='animate-bounce '/>}
                            {/* Improve */}
                        </div>
                        <div className='mt-1 flex'>
                            <div className='rounded-lg  cursor-default p-1'>
                                <HiOutlineSpeakerWave />
                            </div>
                            <div className='rounded-lg  hover:bg-[#f9f9f9] dark:hover:bg-[#2f2f2f] cursor-pointer p-1' onClick={()=>{
                                navigator.clipboard.writeText(payload.message || "");
                            }}>
                                <PiCopySimpleBold />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}


// function readStream(reader) {
//     return reader.read().then(({ done, value }) => {
//       if (done) {
//         console.log('Stream complete');
//         return;
//       }
//       console.log( decoder.decode(value, { stream: true }));
//       // Process the chunk (value) here
  
//       // Read the next chunk
//       return readStream();
//     }).catch((error: any) => {
//       console.error('Stream reading error:', error);
//     });
//   }
  
//   // Start reading the stream
//   readStream();
// })
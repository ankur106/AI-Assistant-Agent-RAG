import './CharResponse.scss';
import { SiCircle } from "react-icons/si";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
export const ChatResponse: React.FC = () => {

    return (
        <div className='w-full  py-1 px-3 md:px-4 mb-3 md:px-5 lg:px-1 xl:px-5 text-lightTheme-text-light dark:text-darkTheme-text-light text-base h-fit'>
            <div className='flex flex-1 gap-3 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]'>
                <div className='flex-shrink-0 flex flex-col relative'>
                    <SiCircle size='1.5rem' />
                </div>

                <div className='relative flex-w-full min-w-0 flex-col'>
                    <div className='flex-col gap-1 md:gap-3'>
                        <div className='flex flex-grow flex-col max-w-full'>
                        Certainly! Here's an essay on life:

Life: A Journey of Discovery

Life, as we perceive it, is a profound journey filled with moments of joy, challenges, and profound introspection. It encompasses the entirety of human existence, from birth to death, and all the experiences in between that shape our identities and perspectives.

At its core, life is a series of interconnected experiences that define our growth and development. From the innocence of childhood, where every discovery is a marvel, to the tumultuous teenage years marked by self-discovery and rebellion, and into adulthood where responsibilities and ambitions shape our paths, life presents us with a myriad of opportunities to learn, evolve, and mature.

One of the most fascinating aspects of life is its unpredictability. No matter how meticulously we plan our futures, life has a way of surprising us—sometimes with unexpected joys and successes, and at other times with hardships and setbacks that test our resilience. These challenges, though daunting, often serve as catalysts for personal growth, pushing us to reassess our priorities, beliefs, and aspirations.

Moreover, life is not just about individual journeys; it is also about the connections we forge with others. Relationships—be they familial, platonic, or romantic—add depth and richness to our experiences, offering support during difficult times and celebrating our triumphs. Through these relationships, we learn the value of empathy, compromise, and unconditional love, essential virtues that foster a sense of belonging and community.

Yet, amidst the hustle and bustle of daily life, it is easy to lose sight of its inherent beauty. Taking a moment to appreciate the simple pleasures—a breathtaking sunset, the laughter of loved ones, or the warmth of a shared meal—reminds us of life's preciousness and encourages us to cherish each moment.

Philosophers and thinkers throughout history have pondered the meaning of life. While answers may vary depending on one's beliefs and perspectives, many agree that life's essence lies in the pursuit of fulfillment and purpose. Whether through creative expression, intellectual exploration, spiritual enlightenment, or acts of kindness towards others, finding meaning in our existence gives our lives direction and significance.

In conclusion, life is a profound journey of self-discovery and connection, shaped by experiences that challenge, inspire, and transform us. It is a testament to human resilience, the power of relationships, and the pursuit of meaning. Embracing life in all its complexities allows us to appreciate its beauty and navigate its challenges with grace and courage. As we continue to embark on this journey, let us strive to live authentically, love passionately, and leave a positive imprint on the world around us.
                        </div>
                        <div className='mt-1 flex'>
                            <div className='rounded-lg  hover:bg-[#f9f9f9] dark:hover:bg-[#2f2f2f] cursor-pointer p-1'>
                                <HiOutlineSpeakerWave />
                            </div>
                            <div className='rounded-lg  hover:bg-[#f9f9f9] dark:hover:bg-[#2f2f2f] cursor-pointer p-1'>
                                <PiCopySimpleBold />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
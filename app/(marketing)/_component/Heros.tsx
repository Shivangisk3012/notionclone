import Image from 'next/image';

export const  Heros = () => {
    return (
        <div className=' flex  justify-center border border-black  gap-7 '>
            
            <div className=' pt-10 relative w-[300px] h-[400px]'>   
                <Image src='/documents.png' alt='hero' width={100} height={100} layout='responsive' className='object-contain'/>         
            </div>
            <div className='pt-10 relative w-[400px] h-[400px] hidden md:block'>
                <Image src='/reading.png' alt='hero' width={100} height={100} layout='responsive' className='object-contain'/>
            </div>

        </div>
    );
}
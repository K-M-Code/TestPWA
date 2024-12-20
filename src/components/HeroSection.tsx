import Image from 'next/image'
import HeroImage from '@/public/logo.jpg'

const HeroSection = () => {
    return (
        <section className='relative inset-0 z-0 mx-auto mt-2 w-full overflow-x-clip bg-yellow-400 p-4'>
            <div className='mx-auto flex h-fit max-w-[1200px] flex-col-reverse items-center justify-between gap-4 md:flex-row '>
                <div className='flex max-w-[300px] flex-col justify-center gap-10 bg-red-600 p-10 text-left lg:ml-10'>
                    <h1 className='text-4xl text-white'>Billawar Community App</h1>
                    <p className='text-xl  text-white'>
                        The place that helps you come together with the community and learn new
                        things.
                    </p>
                </div>
                <div>
                    <Image
                        src={HeroImage}
                        alt='Hero Image'
                        width={512}
                        height={512}
                        className='max-w-[250px] rounded-full lg:max-w-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection

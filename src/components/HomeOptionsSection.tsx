import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import image1 from '@/public/images/468455883_592765846553926_8992478740275370630_n.jpg';
import image2 from '@/public/images/ashoka-thumb.jpg';
import image3 from '@/public/images/Yakshagana-2.jpg';
import image4 from '@/public/images/kodachadri-hills-mangalore-karnataka-1-attr-hero.jpeg';
import image5 from '@/public/images/kudroli-gokarnath-temple-mangalore-karnataka-tri-hero.jpeg';
import image6 from '@/public/images/raviraj-moolya-yakshagana.jpg';
import image7 from '@/public/images/kanika-pant-PiuvhBTvrp0-unsplash.jpg';
import image8 from '@/public/images/sonika-agarwal-vMC-8nfeIfQ-unsplash.jpg';
import image9 from '@/public/images/micheile-henderson-lZ_4nPFKcV8-unsplash.jpg';
import image10 from '@/public/images/mediamodifier-I3HPUolh5hA-unsplash.jpg';
import image11 from '@/public/images/vizag-explore-MsQqVwnF8Pw-unsplash.jpg';
import image12 from '@/public/images/Billawa-Jagruti-Eakikarana-Sabhe-1.jpg';

interface Item {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
}

const items: Item[] = [
  {
    id: 1,
    src: image4,
    alt: 'Photo by Minh Pham',
    title: 'Donations',
  },
  {
    id: 2,
    src: image12,
    alt: 'Photo by Magicle',
    title: 'Membership',
  },
  {
    id: 3,
    src: image1,
    alt: 'Photo by Martin Sanchez',
    title: 'Job Board',
  },
  {
    id: 4,
    src: image2,
    alt: 'Photo by Lorenzo Herrera',
    title: 'Business Directory',
  },
  {
    id: 5,
    src: image5,
    alt: 'Photo by Martin Sanchez',
    title: 'Events',
  },
  {
    id: 6,
    src: image3,
    alt: 'Photo by Lorenzo Herrera',
    title: 'Community Forum',
  },
  {
    id: 7,
    src: image7,
    alt: 'Photo',
    title: 'Matrimonial',
  },
  {
    id: 8,
    src: image8,
    alt: 'Photo',
    title: 'Live Pooja',
  },
  {
    id: 9,
    src: image9,
    alt: 'Photo',
    title: 'Financial Assistance',
  },
  {
    id: 10,
    src: image10,
    alt: 'Photo',
    title: 'Government Schemes',
  },
  {
    id: 11,
    src: image6,
    alt: 'Photo by Magicle',
    title: 'Merchandise',
  },
  {
    id: 12,
    src: image11,
    alt: 'Photo by Magicle',
    title: 'Agriculture',
  },
];

// Component
const HomeOptionsSection = () => {
  return (
        <section className='relative flex h-fit w-full items-center justify-center'>
      <div className='w-full bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
                    <div className='mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12'>
                        <div className='flex items-center gap-12'>
                            <h2 className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl'>
                                Community Sections
                            </h2>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8'>
            {items.map((item) => (
                        <a
                key={item.id}
                            href=''
                            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'
                        >
                <Image
                  src={item.src.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='absolute inset-0 size-full object-cover object-center'
                />
                                {/* className='absolute inset-0 size-full object-cover object-center transition duration-200 group-hover:scale-110' */}

                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                            <span className='relative mb-3 ml-4 inline-block bg-yellow-400 p-4 text-4xl text-black shadow-xl shadow-black/25 drop-shadow-2xl md:ml-5 lg:text-6xl'>
                  {item.title}
                            </span>
                        </a>
            ))}
                    </div>
                </div>
            </div>
        </section>
  );
};
export default HomeOptionsSection;

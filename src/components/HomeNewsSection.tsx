interface NewsItem {
  title: string;
  description: string;
}

const newsData: NewsItem[] = [
  {
    title: 'Merit Awards Function 2021',
    description: 'On 19th December 2022, the program on Adoption of Students and Merit Award Function 2021 started off to a grand beginning with the lighting of the lamp by President Shri. Harish G Amin, Chief.',
  },
  {
    title: '170th Brahmashree Narayana Guru Jayanthi',
    description: 'The Billawar Association, Mumbai, serving the Billawa community for over 93 years, proudly celebrated the 170th birth anniversary of Saint and social reformer Narayana Guru across its local offices in the metropolis. Celebrating Guru’s.',
  },
  {
    title: 'Adopted Students’ Review Programme',
    description: 'Adopted Students Review Programme held at Billawa Bhavan on 8th February, 2020 was presided over by Shri Chandrashekar S Poojary (President of Billawar Association, Mumbai). Other dignitaries present on dais  were Mrs.Jayathi Uchil (Chairperson.',
  },
  {
    title: 'Shree Gurunarayana Sahitya Prashasti 2020-21',
    description: 'The function of Annual Shree Gurunarayna Sahitya Prashasti 2020 & 2021 was held on 18th March, 2022 at Billawa Bhavan, Santacruz East. The Award is sponsored by Late Shri M.B. Kuckian (Hon. Chief Editor.',
  },
];
const HomeNewsSection = () => {
  return (
        <section className='mx-auto flex h-fit max-w-[1200px] flex-col items-center justify-center'>
            <div>
                <h1 className='text-4xl font-bold text-black'>News</h1>
            </div>
            <div className='mx-auto p-4 lg:p-8'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
          {newsData.map((news) => (
            <div key={news.title} className='flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-lg'>
              <h2 className='text-2xl font-bold text-black'>{news.title}</h2>
              <p className=' text-gray-600'>{news.description}</p>
                    </div>
          ))}
                    </div>
                    </div>
        </section>
  );
};
export default HomeNewsSection;

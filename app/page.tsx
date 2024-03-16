import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex-grow'>
      {/* GRADIANT TEXT */}
      <h1 className='py-6 text-8xl bg-gradient-to-r from-green to-gray inline-block text-transparent bg-clip-text'>
        Crafting Interactive Experiences with Precision and Passion...
      </h1>
      {/* HERO SECTION */}
      <div className='flex items-center justify-between gap-12'>
        {/* IMAGE*/}
        <div className='w-[260px] h-[260px] rounded-full bg-gradient-custom flex justify-center items-center shrink-0'>
          <Image
            className='rounded-full'
            height={250}
            width={250}
            alt='Dawid Bugajski'
            src='/profile-picture.jpg'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl text-green font-bold'>About me</h2>
          <p>
            <span className='decoration-green underline underline-offset-2'>
              In June 2019
            </span>
            , I embarked on my career as a{' '}
            <span className='decoration-green underline underline-offset-2'>
              Web Developer
            </span>
            , a role I held for{' '}
            <span className='decoration-green underline underline-offset-2'>
              two years
            </span>
            . Subsequently, I was promoted within the same company to the
            position of{' '}
            <span className='decoration-green underline underline-offset-2'>
              New Product Development Manager
            </span>
            , where I contributed for another{' '}
            <span className='decoration-green underline underline-offset-2'>
              year and a half
            </span>
            . Currently, for almost a year, I have been working as a{' '}
            <span className='decoration-green underline underline-offset-2'>
              Frontend Developer at Emotivo
            </span>
            .
          </p>
          <p>
            I have a deep enthusiasm for{' '}
            <span>designing clean, user-focused interfaces</span>. I am
            energized by <span>collaboration</span>, relish the pursuit of
            <span>new challenges</span>, and am dedicated to perpetual learning
            in the realm of technology.
          </p>
          <p>
            Outside of coding, my passion for sports is profound. Having played
            soccer for ten years, I've transitioned into a fervent gym-goer.
            Delving into the esports world for two years not only allowed me to
            see much of the globe but also instilled in me a commitment to
            constant self-betterment. This dedication to improvement, born out
            of my esports experience, seamlessly enhances my abilities as a
            developer.
          </p>
        </div>
        <div>
          <p>lets contact</p>
          <div className='flex flex-col sm:flex-row flex-wrap'>
            <p>Github</p>
            <p>Linkedin</p>
            <p>Resume</p>
            <p className='w-full'>dawidbugajski1996@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

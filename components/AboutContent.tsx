import TextHighlight from './TextHighlight';

function AboutContent() {
  return (
    <>
      <p className='tracking-wide'>
        <TextHighlight>In June 2019</TextHighlight>, I embarked on my career as
        a <TextHighlight>Web Developer</TextHighlight>, a role I held for{' '}
        <TextHighlight>two years</TextHighlight>. Subsequently, I was promoted
        within the same company to the position of{' '}
        <TextHighlight>New Product Development Manager</TextHighlight>, where I
        contributed for another <TextHighlight>year and a half</TextHighlight>.
        Currently, for almost a year, I have been working as a{' '}
        <TextHighlight>Frontend Developer</TextHighlight> at Emotivo.
      </p>
      <p className='tracking-wide'>
        I have a deep enthusiasm for designing clean, user-focused interfaces. I
        am energized by <TextHighlight>collaboration</TextHighlight>, relish the
        pursuit of <TextHighlight>new challenges</TextHighlight>, and am
        dedicated to <TextHighlight>perpetual learning</TextHighlight> in the
        realm of technology.
      </p>
      <p className='tracking-wide'>
        Outside of coding, my passion for sports is profound. Having played
        soccer for ten years, I&apos;ve transitioned into a fervent gym-goer.
        Delving into the esports world for two years not only allowed me to see
        much of the globe but also instilled in me a commitment to{' '}
        <TextHighlight>constant self-betterment</TextHighlight>. This dedication
        to improvement, born out of my esports experience, seamlessly enhances
        my abilities as a developer.
      </p>
    </>
  );
}

export default AboutContent;

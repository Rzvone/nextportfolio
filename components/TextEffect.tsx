import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Developer',
        1500,
        'With a Passion for DevOps',
        1500,
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase z-[1000]'
      repeat={Infinity}
    />
  );
};

export default TextEffect;
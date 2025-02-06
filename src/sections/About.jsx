import { useState, useEffect } from 'react';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { FaMoon, FaSun } from 'react-icons/fa';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('awaisc004@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  };

  const localTimeOffset = '+5:30 GMT'; // Replace with your actual offset

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full grid-rows-[auto,auto,auto,auto,auto]">

        {/* Large Introduction Card */}
        <div className="xl:col-span-2 md:col-span-1 col-span-1 xl:row-span-2 md:row-span-2 row-span-1">
          <div className="grid-container">
            <img src="assets/boy.png" alt="Awais Chaudhary" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Awais Chaudhary</p>
              <p className="grid-subtext">
                I’m a web developer fluent in the MERN stack, JavaScript, TypeScript, and TailwindCSS. I thrive on crafting creative and impactful web solutions that not only look good but work like a charm. I’m all about teamwork and innovation—because tackling meaningful challenges is just more fun when you’ve got a great squad by your side. Whether it’s debugging a tricky line of code or building something entirely new, I’m always up for the adventure.<br /><br />
                But enough about me! Scroll down and look at my projects—they’re the real stars of the show!
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="xl:col-span-1 md:col-span-1 col-span-1 xl:row-span-1 md:row-span-1 row-span-1">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="Tech Stack" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have experience with a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Time Display */}
        <div className="xl:col-span-1 md:col-span-1 col-span-1 xl:row-span-3 md:row-span-1 row-span-1 sm:row-span-1"> {/* Adjusted row span for small screens */}
          <div className="grid-container flex flex-col justify-end h-full"> {/* Added justify-end and h-full */}
            <div className="relative flex items-center justify-center text-center"> {/* Added relative here only for z-index context */}
              <div
                className="w-auto sm:h-[380px] h-fit object-cover"
                style={{
                  maskImage: 'linear-gradient(to bottom, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                  maskMode: 'alpha',
                  WebkitMaskMode: 'alpha',
                }}
              >
                <img
                  src="assets/iphone.png"
                  alt="iPhone Lockscreen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-[#C0C0C0] text-center"
                style={{ paddingTop: '50px', zIndex: 10 }} // Adjust padding as needed and ensure zIndex is higher
              >
                <p className="text-sm sm:text-xs" style={{ fontFamily: 'SF Pro' }}>{formatDate(currentTime)}</p>
                <p className="text-5xl font-bold" style={{ fontFamily: 'SF Pro Rounded' }}>{formatTime(currentTime)}</p> {/* Adjusted font size for medium screens */}
                <p className="text-sm sm:text-xs" style={{ fontFamily: 'SF Pro' }}>{localTimeOffset}</p>
                <img
                  src="assets/Widgets.png" // Replace with the correct path to your widgets PNG
                  alt="iOS Widgets"
                  className="w-[170px] h-auto mt-5" // Adjust size and spacing as needed
                />
              </div>
            </div>
          </div>
        </div>

        {/* Passion for Creation Card */}
        <div className="xl:col-span-1 md:col-span-1 col-span-1 xl:row-span-1 md:row-span-1 row-span-1">
          <div className="grid-container p-6 flex flex-col items-start text-start">
            <h3 className="grid-headtext text-lg font-semibold mb-2"> Driven by Innovation</h3>
            <p className="grid-subtext text-sm text-gray-700 dark:text-gray-300 mb-4">
              I'm passionate about building, no matter if it's from scratch or based on an inspiration. I love to build, to craft, and to see ideas take shape. Once I start, I'm all in until it's done.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="xl:col-span-1 md:col-span-1 col-span-1 xl:row-span-2 md:row-span-1 row-span-1">
          <div className="grid-container">
            <div className="space-y-6 mt-4">
              <p className="grid-headtext text-xl">Have a project in mind?</p>
              <p className="grid-subtext">Find me on</p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/awais-chaudhary-1484a0243/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-auto">
                  <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                  <span className="text-lg">LinkedIn</span>
                </a>

                {/* My Gmail */}
                <div className="inline-flex items-center space-x-2 w-auto cursor-pointer" onClick={handleCopy}>
                  <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="w-8 h-8" />
                  <span className="text-lg">My Gmail</span>
                </div>

                {/* GitHub */}
                <a href="https://github.com/AwaisCoder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-auto">
                  <img src="/assets/github.png" alt="GitHub" className="w-8 h-8" />
                  <span className="text-lg">GitHub</span>
                </a>

                {/* Dev.to */}
                <a href="https://dev.to/awaisz99" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-auto">
                  <img src="/assets/devto.png" alt="Dev.to" className="w-8 h-8" />
                  <span className="text-lg">Dev.to</span>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/_awais.04" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-auto">
                  <img src="/assets/insta.png" alt="Instagram" className="w-8 h-8" />
                  <span className="text-lg">Instagram</span>
                </a>

                {/* Twitter */}
                <a href="https://x.com/awaisc004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 w-auto">
                  <img src="/assets/x.png" alt="Twitter" className="w-8 h-8" />
                  <span className="text-lg">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Switch Card - Moved to Box 2 */}
        <div className="xl:col-span-1 md:col-span-1 col-span-1 xl:row-span-1 md:row-span-1 row-span-1">
          <div className="grid-container flex items-center justify-center h-full">
            <div className="flex items-center space-x-2">
              <ThemeSwitch isDarkMode={!isDarkMode} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>

      </div>
    </section >

  );
};

export default About;
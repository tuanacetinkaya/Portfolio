import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  const Break = () => <br className="sm:hidden block" />;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute flex inset-0 top-[120px] 
        max-w-7xl mx-auto flex-row items-start gap-5`}
      >
        {/* /dot and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Tuana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer, <Break />
            Frontend Developer, <Break />
            Always a Student
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className=" w-full green-pink-gradient p-1 rounded-2xl shadow-card"
    >
      <div className=" bg-tertiary py-5 px-12 rounded-2xl min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="" className="w-16 h-16 object-contain" />
        <h3 className=" text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <SectionWrapper idName={"sobre-mi"}>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introducción</p> */}
        <h2 className={styles.sectionHeadText}>Resumen</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy ingeniero en sistemas y computación graduado de la Universidad
        Tecnológica de El Salvador. Tengo experiencia en desarrollo web
        utilizando tecnologías modernas y cuento con expectativas altas de
        crecimiento y aprendizaje
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;

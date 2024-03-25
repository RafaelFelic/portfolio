import useTextAnimation from "../utils/textAnimation";

export default function Showcase() {
  const sectionRef = useTextAnimation();

  return (
    <div
      ref={sectionRef}
      className="h-screen flex flex-col justify-evenly xl:p-12 items-center md:flex-row"
    >
      <section className="block md:inline-block md:m-auto mr-5 md:ml-12 w-full md:w-[60%] text-2xl md:text-3xl lg:text-4xl text-right md:text-left font-semibold">
        <div>
          <p className="hide fromleft mb-3 md:mb-8">Welcome!</p>
          <p className="hide fromleft mb-2 md:mb-3">
            I am{" "}
            <span className="text-[#4169E1] text-3xl md:text-4xl lg:text-5xl">
              Rafael Feliciano
            </span>
            ,
          </p>
          <div className="typing-effect-wrapper">
            <p className="text-xl md:text-2xl lg:text-3xl md:w-[85%] w-full text">
              Front-End Developer
            </p>
          </div>
        </div>
      </section>

      <section className="w-[85%] md:w-[40%] md:mr-12 text-base lg:text-lg bg-[#95AADD] rounded-3xl text-black p-2.5 shadow-[20px_20px_0px_2px_#000] hide fromright landscape">
        <div className="p-2.5 skills">
          <p className="text-2xl md:text-3xl mb-0 ">skills &#123;</p>
          <p className="mb-5">
            <span className="font-semibold">profession:</span> Front-End
            Developer,
          </p>
          <p>
            <span className="font-semibold">technologies:</span> HTML,
            CSS(including Bootstrap, Sass, Tailwind CSS), JavaScript, React,
            TypeScript, Next.js, Adobe Products &#125;;
          </p>
        </div>
        <div className="mt-2.5 p-2.5 work">
          <p className="text-2xl md:text-3xl mb-0">work &#123;</p>
          <p className="mb-5">
            <span className="font-semibold">currentJob:</span> Freelancer,
          </p>
          <p>
            <span className="font-semibold">aboutMe:</span> I'm a self-taught
            Front-End Developer, passionate about turning challenges into
            user-friendly digital solutions through code. &#125;;
          </p>
        </div>
      </section>
    </div>
  );
}

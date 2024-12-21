import { useEffect } from "react";
import Header from "./assets/components/Header";
import ImageContainer from "./assets/components/ImageContainer";
import About from "./assets/components/About";
import Vision from "./assets/components/Vision";
import Contact from "./assets/components/Contact";
import TypingEffect from "react-typing-effect"; // Import TypingEffect
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false // Animation happens every time you scroll
    });
  }, []);

  return (
    <>
      <Header />
      <main
        className="container mx-auto px-4 py-12 text-center"
        style={{
          background: "linear-gradient(to bottom,  #090025FF, #030012FF)" // Linear gradient
        }}
      >
        <h1
          className="text-4xl font-bold text-[#5D00FFFF] mb-4"
          data-aos="fade-up"
        >
          <TypingEffect
            text={["Welcome to Explore the Nature!"]}
            speed={100} // Typing speed
            eraseSpeed={70} // Erase speed
            cursor="|" // Blinking cursor
          />
        </h1>
        <p
          className="text-[#FFFFFFFF] mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <TypingEffect
            text={["Explore our services and discover what we have to offer."]}
            speed={100}
            eraseSpeed={70}
            cursor="|"
          />
        </p>
      </main>

      <section
        id="image-container"
        data-aos="fade-left"
        style={{ backgroundColor: "#050021FF" }}
      >
        <ImageContainer />
      </section>

      <section
        id="about"
        data-aos="fade-up"
        style={{ backgroundColor: "#1e1b4b" }}
      >
        <About />
      </section>

      <section
        id="vision"
        data-aos="fade-up"
        style={{ backgroundColor: "#1e1b4b" }}
      >
        <Vision />
      </section>

      <section
        id="Contact"
        data-aos="fade-up"
        style={{ backgroundColor: "#1e1b4b" }}
      >
        <Contact />
      </section>
    </>
  );
}

export default App;

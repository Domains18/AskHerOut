import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { image1, image0, image2, image3, image4, image5, audio } from "./assets";
import "./index.css"; 

const images = [image0, image1, image2, image3, image4, image5];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    playAudio();

  }, []);
  function playAudio() {
    const audioEl = new Audio(audio);
    audioEl.loop = true; 
    audioEl.play();
    audioEl.volume = 0.1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="homepage">
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Khaleesi"
            className={index === currentImageIndex ? "show" : ""}
          />
        ))}
      </div>
      <div className="hello">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, Khaleesi")
              .pauseFor(1000)
              .deleteAll()
              .typeString("This is my valentines message for you")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "This coming special day, I want to ask you a very special question, not just for valentines, but for more valentines to come, and for everyday after every valentines"
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hope your smiling.......😁 ")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "I think about you, I dream about you, and everyday I wanna wrap my arms around your waist"
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString("I love you, Khaleesi, I want you....... so in these delights my love ..... ")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Will you be my valentine?")
              .start();
          }}
        />
      </div>
    </section>
  );
};

export default App;

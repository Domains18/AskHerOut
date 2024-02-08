import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import image1 from "./assets/image.jpeg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import audio from "./assets/audio.mp3";

import "./index.css"; 

const images = [ image1, image2, image3, image4];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    playAudio();

  }, []);
  function playAudio() {
    const audioEl = new Audio(audio);
    audioEl.loop = true; 
    audioEl.play();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
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
              .typeString("Hello, Khaleesi 😊")
              .pauseFor(1000)
              .deleteAll()
              .typeString("This is my valentines message to you")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "Valentines is coming, dear one. Theo of Greek said something about Roses being red, well I scourged the red of the redest rose and it still pales in comparison to your beauty"
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hope you are smiling.......😁 ")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                "I think about you, I dream about you, and everyday I wanna wrap my arms around your waist "
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString(" Khaleesi, I want you....... so in these delights my love ..... ❤️")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Will you be my <span style='color: red;'>Valentine</span>")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Please say <span style='color: #27ae60;'>Yes🥺🥺</span>")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Do not keep a loving heart waiting, you have my <span style='color: #27ae60;'>Number</span> already ❤️")
              .start();
          }}
        />
      </div>
    </section>
  );
};

export default App;

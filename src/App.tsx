import Image from "./assets/image.jpg";
import {ReactTyped} from 'react-typed'
// import { useState } from "react";


const App = () => {
  // const [typed, setTyped] = useState<Typed | undefined>();
  return (
    <section className="homepage">
      <img src={Image} alt="image" className="" />
      <div className="hello">
        <ReactTyped
          startWhenVisible
          strings={[
            "Hello, I'm <span class='name'>Amit Kumar</span>",
            "I'm a <span class='name'>Web Developer</span>",
            "I'm a <span class='name'>React Developer</span>",
            "I'm a <span class='name'>Node Developer</span>",
            "I'm a <span class='name'>MERN Stack Developer</span>",
          ]}
          
          typeSpeed={100}
          backSpeed={50}
        />
      </div>
    </section>
  );
};

export default App;

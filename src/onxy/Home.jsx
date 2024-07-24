import React from "react";
import Typed from "typed.js";
import ScrollReveal from 'scrollreveal';

const Home=()=>{

  ScrollReveal({
    reset:true,
    distance:"80px",
    duration:2000,
    delay:200
})

ScrollReveal().reveal(".home_info,.about_img,.service_header,.skill_header,.portfoilo_header,.contact_header",{
    origin:"top"
})

ScrollReveal().reveal(".home_img,.about_info,.service_body,.skill_body,.porfoilo_body,.contact_body",{
    origin:"bottom"
})

  const dev = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(dev.current, {
      strings: ['Frontend Developer', ' Backend Developer'],
      typeSpeed: 100,
          backSpeed:100,
          backDelay:1000,
          loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);





    return(
        <>
        
  <section className="home" id="home">
  <div className="inner_home">
    <div className="home_info">
      <div className="myname">
        <h1>
          Hello, My name is <span>Adams Roland</span>
        </h1>
      </div>
      <div className="dev_title">
        <h2>
          I am a <span id="dev" ref={dev} />
        </h2>
      </div>
      <div className="mini_desc">
        <p>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          alias dolorem adipisci. Dolorum eos numquam consectetur maxime sunt
          provident officia libero ab veniam enim? Modi error nulla rem?
          Necessitatibus, officia! */}
        </p>
      </div>
      <div className="contact_links">
        <a href="#">Hire Me</a>
        <a href="#">Lets Talk</a>
      </div>
    </div>
    <div className="home_img">
      <div  className="bg_img" >
        <img src="/images/me.png" />
      </div>
    </div>
  </div>
</section>

        
        </>
    )
}

export default Home
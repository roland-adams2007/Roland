

const About=()=>{
    return(
<>
<section className="about" id="about">
  <div className="inner_about">

  <div className="about_header m">
        <h3>
          About <span>Me</span>
        </h3>
      </div>

    <div className="about_img">
      <img src="/Roland/images/me.png" />
    </div>
    <div className="about_info">
      <div className="about_header g">
        <h3>
          About <span>Me</span>
        </h3>
      </div>
      <div className="about_desc">
        <p>
I&apos;m Adams Roland, a full-stack developer passionate about creating seamless web experiences. I wield HTML, CSS, and JavaScript for front-end magic, while my PHP and Laravel skills work their back-end wizardry. E-commerce websites? Yep, I&apos;ve crafted successful ones. And when it comes to dynamic charts (thanks, ApexCharts!), I&apos;m your go-to person. Let&apos;s connect and build something amazing together! 
        </p>
      </div>
      <div className="about_more">
        <a href="#">Read More</a>
        <a href="#">
          <i className="bx bx-download bx-sm" /> <span>Resume</span>
        </a>
      </div>
    </div>
  </div>
</section>

</>
    )
}

export default About
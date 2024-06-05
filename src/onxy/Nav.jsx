import React from "react";
const Nav=()=>{

  const ham=React.useRef(null);
  React.useEffect(()=>{


return()=>{
    const body=document.querySelector("body"),
miniNav=body.querySelector(".mini_nav");

let button=body.querySelector(".openmini_nav");

button.addEventListener("click", ()=>{
    miniNav.classList.toggle("toggle");
})
}

  })





    return(
        <>
        {/*Nav*/}
        <nav>
          <div className="inner_nav">
            <div className="logo">
              <h2>Roland.</h2>
            </div>
            <div className="links">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#service">Services</a>
              <a href="#skill">Skils</a>
              <a href="#portfoilo">Porfoilo</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="btn_mini">



              <i
                className="bx openmini_nav bxs-widget"
                style={{ color: "white", fontSize: "1.6rem" }}
                id="openmini_nav" ref={ham}
              />
            </div>
          </div>
          <div className="mini_nav">
            <div className="mini_links">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#service">Services</a>
              <a href="#skill">Skils</a>
              <a href="#portfoilo">Porfoilo</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </>
      
    )

}

export default Nav
const Service=()=>{
    return(
        <>
        <section className="service" id="service">
  <div className="inner_service">
    <div className="service_header">
      <h2>
        My <span>Services</span>
      </h2>
    </div>
    <div className="service_body">
      <div className="row_cards">
        <div className="col_card">
          <div>
            <i className="bx bx-code" />
          </div>
          <div>
            <h3>Front-End Development</h3>
          </div>
          <div>
            <p>
              Implementing the visual elements of a website using HTML, CSS, and
              JavaScript. This includes creating interactive features,
              animations, and user interfaces.
            </p>
          </div>
        </div>
        <div className="col_card">
          <div>
            <i className="bx bx-code-block" />
          </div>
          <div>
            <h3>Back-End Development</h3>
          </div>
          <div>
            <p>
              {" "}
              Building the server-side logic that powers websites. Proficiency
              in languages like PHP and Frameworks like laravel, reactjs is
              crucial for back-end development.
            </p>
          </div>
        </div>
        <div className="col_card">
          <div>
            <i className="bx bxs-devices" />
          </div>
          <div>
            <h3>Responsive Website Design</h3>
          </div>
          <div>
            <p>
              Creating websites that adapt seamlessly to different screen sizes
              and devices. This involves using HTML, CSS, and JavaScript to
              ensure a consistent user experience across desktops, tablets, and
              mobile phones.
            </p>
          </div>
        </div>
        <div className="col_card">
          <div>
            <i className="bx bx-globe" />
          </div>
          <div>
            <h3>Web Design</h3>
          </div>
          <div>
            <p>
              Focusing on the aesthetic aspects of a website, including layout,
              color schemes, typography, and user experience. Web designers
              often work closely with web developers to bring their designs to
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Service
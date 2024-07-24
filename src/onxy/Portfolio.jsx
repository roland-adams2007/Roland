import Project from '../assets/images/project.jpeg'
import Project2 from '../assets/images/project2.jpeg'

import Project3 from '../assets/images/project3.jpeg'



const Portfolio=()=>{
    return(
        <>
        <section className="portfoilo" id="portfoilo">
  <div className="inner_portfoilo">
    <div className="portfoilo_header">
      <h2>
        My <span>Porfoilo</span>
      </h2>
      <p>Here are some of my projects:</p>
    </div>
    <div className="porfoilo_body">
      <div className="row_content">
        <div className="col_content">
          <div className="col_img">
            <img src={Project} />
          </div>
          <div className="col_name">
            <h3>LoveCare</h3>
          </div>
          <div className="col_desc">
            <p>
             LoveCare is a site made to provide facilities of various social activities in a single website. People can adopt or donate in the website
            </p>
          </div>
          <div className="col_link">
            <a href="#">View</a>
          </div>
        </div>
        <div className="col_content">
          <div className="col_img">
            <img src={Project2} />
          </div>
          <div className="col_name">
            <h3>Xtellar(XtellarShop)</h3>
          </div>
          <div className="col_desc">
            <p>
              Xtellar is an online market place that enable users to buy and sell product adn services. Xtellar helps small and large business grow and reach new consumers, empowering a new generation to bulid their lives and make their communities better
            </p>
          </div>
          <div className="col_link">
            <a href="#">View</a>
          </div>
        </div>
        <div className="col_content">
          <div className="col_img">
            <img src={Project3} />
          </div>
          <div className="col_name">
            <h3>CoffeeWorld</h3>
          </div>
          <div className="col_desc">
            <p>
              CoffeeWorld is a site made to boost the selling of coffee and let customer know what we are offering them.
            </p>
          </div>
          <div className="col_link">
            <a href="#">View</a>
          </div>
        </div>
      </div>
      <div className="view_link">
        <a href="#">View More</a>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Portfolio
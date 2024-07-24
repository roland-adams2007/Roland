const Skill=()=>{
    return(
        <>
        <section className="skill" id="skill">
  <div className="inner_skill">
    <div className="skill_header">
      <h2>
        My <span>Skills</span>
      </h2>
    </div>
    <div className="skill_body">
      <div className="pro_header">
        <label>HTML</label>
        <div className="progress">
          <div style={{ width: "85%" }} className="progress_bar">
            85%
          </div>
        </div>
      </div>
      <div className="pro_header">
        <label>CSS</label>
        <div className="progress">
          <div style={{ width: "70%" }} className="progress_bar">
            70%
          </div>
        </div>
      </div>
      <div className="pro_header">
        <label>Javascript</label>
        <div className="progress">
          <div style={{ width: "50%" }} className="progress_bar">
            50%
          </div>
        </div>
      </div>
      <div className="pro_header">
        <label>PHP</label>
        <div className="progress">
          <div style={{ width: "65%" }} className="progress_bar">
            65%
          </div>
        </div>
      </div>
      <div className="pro_header">
        <label>Laravel</label>
        <div className="progress">
          <div style={{ width: "40%" }} className="progress_bar">
            40%
          </div>
        </div>
      </div>
      <div className="pro_header">
        <label>ReactJs</label>
        <div className="progress">
          <div style={{ width: "50%" }} className="progress_bar">
            50%
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Skill
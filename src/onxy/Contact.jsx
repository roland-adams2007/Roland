const Contact=()=>{
    return(
        <>
        <section className="contact" id="contact">
  <div className="inner_contact">
    <div className="contact_header">
      <h2>
        Contact <span>Me</span>
      </h2>
    </div>
    <div className="contact_body">
      <form action="" method="post">
        <div className="c">
          <div className="name">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
            />
          </div>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="c">
          <div className="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="subject">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Email Subject"
            />
          </div>
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            defaultValue={""}
          />
        </div>
        <div className="contact_btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</section>

        </>
    )
}

export default Contact
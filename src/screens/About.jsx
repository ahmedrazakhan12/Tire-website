import React from 'react'

const About = () => {
  return (
    <>
    <div className="main-content-wrapper">
  <div className="main-content-med">
    <h1>Contact Us</h1>
    <p className="size-up">
      Fill out the form below to send us a message and one of our staff will get
      back to you as soon as possible.
    </p>
    <div className="contact-us-form-wrapper">
      <form className="simple-form labels-by-side submit-right" method="post">
        {" "}
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          defaultValue="IJ75zHHAxcV81AW5sDy94bHhnLJSkPyxePpZ6yryGyVCjLRxnJcgykjXFkcXtdpx"
        />{" "}
        <div id="div_id_name" className="control-group">
          {" "}
          <label htmlFor="id_name" className="control-label requiredField">
            Name<span className="asteriskField">*</span>{" "}
          </label>{" "}
          <div className="controls">
            {" "}
            <input
              type="text"
              name="name"
              maxLength={50}
              className="textinput textInput"
              required=""
              id="id_name"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div id="div_id_email" className="control-group">
          {" "}
          <label htmlFor="id_email" className="control-label requiredField">
            Email<span className="asteriskField">*</span>{" "}
          </label>{" "}
          <div className="controls">
            {" "}
            <input
              type="email"
              name="email"
              maxLength={254}
              className="emailinput"
              required=""
              id="id_email"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div id="div_id_phone_number" className="control-group">
          {" "}
          <label htmlFor="id_phone_number" className="control-label ">
            Phone Number
          </label>{" "}
          <div className="controls">
            {" "}
            <input
              type="text"
              name="phone_number"
              maxLength={30}
              className="textinput textInput"
              id="id_phone_number"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div id="div_id_contact_method" className="control-group">
          {" "}
          <label
            htmlFor="id_contact_method_0"
            className="control-label requiredField"
          >
            Preferred Contact Method<span className="asteriskField">*</span>{" "}
          </label>{" "}
          <div className="controls">
            {" "}
            <label htmlFor="id_contact_method_0" className="radio">
              {" "}
              <input
                type="radio"
                defaultChecked=""
                name="contact_method"
                id="id_contact_method_0"
                defaultValue={1}
              />
              Email
            </label>{" "}
            <label htmlFor="id_contact_method_1" className="radio">
              {" "}
              <input
                type="radio"
                name="contact_method"
                id="id_contact_method_1"
                defaultValue={2}
              />
              Phone
            </label>{" "}
          </div>{" "}
        </div>{" "}
        <div id="div_id_store_location" className="control-group">
          {" "}
          <label htmlFor="id_store_location" className="control-label ">
            Store Location
          </label>{" "}
          <div className="controls">
            {" "}
            <select
              name="store_location"
              className="select"
              id="id_store_location"
            >
              {" "}
              <option value="" selected="">
                ---------
              </option>{" "}
              <option value={1}>Montgomeryville</option>{" "}
              <option value={2}>Clifton Heights</option>{" "}
              <option value={3}>West Chester</option>
            </select>{" "}
            <p id="hint_id_store_location" className="help-block">
              The store location most relevant to your inquiry. Optional, but
              may help expedite your response.
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div id="div_id_message" className="control-group">
          {" "}
          <label htmlFor="id_message" className="control-label requiredField">
            Message<span className="asteriskField">*</span>{" "}
          </label>{" "}
          <div className="controls">
            {" "}
            <textarea
              name="message"
              cols={40}
              rows={10}
              className="textarea"
              required=""
              id="id_message"
              defaultValue={""}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="form-actions">
          {" "}
          <input
            type="button"
            // name="submit"
            defaultValue="Send Message"
            className="btn btn-primary btn btn-primary"
            // id="submit-id-submit"
          />{" "}
        </div>{" "}
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default About
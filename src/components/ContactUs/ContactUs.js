import React from "react";

function ContactUs() {
  return (
    <div className="Contact">
      <h4>Contact Us</h4>
      <div>
        <span>
          <i class="fas fa-phone"></i>
        </span>
        <span className="number">+ 374 93 429 369</span>
      </div>

      <div>
        <form>
          <label>Your Name</label>
          <input className="input" type="text" />

          <label>Your Mail</label>
          <input className="input" type="text" />

          <label>Your Message</label>
          <input className="inputArea" type="text" />

          <button>Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

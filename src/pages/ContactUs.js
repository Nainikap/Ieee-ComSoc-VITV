import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="hero-section">
        <h1 className="contact-title">CONTACT US</h1>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Leave you message here" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

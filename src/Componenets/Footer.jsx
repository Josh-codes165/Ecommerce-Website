import "../Componenets/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <nav className="footer-section">
          <h6 className="footer-title">Services</h6>
          <a href="#" className="link">
            Branding
          </a>
          <a href="#" className="link">
            Design
          </a>
          <a href="#" className="link">
            Marketing
          </a>
          <a href="#" className="link">
            Advertisement
          </a>
        </nav>

        <nav className="footer-section">
          <h6 className="footer-title">Company</h6>
          <a href="#" className="link">
            About us
          </a>
          <a href="#" className="link">
            Contact
          </a>
          <a href="#" className="link">
            Jobs
          </a>
          <a href="#" className="link">
            Press kit
          </a>
        </nav>

        <nav className="footer-section">
          <h6 className="footer-title">Legal</h6>
          <a href="#" className="link">
            Terms of use
          </a>
          <a href="#" className="link">
            Privacy policy
          </a>
          <a href="#" className="link">
            Cookie policy
          </a>
        </nav>

        <form className="footer-form">
          <h6 className="footer-title">Newsletter</h6>

          <fieldset className="footer-fieldset">
            <label className="footer-label">Enter your email address</label>

            <div className="join">
              <input
                type="email"
                placeholder="username@site.com"
                className="input"
              />

              <button type="submit" className="btn">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
}

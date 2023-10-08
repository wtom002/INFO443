import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-slogan">
        <img src="/img/Motion.ico" alt="3 diagonal dashes"></img>
      <div>
        <h2>MOTION.</h2>
        <p>Keep Moving.</p>
      </div>
      </div>
      <div className="footer-contact">
        <h3> Contact Us</h3>
        <p><a href="email@something.com" aria-label="Email"><span className="material-icons">email</span>Email: motion@gmail.com</a></p>
        <p><a href="tel:123-456-7894" aria-label="Phone"><span className="material-icons">phone</span> Phone: 123-456-7890</a></p>
        <p>Motion. 2023</p>
      </div>
    </footer>
  )
}

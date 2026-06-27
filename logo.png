import Image from "next/image";
import { Flame, Snowflake, Home, Zap, Thermometer, FileText, ShieldCheck, Clock, MapPin } from "lucide-react";

const services = [
  ["Furnace & Heating", "Furnace diagnostics, blower motors, ignition issues, controls, and airflow.", Flame],
  ["AC Repair", "Condenser, evaporator coil, refrigerant line, drain, and airflow diagnostics.", Snowflake],
  ["Appliance Repair", "Major home appliance diagnostics, motors, controls, and electrical faults.", Home],
  ["Electrical Troubleshooting", "Breakers, wiring, motors, low-voltage controls, and HVAC electrical faults.", Zap],
  ["Heat Pump Service", "Heating/cooling performance checks, controls, airflow, and operation issues.", Thermometer],
  ["Insurance Reports", "Clear technical descriptions and repair scope for HVAC-related issues.", FileText],
];

const photos = [
  ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80", "HVAC technician"],
  ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80", "Tools"],
  ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80", "Home service"],
];

export default function HomePage() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>HVAC • Heating • Cooling • Appliance Repair</span>
          <span>Chicago & Surrounding Suburbs</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#"><Image src="/logo.png" width={230} height={90} alt="Gold Line Services logo" /></a>
          <nav className="menu">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cta" href="#contact">Request Service</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="badge">Local HVAC & appliance service</p>
              <h1>Heating, Cooling & Appliance Repair in Chicago.</h1>
              <p className="lead">Professional diagnostics, repair, and installation support for residential HVAC systems and major home appliances.</p>
              <div className="actions">
                <a className="btn primary" href="#contact">Request Service</a>
                <a className="btn secondary" href="#services">View Services</a>
              </div>
              <div className="trust">
                <div><ShieldCheck /> Insured service</div>
                <div><Clock /> Fast scheduling</div>
                <div><MapPin /> Chicago area</div>
              </div>
            </div>

            <div className="hero-photo">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=80" alt="HVAC technician" />
              <div className="photo-card">
                <strong>Service Request</strong>
                <span>AC • Furnace • Appliance • Electrical</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>Professional HVAC & Appliance Service</h2>
            <div className="services">
              {services.map(([title, text, Icon]: any) => (
                <div className="card" key={title}>
                  <Icon className="icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div>
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=80" alt="Service tools" />
            </div>
            <div>
              <p className="eyebrow">About Gold Line Services</p>
              <h2>Clear diagnostics. Honest repair. Reliable result.</h2>
              <p>Gold Line Services provides practical field-focused HVAC and appliance repair for homeowners and small properties in the Chicago area.</p>
              <ul>
                <li>Heating and cooling diagnostics</li>
                <li>Electrical troubleshooting</li>
                <li>Repair documentation when needed</li>
                <li>Residential and small property service</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <p className="eyebrow">Gallery</p>
            <h2>Service photo placeholders</h2>
            <p className="note">These stock images can be replaced later with your real job photos.</p>
            <div className="gallery">
              {photos.map(([src, alt]) => <img key={src} src={src} alt={alt} />)}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container process">
            <div>
              <p className="eyebrow">Process</p>
              <h2>Simple service process</h2>
              <p className="lead">Clear diagnostics, repair options, and practical next steps.</p>
            </div>
            <div className="steps">
              <div className="step"><span>1</span><div><h3>Request</h3><p>Send the problem description.</p></div></div>
              <div className="step"><span>2</span><div><h3>Diagnostics</h3><p>System inspection and cause verification.</p></div></div>
              <div className="step"><span>3</span><div><h3>Repair scope</h3><p>Clear repair plan and required parts.</p></div></div>
              <div className="step"><span>4</span><div><h3>Service</h3><p>Repair, startup check, and documentation.</p></div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Request Service</h2>
              <div className="info">
                <p><strong>Email:</strong><br/><a href="mailto:goldlineservices555@gmail.com">goldlineservices555@gmail.com</a></p>
                <p><strong>Phone:</strong><br/>Will be added later</p>
                <p><strong>Service Area:</strong><br/>Chicago and surrounding suburbs</p>
              </div>
            </div>
            <form className="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <input name="name" placeholder="Your name" />
              <input name="email" placeholder="Email address" />
              <input name="city" placeholder="City / ZIP code" />
              <select name="service"><option>Service needed</option><option>Furnace / Heating Repair</option><option>AC Repair</option><option>Appliance Repair</option></select>
              <textarea name="message" placeholder="Describe the problem" />
              <button type="submit">Send Request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <Image src="/logo.png" width={230} height={90} alt="Gold Line Services logo" />
          <div><strong>Gold Line Services</strong><p>HVAC & Appliance Repair • Chicago Area</p><p><a href="mailto:goldlineservices555@gmail.com">goldlineservices555@gmail.com</a></p></div>
        </div>
      </footer>
    </>
  );
}

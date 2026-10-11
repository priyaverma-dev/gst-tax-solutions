x = "Priya and abhi are couple";
age = "31";
gender = "Female";
address = "Gorakhpur";
x = "ranideeha sikshak colony";
y = "Gorakhpur india";
name = "Abhinov k address";
age = 60
age = 60 + 1 + 45 +2 - 1
age = '60*34*45*65/54'
console.log(x,age,gender,name,);




document.addEventListener("DOMContentLoaded", () => {
  // 1. Add modern styling and animations
  const style = document.createElement("style");

  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root {
      --primary: #4f46e5;
      --secondary: #06b6d4;
      --dark: #111827;
      --muted: #64748b;
      --surface: #ffffff;
      --background: #f6f8ff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 90px;
    }

    body {
      font-family: 'Inter', Arial, sans-serif;
      color: var(--dark);
      background: var(--background);
      line-height: 1.7;
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
    }

    button, input, textarea, select {
      font: inherit;
    }

    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 17px 7%;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid #e8eaf4;
    }

    .logo {
      font-size: 23px;
      font-weight: 800;
      letter-spacing: -1px;
      color: var(--primary);
    }

    .logo span {
      color: var(--dark);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav-links a {
      color: #475569;
      font-size: 14px;
      font-weight: 600;
      transition: color .25s ease;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .menu-toggle {
      display: none;
      border: 0;
      background: #eef2ff;
      border-radius: 12px;
      padding: 9px 13px;
      font-size: 22px;
      cursor: pointer;
    }

    .btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 13px 22px;
      border: 0;
      border-radius: 14px;
      color: white;
      background: linear-gradient(120deg, #4f46e5, #6366f1);
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 8px 22px #4f46e52b;
      transition: transform .25s ease,
                  box-shadow .25s ease,
                  filter .25s ease;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 30px #4f46e544;
      filter: brightness(1.08);
    }

    .btn:active {
      transform: scale(.97);
    }

    .btn-outline {
      color: var(--primary);
      background: white;
      border: 1px solid #dbe1ff;
      box-shadow: none;
    }

    .hero {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      align-items: center;
      gap: 45px;
      min-height: 620px;
      padding: 85px 9%;
      background:
        radial-gradient(ellipse at 85% 15%, #818cf82e, transparent 38%),
        linear-gradient(135deg, #111827, #1e1b4b 65%, #164e63);
      color: white;
    }

    .hero::before,
    .hero::after {
      content: "";
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      filter: blur(2px);
      animation: float 8s ease-in-out infinite;
    }

    .hero::before {
      width: 300px;
      height: 300px;
      background: #818cf81a;
      border: 1px solid #ffffff20;
      top: -100px;
      right: 5%;
    }

    .hero::after {
      width: 220px;
      height: 220px;
      background: #06b6d41c;
      bottom: -100px;
      left: 35%;
      animation-delay: -4s;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      margin-bottom: 22px;
      border: 1px solid #ffffff25;
      border-radius: 100px;
      background: #ffffff0d;
      color: #c7d2fe;
      font-size: 12px;
      font-weight: 700;
    }

    .eyebrow-dot {
      width: 8px;
      height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 12px #34d399;
    }

    .hero h1 {
      max-width: 650px;
      font-size: clamp(38px, 5vw, 62px);
      line-height: 1.12;
      letter-spacing: -2.5px;
      margin-bottom: 24px;
    }

    .gradient-text {
      background: linear-gradient(90deg, #a5b4fc, #67e8f9);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero-copy {
      max-width: 530px;
      color: #cbd5e1;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .hero .btn-outline {
      background: #ffffff0c;
      border-color: #ffffff40;
      color: white;
    }

    /* Animated dashboard illustration */

    .visual {
      position: relative;
      min-width: 0;
      padding: 15px;
      animation: float 6s ease-in-out infinite;
    }

    .dashboard {
      position: relative;
      padding: 25px;
      border-radius: 25px;
      border: 1px solid #ffffff30;
      background: linear-gradient(145deg, #ffffff1e, #ffffff08);
      backdrop-filter: blur(20px);
      box-shadow: 0 30px 80px #00000035;
      transform: rotateY(-5deg) rotateX(2deg);
    }

    .dash-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 22px;
    }

    .dash-title {
      font-size: 16px;
      font-weight: 700;
    }

    .dash-label {
      color: #cbd5e1;
      font-size: 12px;
    }

    .dash-status {
      font-size: 11px;
      color: #a7f3d0;
      background: #10b98120;
      padding: 6px 9px;
      border-radius: 8px;
    }

    .dash-balance {
      padding: 22px;
      border-radius: 18px;
      background: linear-gradient(125deg, #6366f1, #0e7490);
      margin-bottom: 16px;
    }

    .dash-balance small {
      color: #e0e7ff;
    }

    .dash-balance h2 {
      font-size: 31px;
      margin: 6px 0;
    }

    .dash-balance p {
      color: #dbeafe;
      font-size: 12px;
    }

    .dash-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .dash-item {
      padding: 17px;
      border-radius: 15px;
      background: #ffffff12;
      border: 1px solid #ffffff12;
    }

    .dash-icon {
      font-size: 23px;
      margin-bottom: 8px;
    }

    .dash-item strong {
      display: block;
      font-size: 14px;
    }

    .dash-item small {
      color: #cbd5e1;
      font-size: 11px;
    }

    .floating-note {
      position: absolute;
      right: -8px;
      bottom: -15px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 15px 18px;
      border-radius: 16px;
      color: var(--dark);
      background: white;
      box-shadow: 0 16px 45px #00000025;
      animation: float 5s ease-in-out infinite;
      animation-delay: -2s;
    }

    .floating-icon {
      display: grid;
      place-items: center;
      width: 43px;
      height: 43px;
      border-radius: 13px;
      background: #dcfce7;
      font-size: 22px;
    }

    .floating-note strong {
      display: block;
      font-size: 13px;
    }

    .floating-note small {
      color: var(--muted);
      font-size: 11px;
    }

    /* Trust strip */

    .trust-strip {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 25px 50px;
      padding: 25px 7%;
      background: white;
      border-bottom: 1px solid #e8eaf4;
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
    }

    .trust-item span {
      color: var(--primary);
      font-size: 20px;
    }

    /* Common sections */

    .section {
      padding: 95px 8%;
    }

    .section-heading {
      max-width: 650px;
      margin: 0 auto 45px;
      text-align: center;
    }

    .section-tag {
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 11px;
      font-weight: 800;
    }

    .section-heading h2 {
      font-size: clamp(29px, 4vw, 42px);
      letter-spacing: -1.5px;
      line-height: 1.2;
      margin: 12px 0;
    }

    .section-heading p {
      color: var(--muted);
      font-size: 15px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
    }

    .service-card {
      position: relative;
      overflow: hidden;
      padding: 27px 23px;
      border-radius: 22px;
      background: white;
      border: 1px solid #e7eaf5;
      box-shadow: 0 5px 20px #17255405;
      transition: transform .3s ease,
                  box-shadow .3s ease,
                  border-color .3s ease;
    }

    .service-card::after {
      content: "";
      position: absolute;
      width: 100px;
      height: 100px;
      top: -55px;
      right: -55px;
      border-radius: 50%;
      background: #6366f10b;
      transition: transform .4s ease;
    }

    .service-card:hover {
      transform: translateY(-9px);
      border-color: #c7d2fe;
      box-shadow: 0 22px 45px #4338ca13;
    }

    .service-card:hover::after {
      transform: scale(2.2);
    }

    .service-icon {
      display: grid;
      place-items: center;
      width: 58px;
      height: 58px;
      margin-bottom: 23px;
      border-radius: 18px;
      background: linear-gradient(135deg, #eef2ff, #cffafe);
      font-size: 27px;
      transition: transform .3s ease;
    }

    .service-card:hover .service-icon {
      transform: rotate(-7deg) scale(1.08);
    }

    .service-card h3 {
      font-size: 17px;
      margin-bottom: 12px;
    }

    .service-card p {
      min-height: 78px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.8;
    }

    .text-link {
      display: inline-flex;
      gap: 7px;
      margin-top: 17px;
      color: var(--primary);
      font-size: 13px;
      font-weight: 700;
    }

    .text-link span {
      transition: transform .2s ease;
    }

    .text-link:hover span {
      transform: translateX(5px);
    }

    /* Process */

    .process-section {
      background: white;
    }

    .process-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .process-card {
      padding: 30px;
      border: 1px solid #e7eaf5;
      border-radius: 20px;
      background: #fafbff;
      transition: transform .3s ease;
    }

    .process-card:hover {
      transform: translateY(-6px);
    }

    .process-number {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      margin-bottom: 18px;
      color: white;
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      border-radius: 16px;
      font-weight: 800;
    }

    .process-card h3 {
      margin-bottom: 9px;
      font-size: 18px;
    }

    .process-card p {
      color: var(--muted);
      font-size: 14px;
    }

    /* Call to action */

    .cta {
      position: relative;
      overflow: hidden;
      margin: 0 8% 90px;
      padding: 65px 30px;
      border-radius: 30px;
      text-align: center;
      color: white;
      background: linear-gradient(120deg, #3730a3, #4f46e5, #0e7490);
    }

    .cta h2 {
      font-size: clamp(28px, 4vw, 40px);
      margin-bottom: 15px;
    }

    .cta p {
      max-width: 550px;
      margin: 0 auto 25px;
      color: #e0e7ff;
    }

    .cta .btn {
      background: white;
      color: #4338ca;
      box-shadow: none;
    }

    /* Contact form */

    .contact-layout {
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      align-items: start;
      gap: 35px;
    }

    .contact-info {
      padding: 30px;
      border-radius: 23px;
      color: white;
      background: linear-gradient(145deg, #1e1b4b, #164e63);
    }

    .contact-info h3 {
      font-size: 25px;
      margin-bottom: 12px;
    }

    .contact-info > p {
      color: #cbd5e1;
      font-size: 14px;
      margin-bottom: 28px;
    }

    .contact-feature {
      display: flex;
      gap: 13px;
      align-items: center;
      margin: 22px 0;
    }

    .contact-feature span {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 43px;
      height: 43px;
      border-radius: 13px;
      background: #ffffff17;
      font-size: 20px;
    }

    .contact-feature strong {
      display: block;
      font-size: 13px;
    }

    .contact-feature small {
      color: #cbd5e1;
      font-size: 12px;
    }

    .contact-form {
      padding: 30px;
      border-radius: 23px;
      background: white;
      border: 1px solid #e7eaf5;
      box-shadow: 0 12px 35px #17255408;
    }

    .contact-form h3 {
      font-size: 23px;
      margin-bottom: 5px;
    }

    .form-intro {
      color: var(--muted);
      font-size: 13px;
      margin-bottom: 22px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .form-group {
      margin-bottom: 17px;
    }

    .form-group label {
      display: block;
      margin-bottom: 7px;
      font-size: 12px;
      font-weight: 700;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      min-width: 0;
      padding: 13px;
      color: var(--dark);
      background: #f8faff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      outline: none;
      font-size: 13px;
      transition: border-color .2s ease,
                  box-shadow .2s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: #818cf8;
      box-shadow: 0 0 0 4px #6366f11c;
    }

    .form-group textarea {
      resize: vertical;
    }

    .contact-form .btn {
      width: 100%;
    }

    /* FAQ */

    .faq-list {
      max-width: 800px;
      margin: auto;
    }

    .faq-item {
      margin-bottom: 13px;
      padding: 19px 22px;
      border: 1px solid #e7eaf5;
      border-radius: 15px;
      background: white;
    }

    .faq-item summary {
      cursor: pointer;
      font-weight: 700;
      font-size: 14px;
    }

    .faq-item p {
      color: var(--muted);
      font-size: 13px;
      margin-top: 12px;
    }

    footer {
      padding: 38px 8%;
      color: #cbd5e1;
      background: #111827;
      text-align: center;
    }

    footer .logo {
      display: inline-block;
      margin-bottom: 12px;
      color: #a5b4fc;
    }

    footer .logo span {
      color: white;
    }

    footer p {
      font-size: 12px;
      margin: 6px 0;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin: 18px 0;
    }

    .footer-links a {
      color: #cbd5e1;
      font-size: 12px;
    }

    /* Reveal elements as they enter the viewport */

    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity .7s ease,
                  transform .7s cubic-bezier(.2, .7, .2, 1);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    @media (max-width: 1050px) {
      .hero {
        padding: 75px 6%;
        gap: 20px;
      }

      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .section {
        padding: 75px 6%;
      }
    }

    @media (max-width: 760px) {
      .navbar {
        padding: 15px 5%;
      }

      .menu-toggle {
        display: block;
      }

      .nav-links {
        display: none;
        position: absolute;
        top: calc(100% + 1px);
        left: 0;
        right: 0;
        padding: 20px 5%;
        background: white;
        box-shadow: 0 15px 25px #17255410;
        align-items: stretch;
        gap: 0;
      }

      .nav-links.open {
        display: flex;
        flex-direction: column;
      }

      .nav-links a {
        padding: 12px 0;
      }

      .hero {
        grid-template-columns: 1fr;
        padding: 65px 6% 85px;
        text-align: center;
      }

      .hero h1,
      .hero-copy {
        margin-left: auto;
        margin-right: auto;
      }

      .hero-actions {
        justify-content: center;
      }

      .visual {
        max-width: 490px;
        width: 100%;
        margin: 15px auto 10px;
      }

      .dashboard {
        transform: none;
      }

      .trust-strip {
        gap: 17px 24px;
      }

      .process-grid {
        grid-template-columns: 1fr;
      }

      .contact-layout {
        grid-template-columns: 1fr;
      }

      .cta {
        margin: 0 5% 60px;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 39px;
        letter-spacing: -1.7px;
      }

      .hero-copy {
        font-size: 14px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-card p {
        min-height: 0;
      }

      .section {
        padding: 60px 5%;
      }

      .dashboard {
        padding: 16px;
        border-radius: 20px;
      }

      .dash-balance {
        padding: 16px;
      }

      .dash-balance h2 {
        font-size: 25px;
      }

      .dash-item {
        padding: 13px;
      }

      .floating-note {
        right: -2px;
        bottom: -30px;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .contact-form,
      .contact-info {
        padding: 23px;
      }

      .trust-strip {
        justify-content: flex-start;
        padding-left: 8%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
      }

      .reveal {
        opacity: 1;
        transform: none;
      }
    }
  `;

  document.head.appendChild(style);

  // 2. Create website content

  document.body.innerHTML = `
    <nav class="navbar">
      <a href="#home" class="logo">TaxCare<span>.</span></a>

      <button class="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded="false"
        aria-controls="navLinks">
        ☰
      </button>

      <div class="nav-links" id="navLinks">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#process">How It Works</a>
        <a href="#faq">FAQs</a>
        <a href="#contact" class="btn">Contact Us ↗</a>
      </div>
    </nav>

    <header class="hero" id="home">
      <div class="hero-content reveal">
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          TAX & BUSINESS SOLUTIONS
        </div>

        <h1>
          Tax matters made
          <span class="gradient-text">simple.</span>
        </h1>

        <p class="hero-copy">
          From GST compliance to income tax returns,
          get support to manage your tax responsibilities
          with greater clarity and confidence.
        </p>

        <div class="hero-actions">
          <a href="#services" class="btn">Explore Services ↗</a>
          <a href="#contact" class="btn btn-outline">
            Talk to Our Team
          </a>
        </div>
      </div>

      <div class="visual">
        <div class="dashboard">
          <div class="dash-top">
            <div>
              <div class="dash-title">Your Business Hub</div>
              <div class="dash-label">Tax & compliance overview</div>
            </div>
            <span class="dash-status">● Organized</span>
          </div>

          <div class="dash-balance">
            <small>Manage your finances smarter</small>
            <h2>Stay on track.</h2>
            <p>Plan • File • Stay compliant</p>
          </div>

          <div class="dash-grid">
            <div class="dash-item">
              <div class="dash-icon">📄</div>
              <strong>Income Tax</strong>
              <small>Return filing support</small>
            </div>

            <div class="dash-item">
              <div class="dash-icon">📊</div>
              <strong>GST Services</strong>
              <small>Registration & returns</small>
            </div>

            <div class="dash-item">
              <div class="dash-icon">🧾</div>
              <strong>Accounting</strong>
              <small>Records & bookkeeping</small>
            </div>

            <div class="dash-item">
              <div class="dash-icon">🏢</div>
              <strong>Business</strong>
              <small>Registration guidance</small>
            </div>
          </div>
        </div>

        <div class="floating-note">
          <div class="floating-icon">✓</div>
          <div>
            <strong>One step at a time</strong>
            <small>Support for your tax needs</small>
          </div>
        </div>
      </div>
    </header>

    <div class="trust-strip">
      <div class="trust-item">
        <span>✓</span> Clear Guidance
      </div>
      <div class="trust-item">
        <span>◈</span> Organized Process
      </div>
      <div class="trust-item">
        <span>↗</span> Business-Focused Support
      </div>
    </div>

    <section class="section" id="services">
      <div class="section-heading reveal">
        <span class="section-tag">What We Do</span>
        <h2>Solutions for your financial needs</h2>
        <p>
          Explore tax, accounting and business support
          tailored to your requirements.
        </p>
      </div>

      <div class="services-grid">
        <article class="service-card reveal">
          <div class="service-icon">📑</div>
          <h3>Income Tax Returns</h3>
          <p>
            Assistance with eligible individual and business
            income tax return preparation and filing.
          </p>
          <a href="#contact" class="text-link"
            data-service="Income Tax Return Filing">
            Get assistance <span>→</span>
          </a>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">📈</div>
          <h3>GST Registration</h3>
          <p>
            Guidance on GST registration requirements,
            documentation and application procedures.
          </p>
          <a href="#contact" class="text-link"
            data-service="GST Registration">
            Get assistance <span>→</span>
          </a>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🧮</div>
          <h3>GST Return Filing</h3>
          <p>
            Support with applicable GST returns,
            documentation and compliance processes.
          </p>
          <a href="#contact" class="text-link"
            data-service="GST Return Filing">
            Get assistance <span>→</span>
          </a>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🏢</div>
          <h3>Business Services</h3>
          <p>
            Assistance with business registration options,
            bookkeeping and accounting requirements.
          </p>
          <a href="#contact" class="text-link"
            data-service="Business Registration">
            Get assistance <span>→</span>
          </a>
        </article>
      </div>
    </section>

    <section class="section process-section" id="process">
      <div class="section-heading reveal">
        <span class="section-tag">Simple Process</span>
        <h2>Getting started is easy</h2>
        <p>
          A straightforward process to help you understand
          your requirements and the next steps.
        </p>
      </div>

      <div class="process-grid">
        <article class="process-card reveal">
          <div class="process-number">01</div>
          <h3>Tell Us Your Needs</h3>
          <p>
            Choose the service you need and share a brief
            description of your requirement.
          </p>
        </article>

        <article class="process-card reveal">
          <div class="process-number">02</div>
          <h3>Discuss the Details</h3>
          <p>
            Discuss the applicable process, documents,
            timelines and professional fees.
          </p>
        </article>

        <article class="process-card reveal">
          <div class="process-number">03</div>
          <h3>Proceed with Support</h3>
          <p>
            Move forward with the agreed service and
            applicable documentation requirements.
          </p>
        </article>
      </div>
    </section>

    <section class="cta reveal">
      <h2>Need help with GST or Income Tax?</h2>
      <p>
        Tell us what you need. We will help you understand
        the next steps for your tax or business requirement.
      </p>
      <a href="#contact" class="btn">Send an Enquiry ↗</a>
    </section>

    <section class="section" id="faq">
      <div class="section-heading reveal">
        <span class="section-tag">FAQs</span>
        <h2>Questions, answered</h2>
        <p>Some common questions about our services.</p>
      </div>

      <div class="faq-list">
        <details class="faq-item reveal">
          <summary>Can I enquire about income tax return filing?</summary>
          <p>
            Yes. Use the enquiry form to describe your filing
            requirement. Eligibility and required documents
            can be discussed with the service provider.
          </p>
        </details>

        <details class="faq-item reveal">
          <summary>Do you assist with GST registration?</summary>
          <p>
            You can enquire about GST registration and the
            documentation required for your business.
            Applicability depends on your circumstances.
          </p>
        </details>

        <details class="faq-item reveal">
          <summary>How do I get started?</summary>
          <p>
            Complete the enquiry form and continue the
            conversation through WhatsApp.
          </p>
        </details>

        <details class="faq-item reveal">
          <summary>How much do your services cost?</summary>
          <p>
            Fees depend on the service and scope of work.
            Please contact us for a quote before proceeding.
          </p>
        </details>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="section-heading reveal">
        <span class="section-tag">Let's Connect</span>
        <h2>How can we help you?</h2>
        <p>
          Share your requirement and start a conversation
          with our team.
        </p>
      </div>

      <div class="contact-layout">
        <aside class="contact-info reveal">
          <h3>Let's talk taxes.</h3>
          <p>
            Have a question about GST, income tax or
            business compliance? Send us an enquiry.
          </p>

          <div class="contact-feature">
            <span>💬</span>
            <div>
              <strong>Direct Enquiry</strong>
              <small>Continue the conversation on WhatsApp</small>
            </div>
          </div>

          <div class="contact-feature">
            <span>📋</span>
            <div>
              <strong>Understand Your Needs</strong>
              <small>Tell us which service you require</small>
            </div>
          </div>

          <div class="contact-feature">
            <span>🤝</span>
            <div>
              <strong>Discuss Next Steps</strong>
              <small>Clarify documents, process and fees</small>
            </div>
          </div>
        </aside>

        <form class="contact-form reveal" id="enquiryForm">
          <h3>Send an enquiry</h3>
          <p class="form-intro">
            Fill in the details below to get started.
          </p>

          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input id="name" name="name"
                placeholder="Your name"
                autocomplete="name" required />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input id="phone" name="phone"
                type="tel" inputmode="numeric"
                pattern="[0-9]{10}" maxlength="10"
                placeholder="10-digit number"
                autocomplete="tel-national" required />
            </div>
          </div>

          <div class="form-group">
            <label for="service">Service Required *</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option>Income Tax Return Filing</option>
              <option>GST Registration</option>
              <option>GST Return Filing</option>
              <option>Business Registration</option>
              <option>Accounting Support</option>
              <option>Other Tax Query</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Tell Us More</label>
            <textarea id="message" name="message"
              rows="4"
              placeholder="Briefly describe your requirement"></textarea>
          </div>

          <button class="btn" type="submit">
            Continue on WhatsApp ↗
          </button>
        </form>
      </div>
    </section>

    <footer>
      <a href="#home" class="logo">TaxCare<span>.</span></a>
      <p>GST, income tax and business support.</p>

      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#faq">FAQs</a>
        <a href="#contact">Contact</a>
      </div>

      <p>
        © ${new Date().getFullYear()} TaxCare Solutions.
        All rights reserved.
      </p>
      <p>Service descriptions are illustrative. Actual services
        depend on eligibility and professional scope.</p>
    </footer>
  `;

  // 3. Mobile navigation toggle

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });

  // 4. Scroll reveal animation

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // 5. Automatically select a service when clicked

  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("service").value =
        link.dataset.service;
    });
  });

  // 6. Send enquiry through WhatsApp

  document.getElementById("enquiryForm").addEventListener(
    "submit",
    event => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();

      // Replace with your actual WhatsApp Business number.
      const whatsappNumber = "91XXXXXXXXXX";

      if (whatsappNumber.includes("X")) {
        alert(
          "Please update the WhatsApp number in first.js before using the enquiry form."
        );
        return;
      }

      const text = [
        "Hello, I would like to enquire about your services.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Message: ${message || "Not provided"}`
      ].join("\n");

      const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(text);

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    }
  );
});

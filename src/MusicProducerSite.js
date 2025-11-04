import React, { useRef, useState } from "react";
import "./style.css";
import translations from "./translations";

export default function MusicProducerSite() {
  const [lang, setLang] = useState("en");
  const t = (key) => translations[lang][key];

  const audioRef = useRef(null);

  const handleJumpTo = (seconds) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      audioRef.current.play();
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Filléres emlékeim",
      description:
        "Komplett hangszerelés és koncepció, rengeteg közreműködővel.",
      youtube: "https://www.youtube.com/embed/-YJuVPTg_g8?si=JQ8jSicIeippKGLS",
    },
    {
      id: 2,
      title: "Rálátás",
      description: "Teljes hangszerelési koncepció és kivitelezése, Mixing",
      youtube: "https://www.youtube.com/embed/iAIzmDdPnVw?si=Mlicqrs7WvrLJiIb",
    },
    {
      id: 3,
      title: "Pseudo Naturale",
      description:
        "Saját projektem, ahol én írom a zenét és a dalszövegeket is.",
      youtube: "https://www.youtube.com/embed/WKCEL8cbN-M?si=Tojc6Y7_SvNvb4Mx",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Music Production",
      desc: "Full production from arrangement to final master.",
    },
    {
      id: 2,
      title: "Composition",
      desc: "Custom compositions for film, games, ads and media.",
    },
    {
      id: 3,
      title: "Mixing & Mastering",
      desc: "Professional mixing and mastering to commercial loudness.",
    },
    {
      id: 4,
      title: "Sound Design",
      desc: "Original sound design, foley and sonic branding.",
    },
  ];

  return (
    <div className="container">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-content">
          {/* LOGO */}
          <div className="logo-title">
            <div className="logo"></div>
            <div>
              <h1>Oliver Kőpataki — Music Producer & Composer</h1>
              <p>Your composer, your ideas</p>
            </div>
          </div>

          {/* JOBB OLDALI ELEMCSOPORT */}
          <div className="right-side">
            {/* NAVIGATION */}
            <nav className={`nav ${menuOpen ? "active" : ""}`}>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                {t("about")}
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                {t("services")}
              </a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                {t("portfolio")}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t("contact")}
              </a>
              <a
                href="/press-kit.zip"
                className="press-kit"
                onClick={() => setMenuOpen(false)}
              >
                {t("pressKit")}
              </a>

              {/* LANGUAGE SWITCHER */}
              <div className="lang-switcher">
                <button
                  className={lang === "en" ? "active" : ""}
                  onClick={() => setLang("en")}
                  aria-label="English"
                >
                  <img src="/images/english.png" alt="English" />
                </button>

                <button
                  className={lang === "hu" ? "active" : ""}
                  onClick={() => setLang("hu")}
                  aria-label="Hungarian"
                >
                  <img src="/images/hun.png" alt="Hungarian" />
                </button>
              </div>
            </nav>

            {/* HAMBURGER BUTTON */}
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h2>{t("heroTitle")}</h2>
            <p>{t("heroText")}</p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary">
                {t("listen")}
              </a>
              <a href="#contact" className="btn-secondary">
                {t("hire")}
              </a>
            </div>

            <div className="hero-info">
              <div>
                <strong>Clients:</strong>
                <div>
                  Pajor Tamás (ex.Neurotic, Amen, Tom.), Kardos Horváth János
                  (Kaukázus), Bérczesi Róbert (Hiperkarma)
                </div>
              </div>
              <div>
                <strong>Availability:</strong>
                <div>Taking new commissions — contact for rates</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="studio-card">
              <div className="studio-info">
                <div className="freshTrackLogo"></div>
                <div>
                  <h3>{t("FreshTrack")}</h3>
                  <p>{t("FreshTrackDesc")}</p>
                </div>
              </div>

              <div className="featured-track">
                <h4>{t("listenit")}</h4>
                <audio ref={audioRef} controls>
                  <source
                    src="audio_files/pn-mittettveledazido.wav"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>

                <div
                  className="track-timestamp"
                  onClick={() => handleJumpTo(150)}
                  style={{ cursor: "pointer" }}
                >
                  🎸 Guitar solo — 2:30
                </div>
                <div
                  className="track-timestamp"
                  onClick={() => handleJumpTo(200)}
                  style={{ cursor: "pointer" }}
                >
                  🎸 Guitar solo — 3:20
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <h3>{t("aboutMe")}</h3>
          <p>{t("aboutMeDesc")}</p>
          <div className="about-cards">
            <div className="card">
              <h4>Notable credits</h4>
              <ul>
                <li>Full production music — original score</li>
                <li>Indie game — adaptive soundtrack</li>
                <li>Commercials — sonic branding</li>
              </ul>
            </div>
            <div className="card">
              <h4>Tools & gear</h4>
              <p>
                DAW: Logic Pro • Plugins: Universal Audio, Kontakt, Serum,
                Valhalla • Hardware: Universal Audio Apollo, Kali LP6
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="services">
          <h3>{t("servicesTitle")}</h3>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.id} className="service-card">
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
                <a href="#contact">Get a quote →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="portfolio">
          <div className="portfolio-header">
            <h3>{t("portfolio")}</h3>
            <a href="/full-portfolio">View full portfolio</a>
          </div>

          <div className="portfolio-grid">
            {tracks.map((track) => (
              <article key={track.id} className="portfolio-item">
                <div className="video-container">
                  <iframe
                    src={track.youtube}
                    title={track.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4>{track.title}</h4>
                <p>{track.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="contact">
          <h3>{t("contactTitle")}</h3>
          <p>{t("contactText")}</p>
          <div className="contact-grid">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted — replace with your handler");
              }}
            >
              <label>Name</label>
              <input placeholder="Your name" required />
              <label>Email</label>
              <input type="email" placeholder="you@domain.com" required />
              <label>Message</label>
              <textarea placeholder="Tell me about your project" required />
              <button type="submit">Send message</button>
            </form>

            <div className="contact-info">
              <h4>Quick info</h4>
              <p>
                Location: Budapest (available for remote projects). Languages:
                English, Hungarian.
              </p>
              <div className="social-links">
                <a href="#">SoundCloud</a>
                <a href="#">Spotify</a>
                <a href="#">Instagram</a>
              </div>
              <p>
                <strong>Rates:</strong> Starting from €300 per original track
                (example)
              </p>
              <p>Need a custom quote? Use the form.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div>
          <span>
            © {new Date().getFullYear()} Oliver Kőpataki — Music Producer &
            Composer
          </span>
          <span>Built with ❤️ • Available for commissions</span>
        </div>
      </footer>
    </div>
  );
}

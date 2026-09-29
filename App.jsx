import React, { useMemo, useState } from "react";
import { projects, virtualExperience, courses, skillGroups, interests } from "./data";

const Icon = ({ children, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [courseFilter, setCourseFilter] = useState("All");
  const [formStatus, setFormStatus] = useState("");

  const filteredCourses = useMemo(() => {
    if (courseFilter === "All") return courses;
    return courses.filter(c => c.category === courseFilter);
  }, [courseFilter]);

  const nav = ["Home", "About", "Projects", "Virtual Experience", "Courses & Learning", "Skills", "Education", "Achievements", "Contact"];

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:rehanraza.shaikh@vit.edu.in?subject=${subject}&body=${body}`;
    setFormStatus("Opening your email app…");
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark">R</span>
            <span>Rehan Raza Shaikh</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map(item => {
              const id = item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
              return <button key={item} onClick={() => go(id)}>{item}</button>;
            })}
            <a className="nav-resume" href="#contact">Resume</a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse"></span> THIRD-YEAR ENGINEERING STUDENT</div>
              <h1>Rehan Raza <span>Shaikh</span></h1>
              <p className="hero-title">Biomedical Engineering Student <i>•</i> AI/ML <i>•</i> Data Analytics <i>•</i> Cloud</p>
              <p className="hero-text">Third-year Biomedical Engineering student at Vidyalankar Institute of Technology, interested in AI/ML, data analytics, cloud computing, healthcare technology, and software development. I enjoy building practical projects that combine engineering and technology to solve real-world problems.</p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => go("projects")}>View Projects <Icon><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon></button>
                <a className="btn ghost" href="mailto:rehanraza.shaikh@vit.edu.in">Contact Me</a>
              </div>
              <div className="social-row">
                <a href="https://github.com/rehanraza0063-sudo" target="_blank" rel="noreferrer"><Icon><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.2 4c.1-1.3.1-2.5-.1-3.5 0 0-1.2-.4-4 1.5a13.5 13.5 0 0 0-7.2 0C5.1.1 3.9.5 3.9.5c-.2 1-.2 2.2-.1 3.5A5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.4 7 6.7 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 18c-3.5 1.6-3.5-1.6-5-2"/><path d="M19 16c-3.5-1.6-3.5 1.6-5 2"/></Icon> GitHub</a>
                <a href="https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/" target="_blank" rel="noreferrer"><Icon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></Icon> LinkedIn</a>
                <a href="mailto:rehanraza.shaikh@vit.edu.in"><Icon><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></Icon> Email</a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="profile-card">
                <div className="visual-top"><span>BIOMED // TECH</span><span>01 — 06</span></div>
                <div className="profile-photo-wrap">
                  <div className="profile-glow"></div>
                  <img className="profile-photo" src="/images/rehan-profile.jpeg" alt="Rehan Raza Shaikh" />
                </div>
                <div className="profile-caption">
                  <div><small>FOCUS</small><strong>AI / ML</strong></div>
                  <div><small>DOMAIN</small><strong>HEALTHCARE</strong></div>
                  <div><small>STACK</small><strong>WEB + CLOUD</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span></div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHead eyebrow="01 / ABOUT" title="Engineering with a healthcare perspective." text="A biomedical engineering background with a growing focus on software, data and cloud technologies." />
            <div className="about-grid">
              <div className="about-text">
                <p>I am a third-year Biomedical Engineering student at Vidyalankar Institute of Technology, with an academic background in biomedical engineering and an interest in AI/ML, data analytics, cloud computing, and software development.</p>
                <p>I enjoy building practical projects ranging from healthcare platforms and data analysis to web applications and browser-based games.</p>
                <p>My goal is to combine engineering, data, and technology to build practical solutions for real-world problems.</p>
              </div>
              <div className="explore-box">
                <div className="mini-label">CURRENTLY EXPLORING</div>
                <div className="explore-grid">
                  {["Machine Learning","AI for Healthcare","Data Analytics","AWS & Cloud Computing","Biomedical Technology","Software Development"].map((x,i)=>
                    <div className="explore-item" key={x}><span>0{i+1}</span><strong>{x}</strong></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHead eyebrow="02 / PROJECTS" title="Things I have built." text="A selection of practical projects across healthcare, data, web development and interactive applications." />
            <div className="project-grid">
              {projects.map(p => (
                <article className="project-card" key={p.name}>
                  <div className="project-image"><img src={p.image} alt="" /><span className="project-number">{p.number}</span></div>
                  <div className="project-body">
                    <div className="project-category">{p.category}</div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="tags">{p.technologies.slice(0,5).map(t => <span key={t}>{t}</span>)}</div>
                    <div className="card-actions">
                      <button onClick={() => setProject(p)}>View Details</button>
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub <Icon size={15}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></Icon></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="virtual-experience" className="section">
          <div className="container">
            <SectionHead eyebrow="03 / VIRTUAL EXPERIENCE" title="Learning through simulations." text="Virtual experience programs completed outside traditional employment." />
            <div className="experience-grid">
              {virtualExperience.map((x,i) => (
                <article className="experience-card" key={x.title}>
                  <div className="exp-index">0{i+1}</div>
                  <div className="exp-content">
                    <div className="provider">{x.provider}</div>
                    <h3>{x.title}</h3>
                    <p>{x.description}</p>
                    <span className="status">COMPLETED</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="courses-learning" className="section courses-section">
          <div className="container">
            <SectionHead eyebrow="04 / COURSES & LEARNING" title="Learning, one course at a time." text="Completed courses and learning experiences, with audit-track learning clearly separated from certificate credentials." />
            <div className="filter-row">
              {["All","AI","Data","Cloud","Programming","Healthcare","Other"].map(f =>
                <button className={courseFilter === f ? "active" : ""} key={f} onClick={() => setCourseFilter(f)}>{f}</button>
              )}
            </div>
            <div className="course-grid">
              {filteredCourses.map(c => (
                <article className={`course-card ${c.featured ? "featured" : ""}`} key={c.title}>
                  <div className="course-top">
                    <span className={c.audit ? "course-type audit" : "course-type"}>{c.type}</span>
                    <span className="course-date">{c.date}</span>
                  </div>
                  <div className="course-logo">{c.provider.split(" ")[0].slice(0,2).toUpperCase()}</div>
                  <h3>{c.title}</h3>
                  <div className="course-provider">{c.provider}</div>
                  <div className="course-skills">{c.skills.map(s => <span key={s}>{s}</span>)}</div>
                  {c.audit ? (
                    <div className="audit-note"><strong>Audit Track</strong><span>No certificate claimed</span></div>
                  ) : (
                    <div className="credential-placeholder">Certificate / Credential</div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHead eyebrow="05 / SKILLS" title="A broad technical toolkit." text="Skills I am currently learning and using across academic, personal and technical projects." />
            <div className="skills-grid">
              {skillGroups.map(group => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section compact-section">
          <div className="container">
            <SectionHead eyebrow="06 / EDUCATION" title="Academic foundation." />
            <div className="education-card">
              <div className="edu-year">2024 — 2028</div>
              <div>
                <div className="mini-label">VIDYALANKAR INSTITUTE OF TECHNOLOGY</div>
                <h3>B.Tech — Biomedical Engineering</h3>
                <p>Third Year · Minor / MDM: Computer Science</p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <SectionHead eyebrow="07 / ACHIEVEMENTS" title="Milestones along the way." />
            <div className="achievement-card">
              <div className="achievement-mark">SIH</div>
              <div>
                <div className="mini-label">SMART INDIA HACKATHON 2026</div>
                <h3>RuralCare Connect</h3>
                <p>Team role: <strong>Tech Treasurer</strong> · Problem Statement: <strong>PS 26133</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section interest-section">
          <div className="container">
            <SectionHead eyebrow="08 / AREAS OF INTEREST" title="Where I want to keep learning." />
            <div className="interest-grid">
              {interests.map(([title,desc],i) => <div className="interest-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">09 / CONTACT</div>
              <h2>Let's connect.</h2>
              <p>I'm open to research opportunities, internships, collaborations and technology projects.</p>
              <div className="contact-links">
                <a href="mailto:rehanraza.shaikh@vit.edu.in"><Icon><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></Icon> rehanraza.shaikh@vit.edu.in</a>
                <a href="https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/" target="_blank" rel="noreferrer"><Icon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></Icon> LinkedIn</a>
                <a href="https://github.com/rehanraza0063-sudo" target="_blank" rel="noreferrer"><Icon><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.2 4c.1-1.3.1-2.5-.1-3.5 0 0-1.2-.4-4 1.5a13.5 13.5 0 0 0-7.2 0C5.1.1 3.9.5 3.9.5c-.2 1-.2 2.2-.1 3.5A5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.4 7 6.7 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 18c-3.5 1.6-3.5-1.6-5-2"/><path d="M19 16c-3.5-1.6-3.5 1.6-5 2"/></Icon> GitHub</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
              <label>Message<textarea name="message" required rows="5" placeholder="Write your message…"></textarea></label>
              <button className="btn primary" type="submit">Send Message <Icon><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon></button>
              {formStatus && <small className="form-status">{formStatus}</small>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>Rehan Raza Shaikh</strong><span>Biomedical Engineering · AI/ML · Data Analytics · Cloud</span></div>
          <div className="footer-links"><a href="https://github.com/rehanraza0063-sudo" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/rehan-raza-shaikh-3869a7328/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:rehanraza.shaikh@vit.edu.in">Email</a></div>
          <div className="footer-credit">Created by Rehan Raza Shaikh</div>
        </div>
      </footer>

      {project && (
        <div className="modal-backdrop" onClick={() => setProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProject(null)} aria-label="Close">×</button>
            <div className="project-category">{project.category}</div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.features.length > 0 && <><div className="modal-label">FEATURES</div><div className="feature-list">{project.features.map(f => <span key={f}>{f}</span>)}</div></>}
            {project.technologies.length > 0 && <><div className="modal-label">TECHNOLOGIES</div><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></>}
            {project.github && <a className="btn primary modal-github" href={project.github} target="_blank" rel="noreferrer">Open GitHub</a>}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHead({ eyebrow, title, text }) {
  return <div className="section-head reveal"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default App;
// src/App.jsx

import React, {useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import avatarImg from "./assets/guna photo.jpg"; 

function useFadeInOnScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => {
      sections.forEach(sec => observer.unobserve(sec));
    }
  }, []);
}

export default function App() {
  const [contactData, setContactData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setContactData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_dcqsl2g",   // replace with your EmailJS service ID
    "template_or1t1wy",  // replace with your EmailJS template ID
    contactData,
    "jyTj5xZVw85q3kKgC"    // replace with your EmailJS public key
  )
  .then((response) => {
    console.log("SUCCESS!", response.status, response.text);
    alert("Thanks! Your message has been sent.");
    setContactData({ name: "", email: "", message: "" });
  })
  .catch((err) => {
    console.log("FAILED...", err);
    alert("Oops! Something went wrong. Please try again.");
  });
};


  useFadeInOnScroll();

  const resume = {
    name: "Guna Naga Durga Rao Bokka",
    title: "Full Stack MERN Developer",
    phone: "+91-6305659109",
    email: "gunanaga944@gmail.com",
    summary:
      "Full Stack Web Developer with 3.7 years experience building scalable apps using React, Node, Express, MongoDB and MySQL. Experienced in trade finance domain at TCS. Skilled in UI, API integration and performance optimization.",
    experience: [
      {
        company: "Tata Consultancy Services",
        role: "System Engineer",
        period: "Feb 2022 - Present",
        bullets: [
          "Developer at SBI Trade Finance — worked on Eximbills Enterprise (trade finance automation).",
          "Frontend: HTML5, CSS3, JavaScript, React", "Backend: Node.js, Express; DB: MySQL & MongoDB.",
          "Followed Agile methodology, collaborated with stakeholders."
        ]
      }
    ],
    skills: [
      "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript (ES6+)",
      "HTML5", "CSS3", "REST APIs", "Git"
    ],
    projects: [
      {
        name: "E-commerce",
        desc: "Online store with React, Node, MongoDB and Express. Features: product listing, cart and checkout.",
        tech: ["React", "Node", "Express", "MongoDB"],
        link: "#"  // replace with your actual URL
      },
      {
        name: "Currency Converter",
        desc: "Simple currency converter using real-time rates.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#"  // replace with your actual URL
      }
    ],
    education: [
      {
        school: "Swarnandhra College of Engineering and Technology",
        degree: "B.Tech — Mechanical Engineering",
        years: "2018 - 2021",
        note: "GPA: 7.9"
      }
    ],
    github: "https://github.com/guna-naga",
    linkedin: "https://www.linkedin.com/in/guna-naga/"
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-inner">
          <div className="header-info">
            <h1>{resume.name}</h1>
            <p className="subtitle">
              {resume.title} — {resume.email} · {resume.phone}
            </p>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero fade-in-section">
          <div className="hero-text">
            <h2>Hi — I'm {resume.name.split(" ")[0]}</h2>
            <p>{resume.summary}</p>
            <div className="hero-buttons">
              <a href={resume.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={resume.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="/Guna_FullStack_Mern_Developer_3.5Y.pdf" download className="resume-btn">Resume</a>
              <a href="#contact" className="hire-btn" onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}>
                Hire me
              </a>
            </div>
          </div>
          <div className="hero-image">
            {avatarImg ? (
              <img src={avatarImg} alt="Avatar" className="avatar-photo" />
            ) : (
              <div className="avatar-placeholder">GN</div>
            )}
            <p className="hero-image-text">
              Full Stack MERN Developer — 3.7 years experience
            </p>
          </div>
        </section>

        <section id="about" className="about fade-in-section">
          <h3>About</h3>
          <p>{resume.summary}</p>
        </section>

        <section id="experience" className="experience fade-in-section">
          <h3>Experience</h3>
          <div className="experience-list">
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="exp-header">
                  <h4>{exp.role} — {exp.company}</h4>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects fade-in-section">
          <h3>Projects</h3>
          <div className="projects-list">
            {resume.projects.map((p, i) => (
              <div key={i} className="project-item">
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <p className="tech-list">Tech: {p.tech.join(", ")}</p>
                <a href={p.link} target="_blank" rel="noreferrer">View</a>
              </div>
            ))}
          </div>
        </section>

        <section className="other-info fade-in-section">
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {resume.skills.map((s, i) => (
                <span key={i} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            {resume.education.map((e, i) => (
              <div key={i} className="education-item">
                <div className="school">{e.school}</div>
                <div className="degree-years">
                  {e.degree} · {e.years}
                </div>
                {e.note && <div className="note">{e.note}</div>}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact fade-in-section">
          <h3>Contact</h3>
          <p>
            Email: <a href={`mailto:${resume.email}`}>{resume.email}</a> · Phone: {resume.phone}
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={contactData.name}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={contactData.email}
              onChange={handleInputChange}
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Hi Guna…"
              value={contactData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer fade-in-section">
        <div className="footer-inner">
          <div>
            © {new Date().getFullYear()} {resume.name.split(" ")[0]} — Built with React
          </div>
          <div className="footer-links">
            <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add(styles.animate);
    });
  }, []);

  return (
    <>
      <header className={styles.navbar}>
        <h2>EduSpark</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#grades">Classes</a>
          <button onClick={() => setShowAuth(true)}>Login</button>
        </nav>
      </header>

      <section id="home" className={`${styles.hero} fade`}>
        <h1>Live Online Learning for Curious Kids</h1>
        <p>Grades 1–8 • Concept-based • Interactive</p>
        <button onClick={() => setShowAuth(true)}>Book Free Demo</button>
      </section>

      <section id="curriculum" className={`${styles.section} fade`}>
        <h2>Our Curriculum</h2>
        <div className={styles.cards}>
          <div className={styles.card}>Mathematics</div>
          <div className={styles.card}>Science</div>
          <div className={styles.card}>English</div>
        </div>
      </section>

      <section id="grades" className={`${styles.section} fade`}>
        <h2>Classes We Teach</h2>
        <div className={styles.grades}>
          {[1,2,3,4,5,6,7,8].map(g => (
            <span key={g}>Grade {g}</span>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        © 2025 EduSpark | Resume Project by Pratyush Raj
      </footer>

      {/* LOGIN / SIGNUP MODAL */}
      {showAuth && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <h3>{isLogin ? "Login" : "Sign Up"}</h3>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            {!isLogin && <input placeholder="Confirm Password" type="password" />}
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <p onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "New user? Sign up" : "Already have an account? Login"}
            </p>
            <span onClick={() => setShowAuth(false)}>✖</span>
          </div>
        </div>
      )}
    </>
  );
}

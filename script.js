
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Roboto+Mono:wght@400;700&display=swap');

:root {
  --cream: #f4e8cf;
  --orange: #e45b2f;
  --navy: #172b42;
  --yellow: #f2c94c;
  --green: #385b43;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--cream);
  color: var(--navy);
  font-family: 'Roboto Mono', monospace;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 7%;
  background: var(--navy);
  color: var(--cream);
  border-bottom: 5px solid var(--orange);
}

.logo, nav a {
  color: var(--cream);
  text-decoration: none;
  font-weight: bold;
}

.logo {
  font-family: 'Oswald', sans-serif;
  font-size: 27px;
  letter-spacing: 2px;
}

.logo span {
  color: var(--yellow);
  font-size: 12px;
}

nav {
  display: flex;
  gap: 22px;
  font-size: 12px;
}

.hero {
  min-height: 440px;
  padding: 90px 8%;
  position: relative;
  background: var(--orange);
  color: white;
  border-bottom: 8px solid var(--navy);
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 18px;
}

.hero h1 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(45px, 9vw, 90px);
  line-height: .98;
  font-weight: 700;
  letter-spacing: -2px;
}

.hero h1 span {
  color: var(--yellow);
}

.hero > p:not(.eyebrow) {
  margin: 22px 0;
  font-size: 13px;
}

.main-btn {
  display: inline-block;
  background: var(--navy);
  color: white;
  padding: 15px 22px;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid white;
}

.main-btn:hover {
  background: var(--yellow);
  color: var(--navy);
}

.hero-stamp {
  position: absolute;
  right: 9%;
  bottom: 45px;
  border: 3px solid var(--yellow);
  color: var(--yellow);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: grid;
  place-content: center;
  text-align: center;
  font-weight: bold;
  transform: rotate(12deg);
}

.sports-section {
  padding: 75px 7%;
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2, .about h2 {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(30px, 6vw, 54px);
}

.section-heading h2 span {
  color: var(--orange);
}

#search {
  width: 100%;
  padding: 17px;
  margin-bottom: 30px;
  border: 2px solid var(--navy);
  background: transparent;
  font: inherit;
  font-size: 13px;
  outline: none;
}

#search:focus {
  border-color: var(--orange);
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.sport-card {
  background: var(--navy);
  color: var(--cream);
  padding: 25px 18px;
  min-height: 155px;
  border: 3px solid var(--navy);
  cursor: pointer;
  text-align: left;
  transition: .2s;
}

.sport-card:hover {
  background: var(--orange);
  transform: translateY(-5px);
  box-shadow: 6px 6px 0 var(--yellow);
}

.sport-icon {
  font-size: 34px;
}

.sport-card h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  margin-top: 12px;
  text-transform: uppercase;
}

.sport-card p {
  font-size: 10px;
  margin-top: 5px;
}

.about {
  background: var(--green);
  color: white;
  padding: 75px 8%;
  text-align: center;
}

.about p:last-child {
  margin-top: 18px;
  font-size: 13px;
  line-height: 1.8;
}

footer {
  background: var(--navy);
  color: var(--cream);
  text-align: center;
  padding: 40px 15px;
}

footer h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
}

footer p {
  font-size: 10px;
  margin-top: 12px;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(10, 20, 30, .85);
  display: grid;
  place-items: center;
  padding: 15px;
  z-index: 10;
}

.hidden {
  display: none;
}

.modal-content {
  background: var(--cream);
  color: var(--navy);
  width: 100%;
  max-width: 650px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 30px;
  border: 6px solid var(--orange);
  position: relative;
}

.modal-content h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 38px;
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  right: 15px;
  top: 12px;
  border: none;
  background: var(--orange);
  color: white;
  padding: 9px 13px;
  font-weight: bold;
  cursor: pointer;
}

.guide-item {
  border-top: 2px solid var(--navy);
  padding: 15px 0;
}

.guide-item h3 {
  font-family: 'Oswald', sans-serif;
  margin-bottom: 7px;
}

.guide-item p {
  font-size: 12px;
  line-height: 1.8;
}

@media (max-width: 650px) {
  .sports-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .sport-card {
    padding: 17px 12px;
    min-height: 130px;
  }

  .sport-card h3 {
    font-size: 18px;
  }

  .hero {
    padding-top: 75px;
    min-height: 390px;
  }

  .hero-stamp {
    width: 65px;
    height: 65px;
    font-size: 11px;
  }

  nav {
    gap: 12px;
  }
}

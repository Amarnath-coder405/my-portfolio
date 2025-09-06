import React, { useState, Suspense } from "react";
import "./styles.css";
import "./theme.css";
import { motion } from "framer-motion";


const Header = React.lazy(() => import("./components/layout/Header"));
const Hero = React.lazy(() => import("./components/sections/Hero"));
const About = React.lazy(() => import("./components/sections/About"));
const Projects = React.lazy(() => import("./components/sections/Projects"));
const Achievements = React.lazy(() => import("./components/sections/Achievements"));
const Performance = React.lazy(() => import("./components/sections/Performance"));
const TechStack = React.lazy(() => import("./components/sections/TechStack"));
const Testimonials = React.lazy(() => import("./components/sections/Testimonials"));
const Contact = React.lazy(() => import("./components/sections/Contact"));
const Footer = React.lazy(() => import("./components/layout/Footer"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Performance />
            <TechStack />
            <Testimonials />
            <Contact />
          </motion.div>
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

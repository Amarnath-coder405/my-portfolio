import React from "react";
import "../styles/styles.css";

const performanceData = {
  performance: 98,
  accessibility: 100,
  bestPractices: 100,
  seo: 95,
  coreVitals: {
    FCP: "1.2s",
    LCP: "1.8s",
    CLS: "0.01",
    TTI: "2.1s",
  },
};

const Performance = () => {
  return (
    <section className="performance-section" id="performance">
      <div className="performance-container">
        <h2 className="section-title">Performance Leaderboard</h2>
        <p className="section-subtitle">Audited with Google Lighthouse and Core Web Vitals</p>

        <div className="score-grid">
          <div className="score-card perf">Performance <span>{performanceData.performance}</span></div>
          <div className="score-card access">Accessibility <span>{performanceData.accessibility}</span></div>
          <div className="score-card best">Best Practices <span>{performanceData.bestPractices}</span></div>
          <div className="score-card seo">SEO <span>{performanceData.seo}</span></div>
        </div>

        <h3 className="core-title">Core Web Vitals</h3>
        <div className="core-metrics">
          {Object.entries(performanceData.coreVitals).map(([key, value]) => (
            <div key={key} className="core-item">
              <strong>{key}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <a href="/reports/lighthouse-report.pdf" target="_blank" className="download-report">
          View Full Lighthouse Report
        </a>
      </div>
    </section>
  );
};

export default Performance;

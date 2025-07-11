import { motion } from 'framer-motion';
import Header from '../../components/Header';
import styles from '../../styles/xeno.module.css';

export default function Proposal() {
  return (
    <>
      <main className={`min-h-screen bg-gradient-to-br from-zinc-900 to-black ${styles.xenoPage}`}>
        <Header />
        {/* Splash Section */}
        <section className="splash">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="splash-text"
          >
            XENO X<br /> DANIEL DE LA ROSA
          </motion.span>
        </section>

        {/* Proposal Title and Info */}
        <div className="top-info">
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Proposal: Medical Company Rebrand</h1>
          <p>
            <strong>Prepared for:</strong> Xenco Medical<br />
            <strong>Prepared by:</strong> Jeff Biestman and Daniel De LA Rosa, LEGACY 2310 PRODUCTIONS<br />
            <strong>Date:</strong> 7/11/2025<br />
            <strong>Version:</strong> 1.0
          </p>
        </div>

        {/* 1. Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section"
        >
          <h2>1. Executive Summary</h2>
          <p>
            LEGACY 2310 PRODUCTIONS is excited to partner with Xenco Medical to transform your brand into a modern, trusted, and surgeon-centric identity that aligns with today’s expectations in healthcare excellence. This proposal outlines our phased approach to delivering a complete rebrand tailored to the medical space, with a focus on credibility, accessibility, and innovation.
          </p>
        </motion.section>

        {/* 2. Objectives */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section"
        >
          <h2>2. Objectives</h2>
          <ul>
            <li>Modernize the visual identity</li>
            <li>Clarify messaging for patient trust</li>
            <li>Align branding with compliance (HIPAA, ADA, etc.)</li>
            <li>Improve digital experience across platforms</li>
            <li>Elevate perception to match clinical excellence</li>
          </ul>
        </motion.section>

        {/* 3. Scope of Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section"
        >
          <h2>3. Scope of Services</h2>
          <h3>Phase 1: Discovery & Strategy</h3>
          <ul>
            <li>Deep Dive Brand audit</li>
            <li>Stakeholder interviews</li>
            <li>Competitor & industry analysis</li>
          </ul>
          <h3>Phase 2: Brand Identity Design</h3>
          <ul>
            <li>Logo (primary + secondary lockups)</li>
            <li>Color palette + typography system</li>
            <li>Brand tone + voice guide</li>
            <li>Tagline development</li>
          </ul>
          <h3>Phase 3: Website + Digital Presence</h3>
          <ul>
            <li>Custom homepage + interior pages</li>
            <li>Surgeon/Patient experience design (navigation, appointment/meeting flow)</li>
            <li>HIPAA-conscious copywriting</li>
            <li>Mobile optimization</li>
            <li>SEO best practices</li>
          </ul>
          <h3>Phase 4: Marketing Assets & Rollout</h3>
          <ul>
            <li>Business cards + letterhead</li>
            <li>Brochure or patient handout</li>
            <li>Social media templates</li>
            <li>Internal brand guide PDF</li>
          </ul>
        </motion.section>

        {/* 4. Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section"
        >
          <h2>4. Timeline</h2>
          <p>Estimated timeline: 12 months<br />
          Starts: 7/14/2025<br />
          Launch Goal: [Insert launch goal date]</p>
        </motion.section>

        {/* 5. Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="section"
        >
          <h2>5. Pricing</h2>
          <p>Total Project Fee: $250,000</p>
          <ul>
            <li>50% due at project kickoff</li>
            <li>25% at midpoint</li>
            <li>25% upon final delivery</li>
          </ul>
          <p>Additional services like paid marketing, custom integrations, or photography available upon request.</p>
        </motion.section>

        {/* 6. Why LEGACY 2310 PRODUCTIONS? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="section"
        >
          <h2>6. Why LEGACY 2310 PRODUCTIONS?</h2>
          <ul>
            <li>Deep experience in visual-storytelling, design, and tech</li>
            <li>Brand fluency across digital and print</li>
            <li>Strategic and visual alignment</li>
            <li>High-touch communication and rapid turnaround</li>
          </ul>
        </motion.section>

        {/* 7. Next Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="section"
        >
          <h2>7. Next Steps</h2>
          <ol>
            <li>Review and approve proposal</li>
            <li>Sign contract</li>
            <li>Kickoff strategy session</li>
          </ol>
        </motion.section>

        {/* Rebrand Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="section"
        >
          <h2>Rebrand</h2>
          <h3>Includes:</h3>
          <ul>
            <li>Brand strategy & positioning</li>
            <li>Logo redesign</li>
            <li>Visual identity (color, fonts, iconography)</li>
            <li>Messaging & tone (tagline, elevator pitch)</li>
            <li>Website redesign</li>
            <li>Brand guidelines</li>
            <li>Surgeon/Patient-facing collateral (brochure, signage, business cards – custom illustrated)</li>
            <li>Stakeholder interviews / Surgeon Personas</li>
            <li>Full UX/UI Audit</li>
            <li>Surgeon/Patient portal interface design</li>
            <li>HIPAA – compliant messaging & forms</li>
            <li>Launch Rollout Strategy</li>
            <li>Staff onboarding assets</li>
          </ul>
          <h3>Pricing variables:</h3>
          <ol>
            <li>Digital assets (Web/App) – HIGHER $$</li>
            <li>Urgency/Timeline – fast turnaround – PREMIUM $$</li>
            <li>Marketing Materials (brochures, email templates, ads) – Add-ons…</li>
          </ol>
          <h3>Add-on Services:</h3>
          <ul>
            <li>Surgeon/patient acquisition campaigns</li>
            <li>SEO for health keywords</li>
            <li>Meeting interface redesign</li>
            <li>AI Chatbot integration</li>
            <li>Social media templates</li>
            <li>Custom photography/headshots/illustrated personas</li>
          </ul>
        </motion.section>
      </main>
    </>
  );
}
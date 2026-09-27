import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const contactItems = [
  { icon: Phone, value: '6006778916' },
  { icon: Phone, value: '9596791534' },
  { icon: Mail, value: 'bramnotrakhil@gmail.com' },
  { icon: MapPin, value: '028 charya\nkandhote\njammu' }
];

const education = [
  { degree: 'JAWAHAR NAVODAYA VIDALAYA', detail: 'High school qualification', year: '2021' },
  { degree: 'JAWAHAR NAVODAYA VIDALAYA', detail: 'Intermediate 2nd year', year: '2023' }
];

const qualities = [
  'Leadership, Modelling',
  'Adaptability, creativity',
  'Communication skills, problem solving',
  'Time management, teamwork, good listener'
];

const careerPoints = [
  'A highly organized and hard-working individual looking for a responsible position to gain practical experience.',
  'To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.',
  'To secure a challenging role in a professional environment, utilizing my educational background, strong work ethic, and willingness to take on new responsibilities to contribute to the success of the company.'
];

const profileImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80';

function App() {
  return (
    <div className="portfolio-shell">
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="portfolio-card"
      >
        <div className="portfolio-grid">
          <aside className="left-panel">
            <motion.div
              animate={{ y: [0, -9, 0], rotate: [0, -1.2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="portrait-wrap"
            >
              <div className="portrait-glow" />
              <img
                src={profileImage}
                alt="Akhil Kumar portrait"
                className="portrait-photo"
              />
            </motion.div>

            <section className="side-section profile-section">
              <h2>Profile</h2>
              <p>
                I consider my self a responsible and orderly person.
                <br />
                I am looking forward for my first work experience.
              </p>
            </section>

            <section className="side-section contact-section">
              <h2>Contact Me</h2>
              <div className="contact-list">
                {contactItems.map(({ icon: Icon, value }) => (
                  <div key={value} className="contact-item">
                    <div className="contact-icon">
                      <Icon size={16} />
                    </div>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="content-panel">
            <div className="identity-block">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                AKHIL
                <br />
                KUMAR
              </motion.h1>
              <p>10 july 2003</p>
            </div>

            <div className="details-block">
              <div className="details-stack">
                <Section title="Education" icon={<ArrowRight size={18} />}>
                  {education.map((item) => (
                    <div key={item.degree + item.year} className="info-block">
                      <p className="info-heading">{item.degree}</p>
                      <p className="info-detail">{item.detail}</p>
                      <p className="info-year">{item.year}</p>
                    </div>
                  ))}
                </Section>

                <Section title="Language" icon={<ArrowRight size={18} />} compact>
                  <p className="plain-text">HINDI, ENGLISH</p>
                </Section>

                <Section title="Qualities" icon={<ArrowRight size={18} />}>
                  <ul className="bullet-list">
                    {qualities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Career Objective" icon={<ArrowRight size={18} />}>
                  <div className="career-copy">
                    {careerPoints.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

type SectionProps = {
  title: string;
  icon: React.ReactNode;
  compact?: boolean;
  children: React.ReactNode;
};

function Section({ title, icon, children, compact = false }: SectionProps) {
  return (
    <section className="section-block">
      <div className="section-header">
        <div className="section-arrow">{icon}</div>
        <h3 className={compact ? 'compact-title' : 'section-title'}>{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default App;

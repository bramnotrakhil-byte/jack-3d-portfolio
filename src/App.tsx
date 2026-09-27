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
    <div className="min-h-screen bg-[#0b0d0d] px-3 py-6 sm:px-5 lg:px-8">
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-[1180px] overflow-hidden rounded-[10px] bg-[#f4f4f4] shadow-[0_25px_80px_rgba(0,0,0,0.38)]"
      >
        <div className="grid md:grid-cols-[0.95fr_1.15fr]">
          <aside className="bg-[#9bb3af] px-4 py-7 sm:px-6 lg:px-8">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-8 flex w-[220px] items-center justify-center overflow-hidden rounded-full border-[5px] border-white bg-white shadow-[0_15px_35px_rgba(0,0,0,0.18)] sm:w-[270px]"
            >
              <img
                src={profileImage}
                alt="Akhil Kumar portrait"
                className="h-[220px] w-[220px] object-cover sm:h-[270px] sm:w-[270px]"
              />
            </motion.div>

            <section className="mb-10">
              <h2 className="mb-3 text-[1.9rem] font-semibold uppercase tracking-[0.08em] text-[#213837]">Profile</h2>
              <p className="max-w-[18rem] text-[1.02rem] leading-[1.7] text-[#213837] opacity-90">
                I consider my self a responsible and orderly person.
                <br />
                I am looking forward for my first work experience.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[1.9rem] font-semibold uppercase tracking-[0.08em] text-[#213837]">Contact Me</h2>
              <div className="space-y-4 text-[#213837]">
                {contactItems.map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-[#213837]">
                      <Icon size={16} />
                    </div>
                    <span className="whitespace-pre-line text-[1rem] font-medium leading-[1.5] tracking-[0.02em]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="bg-[#f0ece8]">
            <div className="bg-[#e7d5c8] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="font-serif text-[2.9rem] uppercase leading-[0.9] tracking-[0.05em] text-[#223634] sm:text-[4.1rem]"
              >
                AKHIL
                <br />
                KUMAR
              </motion.h1>
              <p className="mt-3 text-[1.2rem] font-medium italic text-[#223634]">10 july 2003</p>
            </div>

            <div className="bg-[#f4f4f4] px-6 py-8 sm:px-8 lg:px-10">
              <div className="space-y-8">
                <Section title="Education" icon={<ArrowRight size={18} />}>
                  {education.map((item) => (
                    <div key={item.degree + item.year} className="mb-5 last:mb-0">
                      <p className="text-[1.05rem] font-semibold uppercase leading-tight tracking-[0.03em] text-[#223634]">
                        {item.degree}
                      </p>
                      <p className="mt-1 text-[1rem] leading-relaxed text-[#223634] opacity-90">{item.detail}</p>
                      <p className="mt-1 text-[1rem] text-[#223634] opacity-80">{item.year}</p>
                    </div>
                  ))}
                </Section>

                <Section title="Language" icon={<ArrowRight size={18} />} compact>
                  <p className="text-[1.05rem] font-semibold uppercase tracking-[0.06em] text-[#223634]">HINDI, ENGLISH</p>
                </Section>

                <Section title="Qualities" icon={<ArrowRight size={18} />}>
                  <ul className="space-y-1.5 text-[1rem] leading-[1.9] text-[#223634] opacity-95">
                    {qualities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Section>

                <Section title="Career Objective" icon={<ArrowRight size={18} />}>
                  <div className="space-y-3 text-[0.98rem] leading-[1.75] text-[#223634] opacity-95">
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
    <section>
      <div className="mb-4 flex items-center gap-3 text-[#223634]">
        <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
        <h3 className={`font-semibold uppercase tracking-[0.08em] text-[#223634] ${compact ? 'text-[1.5rem]' : 'text-[1.65rem]'}`}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

export default App;

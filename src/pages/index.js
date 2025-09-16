import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  const skills = [
    { name: 'Ethical Hacking', icon: '🔐' },
    { name: 'PenTest', icon: '🎯' },
    { name: 'CTF Challenges', icon: '🚩' },
    { name: 'Security Research', icon: '🔍' },
    { name: 'Vulnerability Assessment', icon: '🛡️' },
    { name: 'Digital Forensics', icon: '🔎' }
  ];

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            Welcome 
          </Heading>
          <p className={styles.heroSubtitle}>
            Aspiring cybersecurity professional passionate about ethical hacking and digital defense
          </p>
          
          <div className={styles.profileContent}>
            <p>
              I am dedicated to mastering the art of cybersecurity through continuous learning, 
              hands-on practice, and community engagement. My focus lies in ethical hacking, 
              vulnerability research, and building robust security solutions.
            </p>
            
            <p>You will find here:</p>
            <ul>
              <li>Detailed CTF write-ups and challenge solutions</li>
              <li>Security research findings and methodologies</li>
              <li>Useful tools, scripts, and educational resources</li>
              <li>Industry insights and learning experiences</li>
            </ul>
            
            <p>
              I believe in collaborative learning and knowledge sharing. Your feedback, 
              suggestions, are always welcome. I believe in learning from the community, 
              so feel free to share your thoughts.
            </p>
          </div>

          <div className={styles.socialLinks}>
            <h3 className={styles.socialLinksTitle}>Connect & Collaborate</h3>
            <p className={styles.socialLinksSubtitle}>
              Let's build a stronger security community together
            </p>
            <div className={styles.linkButtons}>
              <a 
                href="https://github.com/sentreysec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialButton}
              >
                <span>🐙</span>
                GitHub
              </a>
              <a 
                href="https://app.hackthebox.com/profile/1521317" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialButton}
              >
                <span>📦</span>
                HackTheBox
              </a>
            </div>
          </div>
          
          <p className={styles.thanks}>
            Thank you for visiting.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={styles.skillCard}
              style={{
                animationDelay: `${0.1 * index}s`
              }}
            >
              <span className={styles.skillIcon}>{skill.icon}</span>
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Professional cybersecurity portfolio showcasing ethical hacking expertise, CTF solutions, and security research">
      <HomepageHeader />
    </Layout>
  );
}

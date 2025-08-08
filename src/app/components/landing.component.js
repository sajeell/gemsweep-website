import React from 'react'
import styles from './landing.module.css'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'Bulk delete',
    description:
      'Select multiple Gemini chats at once and delete them with a single click.',
  },
  {
    title: 'One-click cleanup',
    description:
      'GemSweep adds intuitive checkboxes next to each conversation, making management effortless.',
  },
  {
    title: 'Privacy first',
    description:
      'Your chats never leave your browser—GemSweep works locally, ensuring your data stays yours.',
  },
  {
    title: 'Open-source',
    description:
      'The code is public on GitHub so you can audit or contribute improvements.',
  },
]

const steps = [
  'Install GemSweep from the Chrome Web Store.',
  'Open Gemini and tick the chats you want gone.',
  'Hit the ✖ Delete Selected button—done!',
]

const faqs = [
  {
    q: 'Does GemSweep need any permissions?',
    a: 'Only access to gemini.google.com so it can add the checkboxes. No data is transmitted elsewhere.',
  },
  {
    q: 'Will it work on other browsers?',
    a: 'GemSweep is built for Chrome but runs on any Chromium-based browser that supports the Chrome Web Store.',
  },
  {
    q: 'Is it free?',
    a: '100 % free and open-source under the MIT License.',
  },
]

export default function LandingComponent() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Take control of your Gemini inbox.</h1>
        <p className={styles.subtitle}>
          GemSweep lets you <strong>bulk-delete</strong> conversations in
          seconds so you can start fresh.
        </p>
        <div className={styles.ctaGroup}>
          <Link
            className={styles.ctaPrimary}
            href='https://chromewebstore.google.com/detail/gemsweep-–-bulk-delete-ge/emoifgdcfhdbcnpalaemhehkfdegghoj'
            target='_blank'
            rel='noopener noreferrer'
          >
            Add to Chrome
          </Link>
          <Link
            className={styles.ctaSecondary}
            href='https://github.com/sajeell/gemsweep'
            target='_blank'
            rel='noopener noreferrer'
          >
            View source ↗
          </Link>
        </div>
      </section>

      <section className={styles.demoSection}>
        <img src='/assets/screenshot.png' alt='GemSweep demo' className={styles.demoImage} />
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why GemSweep?</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.title} className={styles.card}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>3 easy steps</h2>
        <ol className={styles.stepsList}>
          {steps.map((s, i) => (
            <li key={i} className={styles.stepItem}>
              <span className={styles.stepNum}>{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqGrid}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          Built with ❤ by <a href='https://sajeell.com.com'>Sajeel</a>. ©
          {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}

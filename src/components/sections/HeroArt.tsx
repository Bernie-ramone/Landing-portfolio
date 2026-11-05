import portrait from '../../assets/images/portrait.jpg'
import { SparkleIcon } from '../ui/icons'
import { Starburst, WireGlobe, WireMountains } from '../ui/decor'
import styles from './HeroArt.module.css'

export function HeroArt() {
  return (
    <div className={styles.art}>
      <svg className={styles.orbit} viewBox="0 0 100 92" fill="none" aria-hidden="true">
        <g transform="rotate(-18 36 34)">
          <ellipse cx="36" cy="34" rx="34" ry="16" stroke="currentColor" strokeWidth={0.3} />
          <circle cx="30" cy="18.2" r="1.1" fill="currentColor" />
        </g>
      </svg>

      <div className={styles.olive} aria-hidden="true">
        <WireGlobe className={styles.globe} />
        <SparkleIcon className={`${styles.spark} ${styles.sparkA}`} />
        <SparkleIcon className={`${styles.spark} ${styles.sparkB}`} />
      </div>

      <div className={styles.circle}>
        <img src={portrait} alt="Portrait of Rhea Monroe" className={styles.portrait} />
      </div>

      <div className={styles.monogram} aria-hidden="true">
        <span>R</span>
        <span>M</span>
      </div>

      <div className={styles.night} aria-hidden="true">
        <span className={styles.sun} />
        <WireMountains className={styles.mountains} />
      </div>

      <p className={styles.tagline}>
        Designing experiences that inspire &amp; connect.
        <SparkleIcon className={styles.taglineSpark} />
      </p>

      <Starburst className={styles.burst} />
      <SparkleIcon className={`${styles.spark} ${styles.sparkC}`} />
      <SparkleIcon className={`${styles.spark} ${styles.sparkD}`} />
    </div>
  )
}
import Image from 'next/image'

import styles from './book.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Book({ name, dateFinished }) {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookCoverContainer}>
        <Image
          src={`/images/books/${name}.jpg`}
          alt={name}
          width={145}
          height={200}
        />
      </div>

      <div>
        <h3 className={`${utilStyles.headingMd} ${styles.bookTitle}`}>{name}</h3>
        <small>Date finished: {dateFinished}</small>
      </div>
    </div>
  )
}
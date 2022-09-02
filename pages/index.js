import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Renato Software</title>
        <meta name="description" content="Renato's personal blog where I write some articles about something that I learned" />
      </Head>

      {/* Keep the existing code here */}
      <section className={utilStyles.headingMd}>
        <p>I'm a senior software engineer with 19+ years of experience developing software. My <a href="https://www.linkedin.com/in/rkaraujo/" target="_blank" rel="nofollow noopener noreferrer">LinkedIn</a>.</p>
        <div>
          <span className={utilStyles.centered}>[<Link href="/books">Books</Link>]</span>
        </div>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
import Head from 'next/head'
import Book from '../components/book'
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

export default function Books() {
  return (
    <Layout>
      <Head>
        <title>Books - Renato Software</title>
        <meta name="description" content="Renato's personal blog. These are some books that I read." />
      </Head>

      {/* Keep the existing code here */}
      <section>
        <h2 className={utilStyles.headingLg}>Books</h2>
        <p>Books I read:</p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Book name="A Philosophy of Software Design" dateFinished="Aug 2022" />
          </li>
          <li className={utilStyles.listItem}>
            <Book name="Microservices Patterns" dateFinished="Don't remember" />
          </li>
          <li className={utilStyles.listItem}>
            <Book name="Designing Data-Intensive Applications" dateFinished="Don't remember" />
          </li>
          <li className={utilStyles.listItem}>
            <Book name="Clean Code" dateFinished="Don't remember" />
          </li>
          <li className={utilStyles.listItem}>
            <Book name="Effective Java" dateFinished="Don't remember" />
          </li>
        </ul>
      </section>

    </Layout>
  )
}

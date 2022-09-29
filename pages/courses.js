import Head from 'next/head'
import Course from '../components/course'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Courses() {
  return (
    <Layout>
      <Head>
        <title>Courses - Renato Software</title>
        <meta name="description" content="Renato's personal blog. These are some courses that I watched." />
      </Head>

      <section>
        <h2 className={utilStyles.headingLg}>Courses</h2>
        <p>Courses I watched:</p>
        <ul>
          <li>
            <Course
              name="Vim Masterclass"
              url="https://www.udemy.com/course/vim-commands-cheat-sheet/"
              platform="Udemy"
              dateFinished="Sep 2022" />
          </li>
          <li>
            <Course
              name="Learn Rust by Building Real Applications"
              url="https://www.udemy.com/course/rust-fundamentals/"
              platform="Udemy"
              dateFinished="Sep 2022" />
          </li>
          <li>
            <Course
              name="Data Warehouse Fundamentals for Beginners"
              url="https://www.udemy.com/course/data-warehouse-fundamentals-for-beginners/"
              platform="Udemy"
              dateFinished="Aug 2022" />
          </li>
          <li>
            <Course
              name="Vim Tutorial for Beginners"
              url="https://www.youtube.com/watch?v=RZ4p-saaQkc&t=965s"
              platform="freeCodeCamp YouTube"
              dateFinished="Aug 2022" />
          </li>
          <li>
            <Course
              name="Modern JavaScript From The Beginning"
              url="https://www.udemy.com/course/modern-javascript-from-the-beginning/"
              platform="Udemy"
              dateFinished="Apr 2022" />
          </li>
          <li>
            <Course
              name="Typescript: The Complete Developer's Guide"
              url="https://www.udemy.com/course/typescript-the-complete-developers-guide/"
              platform="Udemy"
              dateFinished="Aug 2020" />
          </li>
          <li>
            <Course
              name="The Complete Node.js Developer Course"
              url="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
              platform="Udemy"
              dateFinished="Jun 2020" />
          </li>
          <li>
            <Course
              name="Spring Professional Certification Exam Tutorial"
              url="https://www.udemy.com/course/spring-certified-tutorial/"
              platform="Udemy"
              dateFinished="Feb 2020" />
          </li>
        </ul>
      </section>

    </Layout>
  )
}

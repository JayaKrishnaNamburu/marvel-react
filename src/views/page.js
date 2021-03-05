import React from 'react'

import Helmet from 'react-helmet'

import Header from '../components/header'
import MovieCard from '../components/movie-card'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Marvel</title>
        <meta property="og:title" content="Marvel" />
      </Helmet>
      <Header></Header>
      <div className={styles.container1}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  )
}

export default Page

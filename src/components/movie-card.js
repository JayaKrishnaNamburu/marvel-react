import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './movie-card.module.css'

const MovieCard = (props) => {
  return (
    <div className={styles.container}>
      <img
        alt="Movie Image"
        src={props.src}
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <div className={styles.container1}>
        <h2 className={projectStyles.thqHeading2}>{props.movetitle}</h2>
        <p className={styles.text1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
          <br />
        </p>
      </div>
    </div>
  )
}

MovieCard.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  movetitle: 'Move Title\xA0',
}

MovieCard.propTypes = {
  src: PropTypes.string,
  movetitle: PropTypes.string,
}

export default MovieCard

// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Articles/Article.css'
// == Images:
import republic_jpg from '../img/republic.jpg'
import republic_webp from '../img/republic.webp'
import chelsea_jpg from '../img/chelsea.jpg'
import chelsea_webp from '../img/chelsea.webp'
import helmda_jpg from '../img/helmda.jpg'
import helmda_webp from '../img/helmda.jpg'

const Portfolio = () => {
  return (
    <ul className='portfolio__inner'>
      <li className='portfolio__items'>
        <a
          className='portfolio__link'
          href='https://saburchik-helmda.herokuapp.com/'
          rel='noreferrer'
          target='_blank'
        >
          <picture className='images__inner'>
            <source srcSet={helmda_webp} type='image/webp' />
            <img src={helmda_jpg} alt='Изоб-ние проекта' />
          </picture>
          <p className='portfolio__title'>— Web-application | HelmDA</p>
          <ul className='portfolio__stack-item'>
            <li className='portfolio__suptitle'>
              <p>
                <FormattedMessage id='stack' />:
              </p>
            </li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>React.js</li>
            <li>Webpack</li>
          </ul>
        </a>
      </li>
      <li className='portfolio__items'>
        <a
          className='portfolio__link'
          href='https://saburchik.github.io/landing-page-chelsea'
          rel='noreferrer'
          target='_blank'
        >
          <picture className='images__inner'>
            <source srcSet={chelsea_webp} type='image/webp' />
            <img src={chelsea_jpg} alt='Изоб-ние проекта' />
          </picture>
          <p className='portfolio__title'>— Landing-Page FC Chelsea</p>
          <ul className='portfolio__stack-item'>
            <li className='portfolio__suptitle'>
              <p>
                <FormattedMessage id='stack' />:
              </p>
            </li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>JS</li>
            <li>Gulp</li>
            <li>AnyChart.js</li>
          </ul>
        </a>
      </li>
      <li className='portfolio__items'>
        <a
          className='portfolio__link'
          href='https://republic-shop.herokuapp.com'
          rel='noreferrer'
          target='_blank'
        >
          <picture className='images__inner'>
            <source srcSet={republic_webp} type='image/webp' />
            <img src={republic_jpg} alt='Изоб-ние проекта' />
          </picture>
          <p className='portfolio__title'>— Shopping Market | Republic</p>
          <ul className='portfolio__stack-item'>
            <li className='portfolio__suptitle'>
              <p>
                <FormattedMessage id='stack' />:
              </p>
            </li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>React.js</li>
            <li>Redux.js</li>
          </ul>
        </a>
      </li>
    </ul>
  )
}

export default Portfolio

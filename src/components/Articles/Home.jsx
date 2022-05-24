// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'

const Home = () => {
  return (
    <section className='tabs__content'>
      <h2 className='title'>
        — <FormattedMessage id='about' />
      </h2>
      <div>
        <p className='description'>
          <FormattedMessage id='description-first' />
        </p>
        <p className='description'>
          <FormattedMessage id='description-second' />
        </p>
        <p className='description'>
          <FormattedMessage id='description-ps' />
        </p>
        <article>
          <h3 className='suptitle'>
            <FormattedMessage id='qualities' />
          </h3>
          <p className='description'>
            <FormattedMessage id='description-qualities' />
          </p>
        </article>
      </div>
    </section>
  )
}

export default Home

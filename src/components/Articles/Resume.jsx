// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'

const Home = () => {
  return (
    <section className='tabs__content'>
      <h2 className='title'>
        — <FormattedMessage id='resume' />:
      </h2>
      <article style={{ marginBottom: '2rem' }}>
        <h3 className='suptitle'>
          <FormattedMessage id='skills' />:
        </h3>
        <ul className='list__skills'>
          <li>
            <FormattedMessage id='li-skill-first' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-second' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-third' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-four' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-five' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-six' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-seven' />;
          </li>
          <li>
            <FormattedMessage id='li-skill-eight' />.
          </li>
        </ul>
      </article>
      <article>
        <h3 className='suptitle'>
          <FormattedMessage id='interest' />:
        </h3>
        <ul className='list__interest'>
          <li>
            <svg viewBox='0 0 448 512'>
              <path d='M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2zM144 168a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8zm236.8 280H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z'></path>
            </svg>
            <p>
              <FormattedMessage id='interest-left' />
            </p>
          </li>
          <li>
            <svg viewBox='0 0 576 512'>
              <path d='M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z'></path>
            </svg>
            <p>
              <FormattedMessage id='interest-middle' />
            </p>
          </li>
          <li>
            <svg viewBox='0 0 576 512'>
              <path d='M571.31 251.31l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L480 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L434.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L480 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63L525.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63zM552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8-58.41-106.1A32.008 32.008 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24z'></path>
            </svg>
            <p>
              <FormattedMessage id='interest-right' />
            </p>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Home

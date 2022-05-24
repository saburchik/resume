// == Base:
import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { Context } from '../LangProvider'
// == Styles:
import './Profile.css'
// == Images:
import me_webp from './../../img/me.webp'
import me from './../../img/me.jpg'

const Profile = () => {
  const context = useContext(Context)

  return (
    <aside className='profile'>
      <div className='profile__inner'>
        <section className='profile__header'>
          <div>
            <h1 className='profile__name'>
              <FormattedMessage id='my-name' />
            </h1>
            <p className='profile__position' style={{ marginBottom: '1rem' }}>
              <FormattedMessage id='my-position' />
            </p>
          </div>
          <div className='profile__lang'>
            <svg viewBox='0 0 496 512'>
              <path d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'></path>
            </svg>
            <select
              className='profile__select'
              value={context.locale}
              onChange={context.setLang}
            >
              <option value='ru'>RU</option>
              <option value='en'>EN</option>
            </select>
          </div>
        </section>
        <picture>
          <source srcSet={me_webp} type='image/webp' />
          <img className='profile__photo' src={me} alt='myphoto' />
        </picture>
        <ul className='profile__info'>
          <li className='profile__item'>
            <FormattedMessage id='name' />
            <span>
              <FormattedMessage id='my-name' />
            </span>
          </li>
          <li className='profile__item'>
            <FormattedMessage id='bithday' />
            <span>
              <FormattedMessage id='my-bithday' />
            </span>
          </li>
          <li className='profile__item'>
            <FormattedMessage id='age' />
            <span>
              <FormattedMessage id='my-age' />
            </span>
          </li>
          <li className='profile__item'>
            E-mail:
            <a className='profile__email' href='mailto:the.saburchik@gmail.com'>
              the.saburchik@gmail.com
            </a>
          </li>
          <li className='profile__item'>
            <FormattedMessage id='location' />
            <span>
              <FormattedMessage id='my-location' />
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Profile

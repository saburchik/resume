// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'

const Home = () => {
    return (
        <article className="tabs__content">
            <h2 className="title">
                <FormattedMessage id="aboutMe" />
            </h2>
            <p className="description">
                <FormattedMessage id="description-first" />
                <br />
                <br />
                <FormattedMessage id="description-second" />
                <br />
                <br />
                <FormattedMessage id="description-third" />
            </p>
        </article>
    )
}

export default Home
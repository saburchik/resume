// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'

const Home = () => {
    return (
        <section className="tabs__content">
            <h2 className="title">
                — <FormattedMessage id="aboutMe" />
            </h2>
            <div >
                <p className="description" style={{ textIndent: '1rem' }}>
                    <FormattedMessage id="description-first" />
                </p>
                <p className="description" style={{ textIndent: '1rem' }}>
                    <FormattedMessage id="description-second" />
                </p>
                <article>
                    <h3 className="suptitle"><FormattedMessage id="qualities" /></h3>
                    <p style={{ textIndent: '1rem' }}>
                        <FormattedMessage id="description-qualities" />
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Home
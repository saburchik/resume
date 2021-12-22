// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'
// == Component:
import DrawImages from '../DrawImages'

const Portfolio = () => {
    return (
        <div className="tabs__content">
            <h2 className="title">
                — <FormattedMessage id="portfolio" />:
            </h2>
            <div className="portfolio">
                <DrawImages />
            </div>
        </div>
    )
}

export default Portfolio
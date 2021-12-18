// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Article.css'

const Portfolio = (props) => {
    return (
        <div className="tabs__content">
            <h2 className="title">
                — <FormattedMessage id="portfolio" />:
            </h2>
            <div className="portfolio">
                <ul className="portfolio__inner">
                    <li className="portfolio__items">
                        <a className="portfolio__link" href="https://saburchik.github.io/Chelsea-release/" rel="noreferrer" target="_blank">
                            {props.chelseaIMG()}
                            <p className="portfolio__title">— Landing-Page FC Chelsea</p>
                        </a>
                        <h4 className="portfolio__suptitle">
                            <FormattedMessage id="stack" />:
                        </h4>
                        <ul className="portfolio__stack-item">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>JS Vanile</li>
                            <li>Gulp</li>
                            <li>AnyChart.js</li>
                        </ul>
                    </li>
                    <li className="portfolio__items">
                        <a className="portfolio__link" href="https://republic-three.herokuapp.com/" rel="noreferrer" target="_blank">
                            {props.republicIMG()}
                            <p className="portfolio__title">— Shopping Market | Republic</p>
                        </a>
                        <h4 className="portfolio__suptitle">
                            <FormattedMessage id="stack" />:
                        </h4>
                        <ul className="portfolio__stack-item">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>React.js</li>
                            <li>Redux.js</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
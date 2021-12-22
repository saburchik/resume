// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Articles/Article.css'
// == Images:
import republicImgJPG from '../img/republic.jpg'
import republicImgWEBp from '../img/republic.webp'
import chelseaImgJPG from '../img/chelsea.jpg'
import chelseaImgWEBp from '../img/chelsea.webp'

const Portfolio = () => {
    return (
        <ul className="portfolio__inner">
            <li className="portfolio__items">
                <a className="portfolio__link" href="https://saburchik.github.io/Chelsea" rel="noreferrer" target="_blank">
                    <picture className="images__inner">
                        <source srcSet={chelseaImgWEBp} type="image/webp" />
                        <img src={chelseaImgJPG} alt="Изоб-ние проекта" />
                    </picture>
                    <p className="portfolio__title">— Landing-Page FC Chelsea</p>
                    <ul className="portfolio__stack-item">
                        <h4 className="portfolio__suptitle">
                            <FormattedMessage id="stack" />:
                        </h4>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JS</li>
                        <li>Gulp</li>
                        <li>AnyChart.js</li>
                    </ul>
                </a>
            </li>
            <li className="portfolio__items">
                <a className="portfolio__link" href="https://republic-three.herokuapp.com/" rel="noreferrer" target="_blank">
                    <picture className="images__inner">
                        <source srcSet={republicImgWEBp} type="image/webp" />
                        <img src={republicImgJPG} alt="Изоб-ние проекта" />
                    </picture>
                    <p className="portfolio__title">— Shopping Market | Republic</p>
                    <ul className="portfolio__stack-item" >
                        <h4 className="portfolio__suptitle">
                            <FormattedMessage id="stack" />:
                        </h4>
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
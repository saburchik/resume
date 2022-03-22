// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import s from '../styles/Image.module.css'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <ul className="portfolio__inner">
            <li className="portfolio__items">
                <a className="portfolio__link" href="https://helmda-update.herokuapp.com" rel="noreferrer" target="_blank">
                    <div className="images__inner">
                        <Image className={s.myproject} src="/img/helmda.jpg" width={288} height={200} alt="Изоб-ние проекта" />
                    </div>
                    <p className="portfolio__title">— Web-application | HelmDA</p>
                    <ul className="portfolio__stack-item" >
                        <li className="portfolio__suptitle">
                            <p><FormattedMessage id="stack" />:</p>
                        </li>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>React.js</li>
                        <li>Webpack</li>
                    </ul>
                </a>
            </li>
            <li className="portfolio__items">
                <a className="portfolio__link" href="https://saburchik.github.io/Chelsea" rel="noreferrer" target="_blank">
                    <div className="images__inner">
                        <Image className={s.myproject} src="/img/chelsea.jpg" width={288} height={200} alt="Изоб-ние проекта" />
                    </div>
                    <p className="portfolio__title">— Landing-Page FC Chelsea</p>
                    <ul className="portfolio__stack-item">
                        <li className="portfolio__suptitle">
                            <p><FormattedMessage id="stack" />:</p>
                        </li>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JS</li>
                        <li>Gulp</li>
                        <li>AnyChart.js</li>
                    </ul>
                </a>
            </li>
            <li className="portfolio__items">
                <a className="portfolio__link" href="https://republic-shop.herokuapp.com" rel="noreferrer" target="_blank">
                    <div className="images__inner">
                        <Image className={s.myproject} src="/img/republic.jpg" width={288} height={200} alt="Изоб-ние проекта" />
                    </div>
                    <p className="portfolio__title">— Shopping Market | Republic</p>
                    <ul className="portfolio__stack-item" >
                        <li className="portfolio__suptitle">
                            <p><FormattedMessage id="stack" />:</p>
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
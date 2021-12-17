import '../App.css'

// Images
import republicImgJPG from '../img/republic.jpg'
import republicImgWEBp from '../img/republic.webp'
import chelseaImgJPG from '../img/chelsea.jpg'
import chelseaImgWEBp from '../img/chelsea.webp'

const Projects = (props) => {
    return (
        <ol className="portfolio__inner" type="I">
            <li className="portfolio__items">
                <a className="portfolio__item" href="https://saburchik.github.io/Chelsea-release/" rel="noreferrer"
                    target="_blank">
                    <picture>
                        <source srcSet={chelseaImgWEBp} type="image/webp" />
                        <img className="portfolio__img" src={chelseaImgJPG} alt="Изоб-ние проекта" />
                    </picture>
                    <p className="title portfolio__title">— Landing-Page FC Chelsea</p>
                </a>
                <h4 className="title portfolio__title_stack">Используемый стек:</h4>
                <ul className="portfolio__stack">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>JS Vanile</li>
                    <li>Gulp</li>
                    <li>AnyChart.js</li>
                </ul>
            </li>
            <li className="portfolio__items">
                <a className="portfolio__item" href="https://republic-three.herokuapp.com/" rel="noreferrer" target="_blank">
                    <picture>
                        <source srcSet={republicImgWEBp} type="image/webp" />
                        <img className="portfolio__img" src={republicImgJPG} alt="Изоб-ние проекта" />
                    </picture>
                    <p className="title portfolio__title">— Shopping Market | Republic</p>
                </a>
                <h4 className="title portfolio__title_stack">Используемый стек:</h4>
                <ul className="portfolio__stack">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>React.js</li>
                    <li>Redux.js</li>
                </ul>
            </li>
        </ol>
    )
}

export default Projects
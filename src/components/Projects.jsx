import '../App.css'

// Images
import republicImgJPG from '../img/republic.jpg'
import republicImgWEBp from '../img/republic.webp'
import chelseaImgJPG from '../img/chelsea.jpg'
import chelseaImgWEBp from '../img/chelsea.webp'


const Projects = (props) => {
    return (
        <div className="portfolio__inner">
            <a className="portfolio__item" href="https://saburchik.github.io/Chelsea-release/" rel="noreferrer"
                target="_blank">
                <picture>
                    <source srcSet={chelseaImgWEBp} type="image/webp" />
                    <img className="portfolio__img" src={chelseaImgJPG} alt="Изоб-ние проекта" />
                </picture>
                <p className="title portfolio__title">— Landing-Page FC Chelsea</p>
            </a>
            <a className="portfolio__item" href="/" rel="noreferrer" target="_blank">
                <picture>
                    <source srcSet={republicImgWEBp} type="image/webp" />
                    <img className="portfolio__img" src={republicImgJPG} alt="Изоб-ние проекта" />
                </picture>
                <p className="title portfolio__title">— Shopping Market | Republic</p>
            </a>
        </div>
    )
}

export default Projects
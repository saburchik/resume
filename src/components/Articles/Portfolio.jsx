import { FormattedMessage } from 'react-intl'
import '../../App.css'
import Projects from '../Projects'



const Portfolio = (props) => {


    return (
        <div className="tabs__content">
            <h2 className="title">
                — <FormattedMessage id="portfolio" />:
            </h2>
            <div className="portfolio">
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio
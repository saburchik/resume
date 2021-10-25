import React from 'react'
import { FormattedMessage } from 'react-intl'
import '../../App.css'
import Projects from '../Projects'



const Home = () => {
    return (
        <article className="tabs__content">
            <div style={{ display: "none" }}><Projects /></div> {/* to upload images to the browser */}
            <h2 className="title">
                <FormattedMessage id="aboutMe" />
            </h2>
            <p className="suptitle">
                Started earnest brother believe an exposed so. Me he believing daughters if
                forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each
                sell.
                Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay
                cold
                rose deal park. One same they four did ask busy. Reserved opinions fat him nay position.
                Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.
                <br />
                <br />
                Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an
                to.
                Add short water court fat. Her bachelor honoured perceive securing but desirous ham
                required.
                Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and
                yourself.
                Besides ye country on observe. She continue appetite endeavor she judgment interest the met.
                For
                she surrounded motionless fat resolution may.
            </p>
        </article>
    )
}

export default Home
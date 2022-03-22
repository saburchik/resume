// == Base:
import { FormattedMessage } from 'react-intl'
// == Component:
import DrawImages from '../components/DrawImages'
import MainContainer from '../components/MainContainer'
import Head from 'next/head'

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Saburov's portfolio</title>
            </Head>
            <MainContainer>
                <section className="tabs__content">
                    <h2 className="title">
                        — <FormattedMessage id="portfolio" />:
                    </h2>
                    <div className="portfolio">
                        <DrawImages />
                    </div>
                </section>
            </MainContainer>
        </>
    )
}

export default Portfolio
// == Pages:
import MainContainer from '../components/MainContainer'
import { FormattedMessage } from 'react-intl'
import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <title>Saburov</title>
            </Head>
            <MainContainer>
                <section className="tabs__content">
                    <h2 className="title">
                        — <FormattedMessage id="about" />
                    </h2>
                    <div >
                        <p className="description">
                            <FormattedMessage id="description-first" />
                        </p>
                        <p className="description">
                            <FormattedMessage id="description-second" />
                        </p>
                        <article>
                            <h3 className="suptitle">
                                <FormattedMessage id="qualities" />
                            </h3>
                            <p className="description">
                                <FormattedMessage id="description-qualities" />
                            </p>
                        </article>
                    </div>
                </section>
            </MainContainer>
        </>
    )
}

export default Home
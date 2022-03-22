// == Base:
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
// == Components:
import Profile from './Profile'
import Header from './Header'
import DrawImages from './DrawImages'
// == Languages:
import Russian from '../public/languages/russian.json'
import English from '../public/languages/english.json'

export const Context = React.createContext()
const local = typeof window !== 'undefined' ? navigator.language : null
let lang
local === "en" ? lang = English : lang = Russian

const MainContainer = ({ children }) => {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang)


    const setLang = (e) => {
        const newLocale = e.target.value
        setLocale(newLocale)
        newLocale === "en" ? setMessages(English) : setMessages(Russian)
    }

    return (
        <>
            <Context.Provider value={{ locale, setLang }}>
                <IntlProvider messages={messages} locale={locale}>
                    <div className="wrapper">
                        <div className="container" id="tabs">
                            <Profile />
                            <section className="information">
                                <Header />
                                <main className="main">
                                    <div style={{ opacity: '0', position: 'absolute', top: '-5000px' }}>
                                        <DrawImages />
                                    </div>
                                    <div>
                                        {children}
                                    </div>
                                </main>
                            </section>
                        </div>
                    </div>
                </IntlProvider>
            </Context.Provider>
        </>
    )
}

export default MainContainer
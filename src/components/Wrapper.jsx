import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'

// Languages
import Russian from '../languages/russian.json'
import English from '../languages/english.json'

export const Context = React.createContext()

const local = navigator.language
let lang
local === "en" ? lang = English : lang = Russian

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang)

    const setLang = (e) => {
        const newLocale = e.target.value
        setLocale(newLocale)
        newLocale === "en" ? setMessages(English) : setMessages(Russian)
    }

    return (
        <Context.Provider value={{ locale, setLang }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper
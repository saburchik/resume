// == Base:
import React, { useState, useEffect } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
// == Styles:
import '../styles/App.css'
import '../styles/Article.css'
import '../styles/Header.css'
import '../styles/Profile.css'

export default function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
        return setLoading(true)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="loadingpage">
                        <PropagateLoader color={'#fff'} loading={loading} size={15} />
                    </div>
                    : <Component {...pageProps} />
            }
        </>
    )
}
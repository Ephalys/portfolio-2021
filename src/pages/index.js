import React, {useState, useRef, useEffect} from 'react';
import Layout from "components/layout/layout";
import Helmet from "react-helmet";
import Hero from "components/hero/hero";
import Story from "components/story/story";
import SingleImage from "components/singleImage/singleImage";
import TextCentered from "components/textCentered/textCentered";

const IndexPage = () => {

    const [theme, setTheme] = useState('dark');
    const [isArrowVisible, setIsArrowVisible] = useState(true);
    const heroRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    })

    const onScroll =  () => {
        const heroPos = heroRef.current.getBoundingClientRect().bottom;
        heroPos < 300 ? setTheme('light') : setTheme('dark');
        window.innerHeight + window.scrollY >= document.body.offsetHeight ? setIsArrowVisible(false) : setIsArrowVisible(true);
    }

    return (
        <>
            <Helmet>
                <title>Léon Tran-Van — Front-end developer</title>
                <link rel="canonical" href="http://nvnrtnl.vercel.app" />
                <meta name="description" content="The work of front-end developer Léon Tran-Van." />
            </Helmet>
            <Layout theme={theme} isArrowVisible={isArrowVisible}>
                <Hero innerRef={heroRef}/>
                <Story/>
                <SingleImage alt="portrait" filename="portrait.png"/>
                <TextCentered/>
            </Layout>
        </>
    )
}

export default IndexPage

import React, {useState, useRef, useEffect} from 'react';
import Helmet from "react-helmet";
import Layout from "components/layout/layout";
import Hero from "components/hero/hero";
import Story from "components/story/story";
import SingleImage from "components/singleImage/singleImage";
import TextCentered from "components/textCentered/textCentered";
import {themes} from "styles/themes";
import {ThemeProvider} from "styled-components";

const IndexPage = () => {
    const [theme, setTheme] = useState('dark');
    const heroRef = useRef();
    const titleStory = 'My story';
    const textStory = `I began my career with an internship as fullstack developer at Classicat's. My objectives was to create a new site from scratch with an administration interface and increase traffic using good SEO practices.
    
Then, I was full-stack developer at Subskill and for them I have worked on projects involving several fields, from luxury fashion brands to banks, from public services to health insurance, to major retail distributors and ecommerce.`;
    const titleWork = 'Workflow';
    const textWork = <>I'm always taking advantage of new technologies and current design trends in order to deliver the perfect product to my clients. That's why <a href="https://jamstack.wtf" target="_blank" rel="noreferrer">JAMstack</a> and <a href="https://figma.com" target="_blank" rel="noreferrer">Figma</a> take an important part in my workflow.</>;

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })

    const onScroll =  () => {
        const heroPos = heroRef.current.getBoundingClientRect().bottom;
        if (theme === 'rainbow') return
        (heroPos < 300 && theme !== 'rainbow') ? setTheme('light') : setTheme('dark');
    }

    return (
        <>
            <Helmet>
                <title>Léon Tran-Van — Front-end developer</title>
                <link rel="canonical" href="http://nvnrtnl.vercel.app" />
                <meta name="description" content="The work of front-end developer Léon Tran-Van." />
            </Helmet>
            <ThemeProvider theme={themes[theme]}>
                <Layout isArrowVisible={false} setTheme={setTheme}>
                    <Hero innerRef={heroRef}/>
                    <Story title={titleStory} text={textStory}/>
                    <SingleImage alt="portrait" filename="portrait.png"/>
                    <Story title={titleWork} text={textWork}/>
                    <TextCentered backgroundColor={themes[theme].secondaryBackground}/>
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default IndexPage

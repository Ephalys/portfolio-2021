import React, {useState, useRef, useEffect} from 'react';
import Layout from "components/layout/layout";
import Helmet from "react-helmet";
import Hero from "components/hero/hero";
import Story from "components/story/story";
import SingleImage from "components/singleImage/singleImage";
import TextCentered from "components/textCentered/textCentered";
import colors from "styles/colors"

const IndexPage = () => {

    const [theme, setTheme] = useState('dark');
    const [isArrowVisible, setIsArrowVisible] = useState(true);
    const heroRef = useRef();
    const titleStory = 'My story';
    const textStory = `I began my career with an internship as fullstack developer at Classicat's. My objectives was to create a new site from scratch with an administration interface and increase traffic using good SEO practices.
    
Then, I was full-stack developer at Subskill and for them I have worked on projects involving several fields, from luxury fashion brands to banks, from public services to health insurance, to major retail distributors and ecommerce.`;
    const titleWork = 'Workflow';
    const textWork = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })

    const onScroll =  () => {
        const heroPos = heroRef.current.getBoundingClientRect().bottom;
        heroPos < 300 ? setTheme('light') : setTheme('dark');
        window.innerHeight + window.scrollY >= document.body.offsetHeight && setIsArrowVisible(false);
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
                <Story title={titleStory} text={textStory}/>
                <SingleImage alt="portrait" filename="portrait.png"/>
                <TextCentered/>
                <Story title={titleWork} text={textWork} backgroundColor={colors.extremelightgrey}/>
            </Layout>
        </>
    )
}

export default IndexPage

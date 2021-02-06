import * as React from "react"
import Layout from "components/layout/layout";
import Helmet from "react-helmet";

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <title>Léon Tran-Van — Front-end developer</title>
                <link rel="canonical" href="http://nvnrtnl.vercel.app" />
                <meta name="description" content="The work of front-end developer Léon Tran-Van." />
            </Helmet>
            <Layout/>
        </>
    )
}

export default IndexPage

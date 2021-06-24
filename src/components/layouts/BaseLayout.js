import React from "react";
import Header from './Header';
import Footer from './footer'

const BaseLayout = (props) => {
    return <>
    <Header />
    <br />
    {props.children}

    <br />

    <Footer />

    </>
};

export default BaseLayout;
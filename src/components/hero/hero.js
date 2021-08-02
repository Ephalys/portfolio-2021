import React from 'react';
import {HeroContainer, MainTitle, SecondaryTitle} from "components/hero/heroStyles";

const Hero = ({innerRef}) => {
    return (
        <HeroContainer className="container" ref={innerRef}>
            <MainTitle>
                Léon Tran-Van.<br/>
                A web developer based in Paris.
            </MainTitle>
            <SecondaryTitle>
                Currently working at Hager, a leading supplier of solutions and services for electrical installations.
            </SecondaryTitle>
        </HeroContainer>
    );
};

export default Hero;

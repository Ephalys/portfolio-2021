import React from 'react';
import {MeContainer} from "components/textCentered/textCenteredStyles";

const TextCentered = (props) => {
    return (
        <MeContainer className="container" backgroundColor={props.backgroundColor}>
            In my spare time, I enjoy playing some video games, go play billiards, going to the gym and do motorcycle rides with friends.
        </MeContainer>
    );
};

export default TextCentered;

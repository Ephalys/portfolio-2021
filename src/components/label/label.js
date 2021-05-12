import React from 'react';
import {LabelTitle} from "components/label/labelStyles";

const Label = (props) => {
    return (
        <LabelTitle backgroundColor={props.backgroundColor} theme={props.theme}>
            {props.children}
        </LabelTitle>
    );
};

export default Label;

import React from 'react';
import {LabelTitle} from "components/label/labelStyles";

const Label = (props) => {
    return (
        <LabelTitle>
            {props.children}
        </LabelTitle>
    );
};

export default Label;

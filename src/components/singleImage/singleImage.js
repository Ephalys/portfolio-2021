import React from 'react';
import {SingleImageContainer} from "components/singleImage/singleImageStyles";
import Image from "components/image/image";

const SingleImage = (props) => {
    return (
        <SingleImageContainer>
            <Image alt={props.alt} filename={props.filename}/>
        </SingleImageContainer>
    );
};

export default SingleImage;

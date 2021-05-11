import React from 'react';
import {ScrollIconContainer} from "components/scrollIcon/scrollIconStyles";
import Icon from "components/icon/icon";
import ArrowDown from "../../icons/icon-arrow-down.svg";

const ScrollIcon = () => {
    return (
        <ScrollIconContainer>
            <Icon icon={ArrowDown}/>
        </ScrollIconContainer>
    );
};

export default ScrollIcon;

import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import {StyledIcon} from "components/icon/iconStyles";

const Icon = (props) => {
    const themeContext = useContext(ThemeContext);

    return (
        <StyledIcon>
            <props.icon fill={themeContext.title} width={props.width} height={props.height}/>
        </StyledIcon>
    );
};

export default Icon;

import React, {useContext} from 'react';
import {StoryContainer, StoryText} from "components/story/storyStyles";
import Label from "components/label/label";
import {ThemeContext} from "styled-components";

const Story = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <StoryContainer className="container" backgroundColor={props.backgroundColor}>
            <Label backgroundColor={props.backgroundColor} theme={theme}>
                {props.title}
            </Label>
            <StoryText backgroundColor={props.backgroundColor} theme={theme}>
                {props.text}
            </StoryText>
        </StoryContainer>
    );
};

export default Story;

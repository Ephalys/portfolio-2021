import React from 'react';
import {StoryContainer, StoryText} from "components/story/storyStyles";
import Label from "components/label/label";

const Story = (props) => {
    return (
        <StoryContainer className="container" backgroundColor={props.backgroundColor}>
            <Label>
                {props.title}
            </Label>
            <StoryText>
                {props.text}
            </StoryText>
        </StoryContainer>
    );
};

export default Story;

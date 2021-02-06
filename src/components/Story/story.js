import React from 'react';
import {StoryContainer, StoryTitle, StoryText} from "components/Story/storyStyles";

const Story = () => {
    return (
        <StoryContainer className="container">
            <StoryTitle>
                My story
            </StoryTitle>
            <StoryText>
                Before all this, I was full-stack developer at Subskill and for them I have worked on projects involving several fields, from luxury fashion brands to banks, from public services to health insurance, to major retail distributors and ecommerce.
            </StoryText>
        </StoryContainer>
    );
};

export default Story;

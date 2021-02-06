import React from 'react';
import {StoryContainer, StoryText} from "components/story/storyStyles";
import Label from "components/label/label";

const Story = () => {
    return (
        <StoryContainer className="container">
            <Label>
                My story
            </Label>
            <StoryText>
                I began my career with an internship as fullstack developer at Classicat's. My objectives was to create a new site from scratch with an administration interface and increase traffic using good SEO practices.
            </StoryText>
            <StoryText>
                Then, I was full-stack developer at Subskill and for them I have worked on projects involving several fields, from luxury fashion brands to banks, from public services to health insurance, to major retail distributors and ecommerce.
            </StoryText>
        </StoryContainer>
    );
};

export default Story;

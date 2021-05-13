import React, {useContext} from 'react';
import {StoryContainer, StoryText, Stacks, StacksContainer} from "components/story/storyStyles";
import Label from "components/label/label";
import {ThemeContext} from "styled-components";
import Icon from "components/icon/icon";
import VueJs from "../../icons/icon-vuejs.svg";
import GatsbyJS from "../../icons/icon-gatsbyjs.svg";
import ReactJs from "../../icons/icon-react.svg";
import Vercel from "../../icons/icon-vercel.svg";
import Netlify from "../../icons/icon-netlify.svg";
import StyledComponents from "../../icons/icon-styled-components.svg";

const Story = (props) => {
    const theme = useContext(ThemeContext);
    const stacks = [
        {
            icon: VueJs,
            url: "https://www.linkedin.com/in/leon-tran-van/"
        },
        {
            icon: GatsbyJS,
            url: "https://open.spotify.com/user/ephalys?si=UhyBFbz4S7qeLkMAkjliDg"
        },
        {
            icon: ReactJs,
            url: "nvnrtnl@gmail.com"
        },
        {
            icon: Vercel,
            url: "https://github.com/ephalys"
        },
        {
            icon: Netlify,
            url: "https://github.com/ephalys"
        },
        {
            icon: StyledComponents,
            url: "https://github.com/ephalys"
        }
    ]
    return (
        <StoryContainer className="container" backgroundColor={props.backgroundColor}>
            <Label backgroundColor={props.backgroundColor} theme={theme}>
                {props.title}
            </Label>
            <StoryText backgroundColor={props.backgroundColor} theme={theme}>
                {props.text}
            </StoryText>
            {
                props.stacks &&
                <StacksContainer>
                    <Stacks>
                        {stacks.map((stack,i) => (
                            <Icon icon={stack.icon} width={30} height={30} key={i}/>
                        ))}
                    </Stacks>
                </StacksContainer>
            }
        </StoryContainer>
    );
};

export default Story;

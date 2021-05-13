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
            name: 'Vuejs',
            icon: VueJs,
            width: 30,
            height: 30,
        },
        {
            name: 'Gatsbyjs',
            icon: GatsbyJS,
            width: 30,
            height: 30
        },
        {
            name: 'Reactjs',
            icon: ReactJs,
            width: 30,
            height: 30
        },
        {
            name: 'Vercel',
            icon: Vercel,
            width: 30,
            height: 30
        },
        {
            name: 'Netlify',
            icon: Netlify,
            width: 30,
            height: 30
        },
        {
            name: 'Styled components',
            icon: StyledComponents,
            width: 60,
            height: 60
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
                            <Icon icon={stack.icon} width={stack.width} height={stack.height} key={i}/>
                        ))}
                    </Stacks>
                </StacksContainer>
            }
        </StoryContainer>
    );
};

export default Story;

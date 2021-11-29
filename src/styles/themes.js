import colors from "styles/colors"
export const themes = {
    'light': {
        name: 'light',
        primaryBackground: colors.white,
        secondaryBackground: colors.extremelightgrey,
        title: colors.black,
        secondaryTitle: colors.black,
        paragraph: colors.lightgrey,
        secondaryParagraph: colors.lightgrey
    },
    'dark': {
        name: 'dark',
        primaryBackground: colors.black,
        secondaryBackground: colors.extremelightgrey,
        title: colors.white,
        secondaryTitle: colors.white,
        paragraph: colors.lightgrey,
        secondaryParagraph: colors.lightgrey
    },
    'rainbow': {
        name: 'rainbow',
        primaryBackground: 'radial-gradient(#ffcb57 23%,rgba(255,203,87,0) 67% 100%) 385px -24px,radial-gradient(#ff333d 0,rgba(255,51,61,0) 60% 100%) -940px 290px,radial-gradient(#90e0ff 10%,rgba(144,224,255,0) 60% 100%) -120px 250px,radial-gradient(#ff333d 40%,rgba(255,51,61,0) 57% 100%) 495px -44px,radial-gradient(#a960ee 30%,rgba(169,96,238,0) 67% 100%) 122px -120px,radial-gradient(#a960ee 10%,rgba(169,96,238,0) 60% 100%) -420px 120px,radial-gradient(#90e0ff 15%,rgba(144,224,255,0) 50% 100%) -620px 0,radial-gradient(#90e0ff 25%,rgba(144,224,255,0) 50% 100%) 520px -250px,#a960ee',
        secondaryBackground: colors.white,
        title: colors.white,
        secondaryTitle: colors.white,
        paragraph: colors.white,
        secondaryParagraph: colors.lightgrey
    }
}

const colorNames = {
    black: "#000000",
    white: "#ffffff",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    scienceBlue: "#0366D6",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    border: "rgba(209, 213, 218, 0.3);",
};

export const lightTheme = {
    ...common,
    text: {
        primary: colorNames.black,
        secondary: colorNames.slateGray,
        contrast: colorNames.scienceBlue,
    },
    background: {
        primary: colorNames.mercury,
        secondary: colorNames.white,
        contrast: colorNames.scienceBlue,
    },
    button: {
        text: colorNames.white,
        background: colorNames.scienceBlue,
    }
}

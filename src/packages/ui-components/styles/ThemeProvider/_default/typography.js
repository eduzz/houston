import themeVariable from './variables';
var typography = {
    fontFamily: themeVariable.fontFamily,
    fontSize: themeVariable.textSize(),
    body1: {
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize(),
        fontWeight: themeVariable.fontWeight()
    },
    body2: {
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize(),
        fontWeight: themeVariable.fontWeight()
    },
    button: {
        fontWeight: themeVariable.fontWeight('semibold')
    }
};
export default typography;

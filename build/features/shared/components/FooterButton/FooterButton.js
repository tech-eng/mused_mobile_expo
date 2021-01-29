import React, { Component } from 'react';
import { Text, View, Image, Animated } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { LOVE } from '../FooterButtons/buttonsKeys';
import theme from './theme';
const icons = {
    verificationMarkBlack: require('../../../../../assets/images/verification-mark.png'),
    love: require('../../../../../assets/images/love.png'),
    loveSelected: require('../../../../../assets/images/love-selected.png'),
    verificationMarkWhite: require('../../../../../assets/images/verification-mark-white.png'),
    arrowUp: require('../../../../../assets/images/view.png'),
    filter: require('../../../../../assets/images/categories.png'),
    clear: require('../../../../../assets/images/cross-white.png'),
    details: require('../../../../../assets/images/details.png'),
    back: require('../../../../../assets/images/back_icon.png'),
    view: require('../../../../../assets/images/view_icon.png'),
    category: require('../../../../../assets/images/category_icon.png'),
    apply: require('../../../../../assets/images/apply.png'),
    cancel: require('../../../../../assets/images/cancel.png'),
};
export default class FooterButton extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isSavedOutfit: false,
            opacity: new Animated.Value(0.4)
        };
        this.startHighlightAnimation = () => {
            this.state.opacity.setValue(0.4);
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1500,
            }).start(() => this.startHighlightAnimation());
        };
        this._navigateToRoute = () => {
            const { navigate, text, user } = this.props;
            // toggle Highlight button text
            if (user !== undefined) {
                const { user: { getHighlightButtonText, setHighlightButtonText } } = this.props;
                console.log(getHighlightButtonText);
                if (getHighlightButtonText === 'View' && text === 'View')
                    setHighlightButtonText('none');
            }
            if (!navigate) {
                return;
            }
            if (text === LOVE && this.state.isSavedOutfit) {
                return;
            }
            if (text === LOVE) {
                this.setState({ isSavedOutfit: true });
            }
            navigate();
        };
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps.user.getHighlightButtonText);
        if (this.props.text === LOVE && newProps.newImgUrl !== this.props.newImgUrl) {
            this.setState({ isSavedOutfit: false });
        }
    }
    componentDidMount() {
        this.startHighlightAnimation();
    }
    render() {
        const { text, icon, whiteTheme, greyTheme, styleForContainer, user: { userProfile, getHighlightButtonText } } = this.props;
        let iconSource = text === LOVE && this.state.isSavedOutfit
            ? icons['loveSelected']
            : icons[icon];
        const textStyle = whiteTheme
            ? { color: '#333' }
            : { color: '#000', fontFamily: 'QuickSandRegular' };
        const backgroundColor = whiteTheme
            ? { backgroundColor: '#fff' }
            : { backgroundColor: 'transparent' };
        const backgroundColorGrey = greyTheme ? { backgroundColor: '#dfdede' } : {};
        const _styleForContainer = styleForContainer;
        // const underlayColor: string = whiteTheme ? '#fff' : '#000';
        let isHighlighted = false;
        if (this.props.user !== undefined) {
            if (userProfile &&
                userProfile.email === 'anonymous' &&
                getHighlightButtonText.indexOf(text) > -1) {
                isHighlighted = true;
            }
        }
        return (React.createElement(Ripple, { style: [
                theme.footerButtonContainer,
                backgroundColor,
                backgroundColorGrey,
                _styleForContainer,
            ], onPress: this._navigateToRoute, rippleSize: 40, rippleDuration: 300, rippleContainerBorderRadius: 40 },
            React.createElement(View, { style: [theme.footerButtonConfirmContainer, backgroundColor, backgroundColorGrey] },
                React.createElement(Image, { style: [theme.footerCheckImage], source: iconSource }),
                React.createElement(Text, { style: [theme.footerCheckText, textStyle] }, text),
                React.createElement(Animated.View, { style: {
                        backgroundColor: 'gray',
                        opacity: isHighlighted ? this.state.opacity : 0,
                        position: 'absolute',
                        top: 8,
                        bottom: 8,
                        right: 8,
                        left: 8,
                        borderRadius: 10,
                        overflow: 'hidden'
                    } }))));
    }
}
FooterButton.defaultProps = {
    whiteTheme: true,
    greyTheme: false,
    styleForContainer: {}
};
//# sourceMappingURL=FooterButton.js.map
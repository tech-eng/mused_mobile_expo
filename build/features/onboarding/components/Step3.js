import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, Animated, ScrollView, TouchableWithoutFeedback, } from 'react-native';
import theme from '../theme';
import Ripple from 'react-native-material-ripple';
import TypeWriterText from './Typewriter';
const shirtImage = require('../../../../assets/images/onboarding-21-shirt.jpg');
const shoesImage = require('../../../../assets/images/onboarding-21-shoe.jpg');
const trousersImage = require('../../../../assets/images/onboarding-21-trousers.jpg');
const browseImage1 = require('../../../../assets/images/onboarding-22-shirt1.jpg');
const browseImage2 = require('../../../../assets/images/onboarding-22-shirt2.jpg');
const browseImage3 = require('../../../../assets/images/onboarding-22-shirt3.jpg');
const browseImage4 = require('../../../../assets/images/onboarding-22-shirt4.jpg');
// const arrow2GIF = require('../../../../assets/images/arrow2.gif');
// const arrow3GIF = require('../../../../assets/images/arrow3.gif');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    containerItem: {
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 10
    },
    alterContainer: {
        flex: 0.3,
    },
    alterItem: {
        borderWidth: 1,
        borderColor: '#000',
        width: 30,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        textAlign: 'center',
        fontSize: 10,
        color: '#000',
        fontFamily: 'QuickSandRegular'
    },
    imageContainer: {
        flex: 0.4,
    },
    clickableImageContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        paddingVertical: 20,
        overflow: 'hidden',
    },
    clickableImageContainerLeft: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        paddingVertical: 20,
        overflow: 'hidden',
        borderRightWidth: 1.5,
        borderBottomWidth: 2,
        borderColor: '#f9f9f9'
    },
    clickableImageContainerRight: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        paddingVertical: 20,
        overflow: 'hidden',
        borderBottomWidth: 2,
        borderColor: '#f9f9f9'
    },
    itemImage: {
        width: width / 3,
        height: 180,
    },
    preItemView: {
        height: 110,
        flexDirection: 'row',
        padding: 5,
    },
    preItemImage: {
        width: width / 6,
        height: 100,
        marginHorizontal: 4
    },
    clickableTitle: {
        fontFamily: 'RalewayBold',
        fontSize: 11,
        color: '#000',
        marginTop: 10,
        marginBottom: 2,
        textAlign: 'center',
        letterSpacing: 2,
    },
    clickableSubTitle: {
        fontFamily: 'QuickSandRegular',
        fontSize: 11,
        color: '#000',
        textAlign: 'center'
    },
    scrollView: {
        flex: 1,
        width
    },
    descWrapper: {
        alignItems: 'center',
        height: 70,
        paddingBottom: 15,
    },
    gifIcon: {
        width: 50,
        height: 60,
        resizeMode: 'contain'
    },
    arrow3: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 50,
        height: 60,
        resizeMode: 'contain'
    }
});
export default class Step3 extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            fadeIn: new Animated.Value(1),
            itemMarginTop: new Animated.Value(0),
            step: 1,
            selectedImage: shirtImage,
            slideCount: 0
        };
        this.onPressClick = () => {
            this.props.continue();
        };
        this.onClickImage = (image) => {
            console.log(image);
            // this.state.itemMarginTop.setValue(0)
            // Animated.timing(                 
            //   this.state.itemMarginTop,            
            //   {
            //     toValue: 300,
            //     duration: 300,
            //     easing: Easing.cubic
            //   }
            // ).start(() => {
            //   this.state.itemMarginTop.setValue(0);        
            //   if(this.state.slideCount === 3) this.props.continue();
            //   this.setState({selectedImage: image, slideCount: this.state.slideCount + 1});
            // });
        };
        this.renderProducts = () => {
            return (React.createElement(Animated.View, { style: [styles.content, { opacity: this.state.fadeIn }] },
                React.createElement(TypeWriterText, { text: ['Try the ‘View‘ button', 'at bottom of screen'] }),
                React.createElement(ScrollView, { style: styles.scrollView, scrollEnabled: false },
                    React.createElement(View, { style: { flexDirection: 'row' } },
                        React.createElement(Ripple, { onPress: () => this.onClickImage(browseImage1), rippleSize: 120, rippleDuration: 300, rippleCentered: true, rippleContainerBorderRadius: 40 },
                            React.createElement(View, { style: [styles.clickableImageContainerLeft, { position: 'relative', width: width / 2 }] },
                                React.createElement(Image, { source: browseImage1, resizeMode: 'contain', style: styles.itemImage }),
                                React.createElement(View, { style: styles.descWrapper },
                                    React.createElement(Text, { style: styles.clickableTitle }, "MARNI"),
                                    React.createElement(Text, { style: styles.clickableSubTitle }, "Gathered T-shirt")))),
                        React.createElement(Ripple, { onPress: () => this.onClickImage(browseImage2), rippleSize: 120, rippleDuration: 300, rippleCentered: true, rippleContainerBorderRadius: 40 },
                            React.createElement(View, { style: [styles.clickableImageContainerRight, { width: width / 2 }] },
                                React.createElement(Image, { source: browseImage2, resizeMode: 'contain', style: styles.itemImage }),
                                React.createElement(View, { style: styles.descWrapper },
                                    React.createElement(Text, { style: styles.clickableTitle }, "FENDI"),
                                    React.createElement(Text, { style: styles.clickableSubTitle }, "Monster furry sweatshirt"))))),
                    React.createElement(View, { style: { flexDirection: 'row' } },
                        React.createElement(Ripple, { onPress: () => this.onClickImage(browseImage3), rippleSize: 120, rippleDuration: 300, rippleCentered: true, rippleContainerBorderRadius: 40 },
                            React.createElement(View, { style: [styles.clickableImageContainerLeft, { width: width / 2 }] },
                                React.createElement(Image, { source: browseImage3, resizeMode: 'contain', style: styles.itemImage }),
                                React.createElement(View, { style: styles.descWrapper },
                                    React.createElement(Text, { style: styles.clickableTitle }, "GUCCI"),
                                    React.createElement(Text, { style: styles.clickableSubTitle }, "Floral print hoodle")))),
                        React.createElement(Ripple, { onPress: () => this.onClickImage(browseImage4), rippleSize: 120, rippleDuration: 300, rippleCentered: true, rippleContainerBorderRadius: 40 },
                            React.createElement(View, { style: [styles.clickableImageContainerRight, { width: width / 2 }] },
                                React.createElement(Image, { source: browseImage4, resizeMode: 'contain', style: styles.itemImage }),
                                React.createElement(View, { style: styles.descWrapper },
                                    React.createElement(Text, { style: styles.clickableTitle }, "ALEXANDER MCQUEEN"),
                                    React.createElement(Text, { style: styles.clickableSubTitle }, "Bug embellished blouse"))))))));
        };
    }
    render() {
        return (React.createElement(View, { style: theme.container },
            React.createElement(View, { style: styles.content },
                this.renderProducts(),
                React.createElement(View, { style: styles.preItemView },
                    React.createElement(Animated.Image, { source: this.state.selectedImage, resizeMode: 'contain', style: [styles.preItemImage, { marginTop: this.state.itemMarginTop }] }),
                    React.createElement(Image, { source: trousersImage, resizeMode: 'contain', style: styles.preItemImage }),
                    React.createElement(Image, { source: shoesImage, resizeMode: 'contain', style: styles.preItemImage })),
                React.createElement(View, { style: theme.buttonButtonView },
                    React.createElement(TouchableWithoutFeedback, { onPress: () => this.onPressClick() },
                        React.createElement(View, { style: theme.buttonWrapper },
                            React.createElement(View, { style: theme.line }),
                            React.createElement(Text, { style: theme.bottomButtonText }, "VIEW"),
                            React.createElement(View, { style: theme.line })))))));
    }
}
//# sourceMappingURL=Step3.js.map
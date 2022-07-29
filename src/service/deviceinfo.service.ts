import { 
    osVersion,
    osName,
    isDesktop,
    isMobile,
    isTablet,
    mobileVendor,
    mobileModel,
    fullBrowserVersion,
    isChrome,
    isFirefox,
    isSafari,
    isOpera,
    isIE,
    isEdge,
    isMobileSafari,
    isChromium,
    isAndroid,
    isIOS
 } from 'react-device-detect';

export const getDeviceInfo = () => {
    return {
        osVersion,
        osName,
        isDesktop,
        isMobile,
        isTablet,
        mobileVendor,
        mobileModel,
        fullBrowserVersion,
        isChrome,
        isFirefox,
        isSafari,
        isOpera,
        isIE,
        isEdge,
        isMobileSafari,
        isChromium,
        isAndroid,
        isIOS
    }
}
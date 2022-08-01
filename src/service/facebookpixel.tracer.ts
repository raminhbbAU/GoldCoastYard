import ReactPixel from 'react-facebook-pixel';
import { EnvVarLoader } from './environmentvariable.loader';

const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
};

export const facebookPixelFBQ = (eventName:any,data?:any) => {
    //console.log("facebookPixelFBQ....")
    ReactPixel.init(EnvVarLoader("FACEBOOK_PIXEL_ID"),undefined, options);
    ReactPixel.fbq('trackCustom', eventName,data || undefined);
}
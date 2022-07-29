import { useState, useEffect } from "react";

function useEnvVarLoader(tag:any){

    let value="";

    useEffect(() => {
       
        console.log(tag);
        switch (tag) {
            case "FACEBOOK_PIXEL_ID":
              value = process.env.FACEBOOK_PIXEL_ID ? process.env.FACEBOOK_PIXEL_ID : "751091112792161"
              break;
            case "FACEBOOK_CHAT_ID":
              value = process.env.FACEBOOK_CHAT_ID ? process.env.FACEBOOK_CHAT_ID : "101507375914843"
              break;
            case "GOOGLE_API_KEY":
              value = process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : "AIzaSyB77KWtrjUyoNn_tpm5088khRkJ3NAgkDo"
              break;
            case "EMAILJS_SERVICE_ID":
              value = process.env.EMAILJS_SERVICE_ID ? process.env.EMAILJS_SERVICE_ID : "gccaryard"
              break;
            case "EMAILJS_SERVICE_TEMPLATEID":
              value = process.env.EMAILJS_SERVICE_TEMPLATEID ? process.env.EMAILJS_SERVICE_TEMPLATEID : "template_rqo9zdb"
              break;
            case "EMAILJS_SERVICE_KEY":
              value = process.env.EMAILJS_SERVICE_KEY ? process.env.EMAILJS_SERVICE_KEY : "_w2WCmWQNWtKQCDvE"
              break;
            default:
              break;
          }

      }, [tag]);

    return [value];

}

export function EnvVarLoader(tag:any){

  let value="";

  switch (tag) {
    case "FACEBOOK_PIXEL_ID":
      value = process.env.FACEBOOK_PIXEL_ID ? process.env.FACEBOOK_PIXEL_ID : "751091112792161"
      break;
    case "FACEBOOK_CHAT_ID":
      value = process.env.FACEBOOK_CHAT_ID ? process.env.FACEBOOK_CHAT_ID : "101507375914843"
      break;
    case "GOOGLE_API_KEY":
      value = process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : "AIzaSyB77KWtrjUyoNn_tpm5088khRkJ3NAgkDo"
      break;
    case "EMAILJS_SERVICE_ID":
      value = process.env.EMAILJS_SERVICE_ID ? process.env.EMAILJS_SERVICE_ID : "gccaryard"
      break;
    case "EMAILJS_SERVICE_TEMPLATEID":
      value = process.env.EMAILJS_SERVICE_TEMPLATEID ? process.env.EMAILJS_SERVICE_TEMPLATEID : "template_rqo9zdb"
      break;
    case "EMAILJS_SERVICE_KEY":
      value = process.env.EMAILJS_SERVICE_KEY ? process.env.EMAILJS_SERVICE_KEY : "_w2WCmWQNWtKQCDvE"
      break;
    default:
      break;
  }

  return value;

}


export default useEnvVarLoader;
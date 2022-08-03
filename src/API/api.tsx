import axios from "axios";
import emailjs from '@emailjs/browser';
import useEnvVarLoader, { EnvVarLoader } from "../service/environmentvariable.loader";


export function loadAvailableCars():any[] {

    //let res = await axios.get('./Stock Data.json');
    //console.log(carRepo);
    return carRepo();
}

export function loadCarInfo(id:any):any {

    //let res = await axios.get('./Stock Data.json');
    //console.log(carRepo);
    let res = carRepo().filter(item => item.id == id).at(0);
    return res;
}

export function loadCarPictures(id:any):any {

    //let res = await axios.get('./Stock Data.json');

    let res = carPictures().filter(item => item.id == id).at(0).images;
    console.log(res);
    return res;
}

export function loadManufactures():any[] {

    //let res = await axios.get('./Stock Data.json');
    //console.log(carManufacture);
    return carManufacture();
}

export function loadModels():any[] {

    //let res = await axios.get('./Stock Data.json');
    //console.log(carManufacture);
    return carModel();
}

export async function SendEmail(formName:any,rego:any,state:any,odometer:any,fullName:any,email:any,phone:any,condition:any,description:any,carID:any,carTitle:any,testDriveDate:any,testDriveTime:any,make:any,model:any,year:any,messagecontent:any) {

    console.log({rego,state,odometer,fullName,email,phone,condition,description,messagecontent})

    // const [serviceID] = useEnvVarLoader("EMAILJS_SERVICE_ID");
    // const [templateID] = useEnvVarLoader("EMAILJS_SERVICE_TEMPLATEID");
    // const [serviceKey] = useEnvVarLoader("EMAILJS_SERVICE_KEY");


    let res =  await emailjs.send(EnvVarLoader("EMAILJS_SERVICE_ID"), EnvVarLoader("EMAILJS_SERVICE_TEMPLATEID"), {
        subject: formName || "New Message from www.gccy.com.au",
        from_name: formName || "Web administrator",
        to_name: "GCCY Manager",
        rego_value:rego,
        state_value:state,
        odometer_value:odometer,
        fullName_value:fullName,
        email_value:email,
        phone_value:phone,
        condition_value:condition,
        description_value: description,
        carid_value: carID,
        cartitle_value: carTitle,
        testdrivedate_value:testDriveDate,
        testdrivetime_value: testDriveTime,
        make_value: make,
        model_value:model,
        year_value:year,
        message: messagecontent || "This message has generated automatically from www.gccy.com.au",
        Send_To: "info@gccy.com.au",
        }
        , EnvVarLoader("EMAILJS_SERVICE_KEY"));

    return res;
}


// repositories

function carPictures():any[] {
    return (
        [
            {
                "id":1,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${10}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${11}.jpg`,
                ]
            }
            ,
            {
                "id":2,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${2}/gallery${7}.jpg`,
                ]
            }
            ,
            {
                "id":3,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${3}/gallery${8}.jpg`,
                ]
            }
            ,  
            {
                "id":4,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${4}/gallery${7}.jpg`,
                ]
            }
            ,  
            {
                "id":5,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${6}.jpg`,
                ]
            }
            ,  
            {
                "id":6,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${7}.jpg`,
                ]
            }
            ,
            {
                "id":7,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${10}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${7}/gallery${11}.jpg`,
                ]
            }
            ,
            {
                "id":8,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${8}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":9,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${9}/gallery${7}.jpg`,
                ]
            } 
            ,
            {
                "id":10,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${9}.jpg`,

                ]
            } 
            ,
            {
                "id":11,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${11}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":12,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${12}/gallery${10}.jpg`,
                ]
            } 
            ,
            {
                "id":13,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${13}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${13}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${13}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${13}/gallery${4}.jpg`,
                ]
            } 
            ,
            {
                "id":14,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${14}/gallery${10}.jpg`,
                ]
            } 
            ,
            {
                "id":15,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${15}/gallery${10}.jpg`,
                ]
            }
            ,
            {
                "id":16,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${16}/gallery${10}.jpg`,
                ]
            }
            ,
            {
                "id":17,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${17}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":18,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${18}/gallery${7}.jpg`,
                ]
            } 
            ,
            {
                "id":19,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${19}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":20,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${20}/gallery${7}.jpg`,
                ]
            } 
            ,
            {
                "id":21,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${21}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":22,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${22}/gallery${10}.jpg`,
                ]
            } 
            ,
            {
                "id":23,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${23}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":24,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${24}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":25,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${25}/gallery${10}.jpg`,
                ]
            } 
            ,
            {
                "id":26,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${26}/gallery${9}.jpg`,
                ]
            } 
            ,
            {
                "id":27,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${10}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${27}/gallery${11}.jpg`,
                ]
            } 
            ,
            {
                "id":28,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${28}/gallery${10}.jpg`,
                ]
            }  
            ,
            {
                "id":29,
                "images":[
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${1}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${2}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${3}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${4}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${5}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${6}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${29}/gallery${8}.jpg`,
                ]
            }    

        ]
        
    )
}

function carModel():any[] {
    return (
        [
            {
               "id":1,
               "manufactureId":1,
               "title":"Mazda2"
            },
            {
               "id":2,
               "manufactureId":1,
               "title":"Mazda3"
            },
            {
               "id":3,
               "manufactureId":1,
               "title":"CX5 KE Series"
            },
            {
               "id":4,
               "manufactureId":1,
               "title":"Mazda6"
            },
            {
               "id":5,
               "manufactureId":2,
               "title":"Cherokee"
            },
            {
               "id":6,
               "manufactureId":3,
               "title":"Rio"
            },
            {
               "id":7,
               "manufactureId":3,
               "title":"Sportage"
            },
            {
               "id":8,
               "manufactureId":4,
               "title":"Tiguan"
            },
            {
               "id":9,
               "manufactureId":5,
               "title":"380"
            },
            {
               "id":10,
               "manufactureId":14,
               "title":"i20"
            },
            {
               "id":11,
               "manufactureId":6,
               "title":"XV"
            },
            {
               "id":12,
               "title":"Forester",
               "manufactureId":6,
            },
            {
               "id":13,
               "title":"Impreza",
               "manufactureId":7,
            },
            {
               "id":14,
               "title":"Jazz",
               "manufactureId":7,
            },
            {
               "id":15,
               "title":"Civic",
               "manufactureId":7,
            },
            {
               "id":16,
               "title":"X-Trail",
               "manufactureId":8,
            },
            {
               "id":17,
               "title":"Cube",
               "manufactureId":8,
            },
            {
               "id":18,
               "title":"RX330",
               "manufactureId":9
            },
            {
               "id":19,
               "title":"RAV4",
               "manufactureId":10
            },
            {
               "id":20,
               "title":"Aurion",
               "manufactureId":10
            },
            {
               "id":21,
               "title":"Camry",
               "manufactureId":10
            },
            {
               "id":22,
               "title":"Estima E-Fore G",
               "manufactureId":10
            },
            {
               "id":23,
               "title":"A3",
               "manufactureId":11
            },
            {
               "id":24,
               "title":"X1",
               "manufactureId":12
            },
            {
               "id":25,
               "title":"Colorado",
               "manufactureId":13
            },
            
         ]
    )
}

function carManufacture():any[] {
    return (
        [
            {
                "id":1,
                "title":"Mazda"
            }
            ,
            {
                "id":2,
                "title":"Jeep"
            }
            ,
            {
                "id":3,
                "title":"Kia"
            }
            ,
            {
                "id":4,
                "title":"Volkswagen"
            }
            ,
            {
                "id":5,
                "title":"Mercedes-Benz"
            }
            ,

            {
                "id":6,
                "title":"Subaru"
            }
            ,
            {
                "id":7,
                "title":"Honda"
            }
            ,
            {
                "id":8,
                "title":"Nissan"
            }
            ,
            {
                "id":9,
                "title":"Lexus"
            }
			,
            {
                "id":10,
                "title":"Toyota"
            }
			,
            {
                "id":11,
                "title":"Audi"
            }
			,
            {
                "id":12,
                "title":"BMW"
            }
			,
            {
                "id":13,
                "title":"Holden"
            },
            {
                "id":14,
                "title":"Hyundai"
            }
			,
            {
                "id":15,
                "title":"Suzuki"
            }

        ]
    )
}

 function carRepo():any[] {
    return (
        [
            {
               "id":1,
               "manufacturId":9,
               "modelId":18,
               "title":"Lexus RX300 2003",
               "manufacture":"Lexus",
               "body":"Wagon",
               "model":"RX330 Sports MCU38R",
               "cylinders":6,
               "horsepower":0,
               "odometer":191230,
               "year":"2013",
               "color":"Gray",
               "state":"QLD",
               "engine":"3.3Lit",
               "transmission":"Automatic",
               "vin":"JTJHA31UX00050632",
               "price":8990,
               "fuel":"Petrol",
               "finance":50,
               "overview":"Sunroof\nReverse camera\nBuilt in navigation system\n6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":2,
               "manufacturId":8,
               "modelId":17,
               "title":"Nissan Cube 2005",
               "manufacture":"Nissan",
               "body":"Hatchback",
               "model":"Cube",
               "cylinders":4,
               "horsepower":0,
               "odometer":193000,
               "year":"2005",
               "color":"Green",
               "state":"QLD",
               "engine":"1.4 L",
               "transmission":"Automatic",
               "vin":"6U9000BGZ11669282",
               "price":8990,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 year warranty\nRoadworthy Certificate\nClear title (no accident history)"
            },
            {
               "id":3,
               "manufacturId":3,
               "modelId":7,
               "title":"Kia Sportage 2008",
               "manufacture":"Kia",
               "body":"SUV",
               "model":"Sportage",
               "cylinders":4,
               "horsepower":0,
               "odometer":181709,
               "year":"2008",
               "color":"Black",
               "state":"QLD",
               "engine":"2.0 L",
               "transmission":"Automatic",
               "vin":"KNAJE552397567011",
               "price":9990,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":4,
               "manufacturId":10,
               "modelId":22,
               "title":"Toyota Estima E-Fore G 2007",
               "manufacture":"Toyota",
               "body":"People Mover",
               "model":"MY15",
               "cylinders":4,
               "horsepower":0,
               "odometer":147474,
               "year":"2007",
               "color":"Black",
               "state":"QLD",
               "engine":"2.4 L",
               "transmission":"Automatic",
               "vin":"6U900AHR207016707",
               "price":16995,
               "fuel":"Hybrid",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":5,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 2009",
               "manufacture":"Mazda",
               "body":"Sedan",
               "model":"Mazda 3",
               "cylinders":4,
               "horsepower":0,
               "odometer":200000,
               "year":"2009",
               "color":"Black",
               "state":"QLD",
               "engine":"1.5 L",
               "transmission":"Automatic",
               "vin":"JM0BL10F100101919",
               "price":8900,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":6,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "manufacture":"Mazda",
               "body":"Hatchback",
               "model":"Mazda3",
               "cylinders":4,
               "odometer":182500,
               "year":"2009",
               "color":"Gray",
               "state":"QLD",
               "engine":"2.0",
               "transmission":"Automatic",
               "vin":"JM0BL10F100136595",
               "price":11990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":7,
               "manufacturId":10,
               "modelId":20,
               "title":"Toyota Aurion 2009",
               "manufacture":"Toyota",
               "body":"Sedan",
               "model":"Aurion",
               "cylinders":6,
               "odometer":134000,
               "year":"2009",
               "color":"Beige",
               "state":"QLD",
               "engine":"3.5",
               "transmission":"Automatic",
               "vin":"6T153KK400X323891 ",
               "price":11990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\n Roadworthy Certificate\n Clear Title (no accident history)\nCruise Control"
            },
            {
               "id":8,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "manufacture":"Mazda",
               "body":"Sedan",
               "model":"Mazda3",
               "cylinders":4,
               "odometer":182500,
               "year":"2009",
               "color":"Gray",
               "state":"QLD",
               "engine":"2.0",
               "transmission":"Automatic",
               "vin":"JM0BL10F100136595",
               "price":11990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":9,
               "manufacturId":10,
               "modelId":20,
               "title":"Toyota Aurion 2009",
               "manufacture":"Toyota",
               "body":"Sedan",
               "model":"Aurion",
               "cylinders":6,
               "odometer":199959,
               "year":"2009",
               "color":"Beige",
               "state":"QLD",
               "engine":"3.5L",
               "transmission":"Automatic",
               "vin":"6T1535KK400X322596",
               "price":7990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)Cruise Control"
            },
            {
               "id":10,
               "manufacturId":2,
               "modelId":5,
               "title":"Jeep Cherokee KK 2011",
               "manufacture":"Jeep",
               "body":"SUV",
               "model":"Cherokee KK",
               "cylinders":6,
               "odometer":153644,
               "year":"2011",
               "color":"Black",
               "state":"QLD",
               "engine":"3.5 L",
               "transmission":"Automatic",
               "vin":"1C4PJMEK6CW111991",
               "price":13990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "sold":true,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":11,
               "manufacturId":4,
               "modelId":8,
               "title":"Volkswagen Tiguan 2009",
               "manufacture":"Volkswagen",
               "body":"SUV",
               "model":"Tiguan",
               "cylinders":4,
               "odometer":118032,
               "year":"2009",
               "color":"Black",
               "state":"QLD",
               "engine":"2.0 L",
               "transmission":"Automatic",
               "vin":"WVGZZZ5NZAW066596",
               "price":13990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"Log Books\n6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":12,
               "manufacturId":11,
               "modelId":23,
               "title":"Audi A3 2010",
               "manufacture":"Audi",
               "body":"Sedan",
               "model":"A3 Sportback",
               "cylinders":4,
               "odometer":192251,
               "year":"2010",
               "color":"Blue",
               "state":"QLD",
               "engine":"1.4",
               "transmission":"Automatic",
               "vin":"CAX599489",
               "price":11990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control/nReverse Camera"
            },
            {
               "id":13,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 2010",
               "manufacture":"Mazda",
               "body":"Sedan",
               "model":"3 Maxx Sport BL",
               "cylinders":4,
               "odometer":178000,
               "year":"2010",
               "color":"Red",
               "state":"QLD",
               "engine":"2.0",
               "transmission":"Manual",
               "vin":"JM0BL10F100161399",
               "price":7990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":14,
               "manufacturId":12,
               "modelId":24,
               "title":"BMW X1 2011",
               "manufacture":"BMW",
               "body":"Hatchback",
               "model":"X1",
               "cylinders":4,
               "odometer":178000,
               "year":"2009",
               "color":"White",
               "state":"QLD",
               "engine":"2.0",
               "transmission":"Automatic",
               "vin":"WBAVN32070VR30869",
               "price":16990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":15,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 2011",
               "manufacture":"Mazda",
               "body":"Sedan",
               "model":"Mazda 3",
               "cylinders":4,
               "odometer":110623,
               "year":"2011",
               "color":"Silver",
               "state":"QLD",
               "engine":"2.0L",
               "transmission":"Automatic",
               "vin":"JM0BL10F200317847",
               "price":12990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":16,
               "manufacturId":10,
               "modelId":19,
               "title":"Toyota Rav4 2011",
               "manufacture":"Toyota",
               "body":"SUV",
               "model":"Rav4",
               "cylinders":4,
               "odometer":183803,
               "year":"2011",
               "color":"Silver",
               "state":"QLD",
               "engine":"2.4L",
               "transmission":"Automatic",
               "vin":"JTMZD33V105202191",
               "price":14990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":17,
               "manufacturId":13,
               "modelId":25,
               "title":"Holden Colorado LX 2012",
               "manufacture":"Holden",
               "body":"UTE",
               "model":"Colorado LX",
               "cylinders":4,
               "odometer":187825,
               "year":"2012",
               "color":"White",
               "state":"QLD",
               "engine":"2.8L",
               "transmission":"Manual",
               "vin":"MMU147DH0DH633785",
               "price":20990,
               "horsepower":0,
               "fuel":"Diesel",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":18,
               "manufacturId":7,
               "modelId":15,
               "title":"Honda Civic 2012",
               "manufacture":"Honda",
               "body":"Hatchback",
               "model":"Civic",
               "cylinders":4,
               "odometer":187000,
               "year":"2012",
               "color":"Black",
               "state":"QLD",
               "engine":"1.8L",
               "transmission":"Automatic",
               "vin":"SHHFK2840CU303120",
               "price":11990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":19,
               "manufacturId":2,
               "modelId":5,
               "title":"Jeep Cherokeee Limited KK 2012",
               "manufacture":"Jeep",
               "body":"SUV",
               "model":"Cherokee Limited KK",
               "cylinders":6,
               "odometer":123150,
               "year":"2012",
               "color":"White",
               "state":"QLD",
               "engine":"3.7L",
               "transmission":"Automatic",
               "vin":"",
               "price":13990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":20,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 BL Series 2012",
               "manufacture":"Mazda",
               "body":"Hatchback",
               "model":"3 BL Series",
               "cylinders":0,
               "odometer":147500,
               "year":"2012",
               "color":"Black",
               "state":"QLD",
               "engine":"2.0L",
               "transmission":"Automatic",
               "vin":"JM0BL10F200344141",
               "price":12990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":21,
               "manufacturId":1,
               "modelId":3,
               "title":"Mazda CX5 2012",
               "manufacture":"Mazda",
               "body":"SUV",
               "model":"CX5 KE Series",
               "cylinders":4,
               "odometer":226570,
               "year":"2012",
               "color":"Silver",
               "state":"QLD",
               "engine":"2.2L",
               "transmission":"Automatic",
               "vin":"JMOKE102100121845",
               "price":14990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":22,
               "manufacturId":1,
               "modelId":3,
               "title":"Mazda CX5 2012",
               "manufacture":"Mazda",
               "body":"SUV",
               "model":"CX5 KE Series",
               "cylinders":4,
               "odometer":179585,
               "year":"2012",
               "color":"Silver",
               "state":"QLD",
               "engine":"2.2L",
               "transmission":"Automatic",
               "vin":"0",
               "price":16990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":23,
               "manufacturId":7,
               "modelId":13,
               "title":"Subaru Imprezza 2012",
               "manufacture":"Subaru",
               "body":"Hatchback",
               "model":"Impreza",
               "cylinders":4,
               "odometer":191002,
               "year":"2012",
               "color":"Purple",
               "state":"QLD",
               "engine":"2.0L",
               "transmission":"Manual",
               "vin":"JF1GP7KA3GG009199",
               "price":8990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":24,
               "manufacturId":6,
               "modelId":11,
               "title":"Subaru XV 2012",
               "manufacture":"Subaru",
               "body":"Hatchback",
               "model":"XV",
               "cylinders":4,
               "odometer":178701,
               "year":"2012",
               "color":"White",
               "state":"QLD",
               "engine":"2.0L",
               "transmission":"Automatic",
               "vin":"MALBB51CMDM540020",
               "price":15990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":25,
               "manufacturId":3,
               "modelId":7,
               "title":"Kia Sportage 2013",
               "manufacture":"Kia",
               "body":"SUV",
               "model":"Sportage SLI Platinum",
               "cylinders":4,
               "odometer":188038,
               "year":"2013",
               "color":"Orange",
               "state":"QLD",
               "engine":"2.4L",
               "transmission":"Automatic",
               "vin":"KNAPC812SD7469288",
               "price":14990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":26,
               "manufacturId":1,
               "modelId":4,
               "title":"Mazda 6 2015",
               "manufacture":"Mazda",
               "body":"Wagon",
               "model":"6",
               "cylinders":4,
               "odometer":121678,
               "year":"2015",
               "color":"Gray",
               "state":"QLD",
               "engine":"2.5L",
               "transmission":"Automatic",
               "vin":"JM0GJ103200202148",
               "price":18990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":27,
               "manufacturId":6,
               "modelId":12,
               "title":"Subaru Forester 2015",
               "manufacture":"Subaru",
               "body":"SUV",
               "model":"Forester Boxer",
               "cylinders":4,
               "odometer":171818,
               "year":"2015",
               "color":"White",
               "state":"QLD",
               "engine":"2.0L",
               "transmission":"Automatic",
               "vin":"JF2SJDKY5FG059316 ",
               "price":22990,
               "horsepower":0,
               "fuel":"Diesel",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":28,
               "manufacturId":7,
               "modelId":14,
               "title":"Honda Jazz 2017",
               "manufacture":"Honda",
               "body":"Hathcback",
               "model":"Jazz V-TEC",
               "cylinders":4,
               "odometer":26678,
               "year":"2017",
               "color":"White",
               "state":"QLD",
               "engine":"1.5L",
               "transmission":"Automatic",
               "vin":"MRHGK5850HT02093",
               "price":17990,
               "horsepower":0,
               "fuel":"Petrol",
               "finance":50,
               "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            }
            ,
            {
                "id":29,
                "manufacturId":14,
                "modelId":10,
                "title":"Hyundai i20 2013",
                "manufacture":"Hyundai",
                "body":"Hathcback",
                "model":"i20",
                "cylinders":4,
                "odometer":176523,
                "year":"2013",
                "color":"Red",
                "state":"QLD",
                "engine":"1.4L",
                "transmission":"Automatic",
                "vin":"MALBB51CMDM540020",
                "price":9990,
                "horsepower":0,
                "fuel":"Petrol",
                "finance":50,
                "overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
             }
         ]	
    )
}

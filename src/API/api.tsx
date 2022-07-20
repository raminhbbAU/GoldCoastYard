import axios from "axios";
import emailjs from '@emailjs/browser';


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

    let res =  await emailjs.send('gccaryard222', 'template_rqo9zdb', {
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
        , '_w2WCmWQNWtKQCDvE2');

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
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${12}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${1}/gallery${13}.jpg`,
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
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${7}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${10}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${11}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${5}/gallery${12}.jpg`,
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
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${8}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${9}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${6}/gallery${10}.jpg`,
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
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${10}.jpg`,
                        process.env.PUBLIC_URL + `/img/asset/${10}/gallery${11}.jpg`,

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
               "title":"Benz 380"
            },
            {
               "id":10,
               "manufactureId":6,
               "title":"i20"
            },
            {
               "id":11,
               "manufactureId":7,
               "title":"XV"
            },
            {
               "id":12,
			   "manufactureId":7,
               "title":"Forester"
            },
            {
               "id":13,
			   "manufactureId":7,
               "title":"Impreza"
            },
            {
               "id":14,
			   "manufactureId":8,
               "title":"Jazz"
            },
            {
               "id":15,
			   "manufactureId":8,
               "title":"Civic"
            },
            {
               "id":16,
               "title":"X-Trail",
               "manufactureId":9
            },
            {
               "id":17,
               "title":"Cube",
               "manufactureId":9
            },
            {
               "id":18,
               "title":"RX330",
               "manufactureId":10
            },
            {
               "id":19,
			   "manufactureId":11,
               "title":"RAV4"
            },
            {
               "id":20,
			   "manufactureId":11,
               "title":"Aurion"
            },
            {
               "id":21,
			   "manufactureId":11,
               "title":"Camry"
            },
            {
               "id":22,
			   "manufactureId":11,
               "title":"Tarago"     
            },
            {
               "id":23,
			   "manufactureId":12,
               "title":"A3"
            },
            {
               "id":24,
			   "manufactureId":13,
               "title":"X1"
            },
            {
               "id":25,
			   "manufactureId":14,
               "title":"Colorado" 
            },
            {
               "id":26,
			   "manufactureId":15,
               "title":"Swift"
            },
            {
                "id":27,
				"manufactureId":10,
                "title":"RX300"
             }
			 ,
             {
                "id":28,
				"manufactureId":11,
                "title":"Estima E-Fore G"
             }
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
                "title":"Hyundai"
            }
            ,
            {
                "id":7,
                "title":"Subaru"
            }
            ,
            {
                "id":8,
                "title":"Honda"
            }
            ,
            {
                "id":9,
                "title":"Nissan"
            }
            ,
            {
                "id":10,
                "title":"Lexus"
            }
			,
            {
                "id":11,
                "title":"Toyota"
            }
			,
            {
                "id":12,
                "title":"Audi"
            }
			,
            {
                "id":13,
                "title":"BMW"
            }
			,
            {
                "id":14,
                "title":"Holden"
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
               "manufacturId":10,
               "modelId":27,
               "title":"Lexus RX300 2003",
               "Manufacture":"Lexus",
               "body":"Wagon",
               "Model":"RX330 Sports MCU38R",
               "Cylinders":6,
               "Horsepower":0,
               "odometer":191230,
               "Year":"2013",
               "Color":"Gray",
               "State":"QLD",
               "Engine":"3.3Lit",
               "transmission":"Automatic",
               "VIN":"JTJHA31UX00050632",
               "price":8990,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"Sunroof\nReverse camera\nBuilt in navigation system\n6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":2,
               "manufacturId":9,
               "modelId":17,
               "title":"Nissan Cube 2005",
               "Manufacture":"Nissan",
               "Body":"Hatchback",
               "Model":"Cube",
               "Cylinders":4,
               "Horsepower":0,
               "Odometer":193000,
               "Year":"2005",
               "Color":"Green",
               "State":"QLD",
               "Engine":"1.4 L",
               "Transmission":"Automatic",
               "VIN":"6U9000BGZ11669282",
               "price":8990,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 year warranty\nRoadworthy Certificate\nClear title (no accident history)"
            },
            {
               "id":3,
               "manufacturId":3,
               "modelId":7,
               "title":"Kia Sportage 2008",
               "Manufacture":"Kia",
               "Body":"SUV",
               "Model":"2008",
               "Cylinders":4,
               "Horsepower":0,
               "Odometer":181709,
               "Year":"2008",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.0 L",
               "Transmission":"Automatic",
               "VIN":"KNAJE552397567011",
               "price":9990,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":4,
               "manufacturId":11,
               "modelId":28,
               "title":"Toyota Estima E-Fore G 2007",
               "Manufacture":"Toyota",
               "Body":"People Mover",
               "Model":"MY15",
               "Cylinders":4,
               "Horsepower":0,
               "Odometer":147474,
               "Year":"2007",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.4 L",
               "Transmission":"Automatic",
               "VIN":"6U900AHR207016707",
               "price":16995,
               "Fuel":"Hybrid",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":5,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "Manufacture":"Mazda",
               "Body":"Sedan",
               "Model":"Mazda3",
               "Cylinders":4,
               "Horsepower":0,
               "odometer":200000,
               "Year":"2009",
               "Color":"Black",
               "State":"QLD",
               "Engine":"1.5 L",
               "transmission":"Automatic",
               "VIN":"JM0BL10F100101919",
               "price":8900,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":6,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "Manufacture":"Mazda",
               "body":"Hatchback",
               "Model":"Mazda3",
               "Cylinders":4,
               "odometer":182500,
               "Year":"2009",
               "Color":"Gray",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"JM0BL10F100136595",
               "price":11990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":7,
               "manufacturId":11,
               "modelId":20,
               "title":"Toyota Aurion 2009",
               "Manufacture":"Toyota",
               "body":"Sedan",
               "Model":"Aurion",
               "Cylinders":6,
               "odometer":134000,
               "Year":"2009",
               "Color":"Beige",
               "State":"QLD",
               "Engine":"3.5",
               "transmission":"Automatic",
               "VIN":"6T153KK400X323891 ",
               "price":11990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\n Roadworthy Certificate\n Clear Title (no accident history)\nCruise Control"
            },
            {
               "id":8,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"Mazda3",
               "Cylinders":4,
               "odometer":182500,
               "Year":"2009",
               "Color":"Gray",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"JM0BL10F100136595",
               "price":11990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":9,
               "manufacturId":11,
               "modelId":20,
               "title":"Toyota Aurion 2009",
               "Manufacture":"Toyota",
               "body":"Sedan",
               "Model":"Aurion",
               "Cylinders":6,
               "odometer":199959,
               "Year":"2009",
               "Color":"Beige",
               "State":"QLD",
               "Engine":"3.5L",
               "transmission":"Automatic",
               "VIN":"6T1535KK400X322596",
               "price":7990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)Cruise Control"
            },
            {
               "id":10,
               "manufacturId":2,
               "modelId":5,
               "title":"Jeep Cherokee KK 2011",
               "Manufacture":"Jeep",
               "body":"SUV",
               "Model":"Cherokee KK",
               "Cylinders":6,
               "odometer":153644,
               "Year":"2011",
               "Color":"Black",
               "State":"QLD",
               "Engine":"3.5 L",
               "transmission":"Automatic",
               "VIN":"1C4PJMEK6CW111991",
               "price":13990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":11,
               "manufacturId":4,
               "modelId":8,
               "title":"Volkswagen Tiguan 2009",
               "Manufacture":"Volkswagen",
               "body":"SUV",
               "Model":"Tiguan",
               "Cylinders":4,
               "odometer":118032,
               "Year":"2009",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.0 L",
               "transmission":"Automatic",
               "VIN":"WVGZZZ5NZAW066596",
               "price":13990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"Log Books\n6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
            },
            {
               "id":12,
               "manufacturId":12,
               "modelId":23,
               "title":"Audi A3 2010",
               "Manufacture":"Audi",
               "body":"Sedan",
               "Model":"A3 Sportback",
               "Cylinders":4,
               "odometer":192251,
               "Year":"2010",
               "Color":"Blue",
               "State":"QLD",
               "Engine":"1.4",
               "transmission":"Automatic",
               "VIN":"CAX599489",
               "price":11990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control/nReverse Camera"
            },
            {
               "id":13,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2010",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"3 Maxx Sport BL",
               "Cylinders":4,
               "odometer":178000,
               "Year":"2010",
               "Color":"Red",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Manual",
               "VIN":"JM0BL10F100161399",
               "price":7990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":14,
               "manufacturId":13,
               "modelId":24,
               "title":"BMW X1 2011",
               "Manufacture":"BMW",
               "body":"Hatchback",
               "Model":"X1",
               "Cylinders":4,
               "odometer":178000,
               "Year":"2009",
               "Color":"White",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"WBAVN32070VR30869",
               "price":16.990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":15,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2011",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"Mazda3",
               "Cylinders":4,
               "odometer":110623,
               "Year":"2011",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"2.0L",
               "transmission":"Automatic",
               "VIN":"JM0BL10F200317847",
               "price":12990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":16,
               "manufacturId":11,
               "modelId":19,
               "title":"Toyota Rav4 2011",
               "Manufacture":"Toyota",
               "body":"SUV",
               "Model":"Rav4",
               "Cylinders":4,
               "odometer":183803,
               "Year":"2011",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"2.4L",
               "transmission":"Automatic",
               "VIN":"JTMZD33V105202191",
               "price":14990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":17,
               "manufacturId":14,
               "modelId":25,
               "title":"Holden Colorado LX 2012",
               "Manufacture":"Holden",
               "body":"UTE",
               "Model":"Colorado LX",
               "Cylinders":4,
               "odometer":187825,
               "Year":"2012",
               "Color":"White",
               "State":"QLD",
               "Engine":"2.8L",
               "transmission":"Manual",
               "VIN":"MMU147DH0DH633785",
               "price":20990,
               "Horsepower":0,
               "Fuel":"Diesel",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control" 
            },
            {
               "id":18,
               "manufacturId":8,
               "modelId":15,
               "title":"Honda Civic 2012",
               "Manufacture":"Honda",
               "body":"Hatchback",
               "Model":"Civic",
               "Cylinders":4,
               "odometer":187000,
               "Year":"2012",
               "Color":"Black",
               "State":"QLD",
               "Engine":"1.8L",
               "transmission":"Automatic",
               "VIN":"SHHFK2840CU303120",
               "price":11990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
            },
            {
               "id":19,
               "manufacturId":2,
               "modelId":5,
               "Title":"Jeep Cherokeee Limited KK 2012",
               "Manufacture":"Jeep",
               "body":"SUV",
               "Model":"Cherokee Limited KK",
               "Cylinders":6,
               "Odometer":123150,
               "Year":"2012",
               "Color":"White",
               "State":"QLD",
               "Engine":"3.7L",
               "Transmission":"Automatic",
               "VIN":"",
               "Price":13990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":20,
               "manufacturId":1,
               "modelId":2,
               "Title":"Mazda3 BL Series 2012",
               "Manufacture":"Mazda",
               "body":"Hatchback",
               "Model":"3 BL Series",
               "Cylinders":0,
               "Odometer":147500,
               "Year":"2012",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.0L",
               "Transmission":"Automatic",
               "VIN":"JM0BL10F200344141",
               "Price":12990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)"
			 },
            {
               "id":21,
               "manufacturId":1,
               "modelId":3,
               "Title":"Mazda CX5 2012",
               "Manufacture":"Mazda",
               "body":"SUV",
               "Model":"CX5 KE Series",
               "Cylinders":4,
               "Odometer":226570,
               "Year":"2012",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"2.2L",
               "Transmission":"Automatic",
               "VIN":"JMOKE102100121845",
               "Price":14990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":22,
               "manufacturId":1,
               "modelId":3,
               "Title":"Mazda CX5 2012",
               "Manufacture":"Mazda",
               "body":"SUV",
               "Model":"CX5 KE Series",
               "Cylinders":4,
               "Odometer":179585,
               "Year":"2012",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"2.2L",
               "Transmission":"Automatic",
               "VIN":"0",
               "Price":16990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":23,
               "manufacturId":7,
               "modelId":13,
               "Title":"Subaru Imprezza 2012",
               "Manufacture":"Subaru",
               "body":"Hatchback",
               "Model":"Impreza",
               "Cylinders":4,
               "Odometer":191002,
               "Year":"2012",
               "Color":"Purple",
               "State":"QLD",
               "Engine":"2.0L",
               "Transmission":"Manual",
               "VIN":"JF1GP7KA3GG009199",
               "Price":8990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":24,
               "manufacturId":7,
               "modelId":11,
               "Title":"Subaru XV 2012",
               "Manufacture":"Subaru",
               "body":"Hatchback",
               "Model":"XV",
               "Cylinders":4,
               "Odometer":178701,
               "Year":"2012",
               "Color":"White",
               "State":"QLD",
               "Engine":"2.0L",
               "Transmission":"Automatic",
               "VIN":"MALBB51CMDM540020",
               "Price":15990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":25,
               "manufacturId":3,
               "modelId":7,
               "Title":"Kia Sportage 2013",
               "Manufacture":"Kia",
               "body":"SUV",
               "Model":"Sportage SLI Platinum",
               "Cylinders":4,
               "Odometer":188038,
               "Year":"2013",
               "Color":"Orange",
               "State":"QLD",
               "Engine":"2.4L",
               "Transmission":"Automatic",
               "VIN":"KNAPC812SD7469288",
               "Price":14990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":26,
               "manufacturId":1,
               "modelId":4,
               "Title":"Mazda 6 2015",
               "Manufacture":"Mazda",
               "body":"Wagon",
               "Model":"6",
               "Cylinders":4,
               "Odometer":121678,
               "Year":"2015",
               "Color":"Gray",
               "State":"QLD",
               "Engine":"2.5L",
               "Transmission":"Automatic",
               "VIN":"JM0GJ103200202148",
               "Price":18990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":27,
               "manufacturId":7,
               "modelId":12,
               "Title":"Subaru Forester 2015",
               "Manufacture":"Subaru",
               "body":"SUV",
               "Model":"Forester Boxer",
               "Cylinders":4,
               "Odometer":171818,
               "Year":"2015",
               "Color":"White",
               "State":"QLD",
               "Engine":"2.0L",
               "Transmission":"Automatic",
               "VIN":"JF2SJDKY5FG059316",
               "Price":22990,
               "Horsepower":0,
               "Fuel":"Diesel",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    },
            {
               "id":28,
               "manufacturId":8,
               "modelId":14,
               "Title":"Honda Jazz 2017",
               "Manufacture":"Honda",
               "body":"Hathcback",
               "Model":"Jazz V-TEC",
               "Cylinders":4,
               "Odometer":26678,
               "Year":"2017",
               "Color":"White",
               "State":"QLD",
               "Engine":"1.5L",
               "Transmission":"Automatic",
               "VIN":"MRHGK5850HT02093",
               "Price":17990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Finance":50,
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control"
		    }
	]			
    )
}

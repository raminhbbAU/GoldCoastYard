import axios from "axios";


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
               "manufactureId":2,
               "title":"Cherokee"
            },
            {
               "id":4,
               "manufactureId":3,
               "title":"Rio"
            },
            {
               "id":5,
               "manufactureId":3,
               "title":"Sportage"
            },
            {
               "id":6,
               "manufactureId":4,
               "title":"Tiguan"
            },
            {
               "id":7,
               "manufactureId":5,
               "title":"380"
            },
            {
               "id":8,
               "manufactureId":6,
               "title":"i20"
            },
            {
               "id":9,
               "manufactureId":7,
               "title":"XV"
            },
            {
               "id":10,
               "title":"Forester",
               "manufactureId":7,
            },
            {
               "id":11,
               "title":"Impreza",
               "manufactureId":7,
            },
            {
               "id":12,
               "title":"Jazz",
               "manufactureId":8,
            },
            {
               "id":13,
               "title":"Civic",
               "manufactureId":8,
            },
            {
               "id":14,
               "title":"X-Trail",
               "manufactureId":9,
            },
            {
               "id":15,
               "title":"Cube",
               "manufactureId":9,
            },
            {
               "id":16,
               "title":"RX330",
               "manufactureId":10
            },
            {
               "id":17,
               "title":"RAV4",
               "manufactureId":11
            },
            {
               "id":18,
               "title":"Aurion",
               "manufactureId":11
            },
            {
               "id":19,
               "title":"Camry",
               "manufactureId":11
            },
            {
               "id":20,
               "title":"Tarago",
               "manufactureId":11
            },
            {
               "id":21,
               "title":"A3",
               "manufactureId":12
            },
            {
               "id":22,
               "title":"X1",
               "manufactureId":13
            },
            {
               "id":23,
               "title":"Colorado",
               "manufactureId":14
            },
            {
               "id":24,
               "title":"Swift",
               "manufactureId":15
            },
            {
                "id":25,
                "title":"RX300",
                "manufactureId":10
             },
             {
                "id":26,
                "title":"Estima E-Fore G",
                "manufactureId":11
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
                "title":"jeep"
            }
            ,
            {
                "id":3,
                "title":"Kia"
            }
            ,
            {
                "id":4,
                "title":"Volekswagen"
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
               "modelId":25,
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
               "Overview":"Sunroof\nReverse camera\nBuilt in navigation system\n3 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nMechanical Service Done"
            },
            {
               "id":2,
               "manufacturId":9,
               "modelId":15,
               "title":"Nissan Cube 2005",
               "Manufacture":"Nissan",
               "body":"Minivan",
               "Model":"Cube",
               "Cylinders":4,
               "Horsepower":0,
               "odometer":193000,
               "Year":"2005",
               "Color":"green",
               "State":"QLD",
               "Engine":"1.4 L",
               "transmission":"Automatic",
               "VIN":"6U9000BGZ11669282",
               "price":8990,
               "Fuel":"Petrol",
               "Overview":"3 Months Registration\n1 year warranty\nRoadworthy Certificate\nClear title (no accident history)\nMechanical service done"
            },
            {
               "id":3,
               "manufacturId":3,
               "modelId":5,
               "title":"Kia Sportage 2008",
               "Manufacture":"Kia",
               "body":"SUV",
               "Model":"2008",
               "Cylinders":4,
               "Horsepower":0,
               "odometer":181709,
               "Year":"2008",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.0 L",
               "transmission":"Automatic",
               "VIN":"KNAJE552397567011",
               "price":9990,
               "Fuel":"Petrol",
               "Overview":"3 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done\n"
            },
            {
               "id":4,
               "manufacturId":11,
               "modelId":26,
               "title":"Toyota Estima E-Fore G 2007",
               "Manufacture":"Toyota",
               "body":"People Mover",
               "Model":"MY15",
               "Cylinders":4,
               "Horsepower":0,
               "odometer":147474,
               "Year":"2007",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.4 L",
               "transmission":"Automatic",
               "VIN":"6U900AHR207016707",
               "price":16995,
               "Fuel":"Hybrid",
               "Overview":"3 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":5,
               "manufacturId":1,
               "modelId":1,
               "title":"Mazda 2 2009",
               "Manufacture":"Mazda",
               "body":"Hatchback",
               "Model":"Mazda2",
               "Cylinders":4,
               "Horsepower":0,
               "odometer":154000,
               "Year":"2009",
               "Color":"Green",
               "State":"QLD",
               "Engine":"1.5 L",
               "transmission":"Automatic",
               "VIN":"JM0DE10Y1A0143455",
               "price":8900,
               "Fuel":"Petrol",
               "Overview":"3 Months Registration\n1 year warranty\nRoadworthy certificate\nClear title (no accident history)\nMechanical service done"
            },
            {
               "id":6,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"Mazda3",
               "Cylinders":4,
               "odometer":178000,
               "Year":"2009",
               "Color":"Blue",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"JM0BL10F100217186",
               "price":10990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":7,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda3 2009",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"Mazda3",
               "Cylinders":4,
               "odometer":201662,
               "Year":"2009",
               "Color":"Black",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"",
               "price":8990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\n Roadworthy Certificate\n Clear Title (no accident history)\nCruise Control\n Mechanical Service Done"
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
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":9,
               "manufacturId":15,
               "modelId":24,
               "title":"Suzuki Swift 2008",
               "Manufacture":"Suzuki",
               "body":"Sedan",
               "Model":"Swift",
               "Cylinders":0,
               "odometer":166966,
               "Year":"2008",
               "Color":"Black",
               "State":"QLD",
               "Engine":"0",
               "transmission":"Automatic",
               "VIN":"0",
               "price":8490,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)Cruise Control\nMechanical Service Done"
            },
            {
               "id":10,
               "manufacturId":11,
               "modelId":18,
               "title":"Toyota Aurion 2009",
               "Manufacture":"Toyota",
               "body":"Sedan",
               "Model":"Aurion",
               "Cylinders":6,
               "odometer":199875,
               "Year":"2009",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"3.5 L",
               "transmission":"Automatic",
               "VIN":"6T153KK400X322596",
               "price":8490,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":11,
               "manufacturId":4,
               "modelId":6,
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
               "Overview":"Log Books\n6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nMechanical Service Done"
            },
            {
               "id":12,
               "manufacturId":12,
               "modelId":21,
               "title":"Audi A3 2010",
               "Manufacture":"Audi",
               "body":"Sedan",
               "Model":"A3",
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
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":13,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 2010",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"3 Maxx Sport BL",
               "Cylinders":4,
               "odometer":178000,
               "Year":"2010",
               "Color":"Red",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"JM0BL10F100161399",
               "price":7990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            },
            {
               "id":14,
               "manufacturId":13,
               "modelId":22,
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
               "price":16990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":""
            },
            {
               "id":15,
               "manufacturId":1,
               "modelId":2,
               "title":"Mazda 3 2011",
               "Manufacture":"Mazda",
               "body":"Sedan",
               "Model":"Mazda 3",
               "Cylinders":4,
               "odometer":110623,
               "Year":"2011",
               "Color":"Silver",
               "State":"QLD",
               "Engine":"2.0",
               "transmission":"Automatic",
               "VIN":"JM0BL10F200317847",
               "price":12990,
               "Horsepower":0,
               "Fuel":"Petrol",
               "Overview":"6 Months Registration\n1 Year Warranty\nRoadworthy Certificate\nClear Title (no accident history)\nCruise Control\nMechanical Service Done"
            }
         ]
    )
}

import axios from "axios";


export function loadAvailableCars():any[] {

    //let res = await axios.get('./Stock Data.json');
    console.log(carRepo);
    return carRepo();
}


 function carRepo():any {
    return (
        [
            {
                "id": 1,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"Wagon",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"White",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Sample Text Sample Text"
            }
            ,
            {
                "id": 2,
                "title" : "Toyota Crolla 2016",
                "Manufacture" :"Toyota",
                "body" :"Sedan",
                "Model":"MY15",
                "Cylinders":8,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2016",
                "Color":"Black",
                "State":"VIC",
                "Engine":"xxx",
                "transmission":"manual",
                "VIN":"",
                "price":23000,
                "Fuel":"Electricity",
                "Overview":"Sample Text Sample Text"
            }
            ,
            {
                "id": 3,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"",
                "Color":"",
                "State":"",
                "Engine":"",
                "transmission":"manual",
                "VIN":"",
                "price":23000,
                "Fuel":"Gasoline",
                "Overview":""
            }
            ,
            {
                "id": 4,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"",
                "Color":"",
                "State":"",
                "Engine":"",
                "transmission":"manual",
                "VIN":"",
                "price":23000,
                "Fuel":"Gasoline",
                "Overview":""
            }
            ,
            {
                "id": 5,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"",
                "Color":"",
                "State":"",
                "Engine":"",
                "transmission":"manual",
                "VIN":"",
                "price":23000,
                "Fuel":"Gasoline",
                "Overview":""
            }
            ,
            {
                "id": 6,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"",
                "Color":"",
                "State":"",
                "Engine":"",
                "transmission":"manual",
                "VIN":"",
                "price":23000,
                "Fuel":"Gasoline",
                "Overview":""
            }
        ]
    )
}
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
                ]
            }
            ,  

        ]
    )
}


function carModel():any[] {
    return (
        [
            {
                "id":1,
                "manufactureId":1,
                "title":"A4"
            }
            ,
            {
                "id":2,
                "manufactureId":1,
                "title":"A3"
            }
            ,
            {
                "id":3,
                "manufactureId":1,
                "title":"A5"
            }
            ,
            {
                "id":4,
                "manufactureId":1,
                "title":"Q3"
            }
            ,
            {
                "id":5,
                "manufactureId":1,
                "title":"Q5"
            }
            ,
            {
                "id":6,
                "manufactureId":2,
                "title":"Mustang"
            }
            ,
            {
                "id":7,
                "manufactureId":2,
                "title":"Everest"
            }
            ,
            {
                "id":8,
                "manufactureId":2,
                "title":"Territory"
            }
            ,
            {
                "id":9,
                "manufactureId":2,
                "title":"Falcon"
            }
            ,
            {
                "id":10,
                "manufactureId":2,
                "title":"Ranger"
            }
            
        ]
    )
}

function carManufacture():any[] {
    return (
        [
            {
                "id":1,
                "title":"Audi"
            }
            ,
            {
                "id":2,
                "title":"Ford"
            }
            ,
            {
                "id":3,
                "title":"Holden"
            }
            ,
            {
                "id":4,
                "title":"Honda"
            }
            ,
            {
                "id":5,
                "title":"Hyundai"
            }
            ,
            {
                "id":6,
                "title":"Kia"
            }
            ,
            {
                "id":7,
                "title":"Mitsubishi"
            }
            ,
            {
                "id":8,
                "title":"Nissan"
            }
            ,
            {
                "id":9,
                "title":"Toyota"
            }
            ,
            {
                "id":10,
                "title":"Volkswagen"
            }
            
        ]
    )
}

 function carRepo():any[] {
    return (
        [
            {
                "id": 1,
                "manufacturId":2,
                "modelId":6,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"Wagon",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2015",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
            }
            ,
            {
                "id": 2,
                "manufacturId":2,
                "modelId":6,
                "title" : "Toyota Crolla 2016",
                "Manufacture" :"Toyota",
                "body" :"Sedan",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2015",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
            }
            ,
            {
                "id": 3,
                "manufacturId":1,
                "modelId":1,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2015",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
            }
            ,
            {
                "id": 4,
                "manufacturId":1,
                "modelId":2,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2015",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"

            }
            ,
            {
                "id": 5,
                "manufacturId":1,
                "modelId":2,
                "title" : "2015 Audi A5 8T MY15",
                "Manufacture" :"Audi",
                "body" :"SUV",
                "Model":"MY15",
                "Cylinders":0,
                "Horsepower":0,
                "odometer":154000,
                "Year":"2015",
                "Color":"White",
                "State":"QLD",
                "Engine":"2Lit",
                "transmission":"manual",
                "VIN":"23123123123123123123",
                "price":23000,
                "Fuel":"Petrol",
                "Overview":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"

            }
            ,
            {
                "id": 6,
                "manufacturId":1,
                "modelId":3,
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

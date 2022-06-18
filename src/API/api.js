import axios from "axios";


const loadAvailableCars =  async() => {

    let res = await axios.get('./Stock Data.json');
    return res;
}



export {loadAvailableCars};
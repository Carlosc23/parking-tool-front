const url = 'https://parking-tool-back.herokuapp.com/parking_tool/api/v1.0/actual/cars';
const proxyurl = "https://cors-anywhere.herokuapp.com/";


export const getData = () => fetch(proxyurl +url)
.then(data=>{return data.json()})
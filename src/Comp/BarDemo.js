import React, {Component} from 'react';
import { Line,Bar } from 'react-chartjs-2';


// const Http = new XMLHttpRequest();
const url = 'https://parking-tool-back.herokuapp.com/parking_tool/api/v1.0/actual/cars';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
// Http.open("GET",url);
// Http.send();

// Http.onreadystatechange=function(){if(this.readyState==4 && this.status==200){
//     console.log(Http.responseText);
// }}

const costo=1;


var contadores= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class BarDemo extends Component {


  constructor(props) {
    super(props);

    this.state = {
      datos: [],
    };
  }




  render() {

    const { datos } = this.state.datos;
   // console.log(this.state.datos);
    var key,prueba,count=0;
     for (key in this.state.datos.cars){
 //console.log(this.state.datos.cars)
     //  console.log(this.state.datos.cars[key])
             var mio = this.state.datos.cars[key]
             //console.log(mio.time.check_in)
             var tiempo = mio.time.check_in
             var pruebadate = new Date(tiempo)
           
           console.log(pruebadate.getDate())
             var hora = pruebadate.getHours()
             contadores[hora]=contadores[hora]+1
       //    console.log(contadores)
            //console.log(contadores.map(function(x) { return x * costo; }))
     } 
 
     const datadeprueba = {
       labels: ['00','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
       datasets: [
           {
             label: 'Cantidad de dinero ganado por horas',
             fill: false,
             lineTension: 0.1,
             backgroundColor: 'rgba(75,192,192,0.4)',
             borderColor: 'rgba(75,192,192,1)',
             borderCapStyle: 'butt',
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: 'miter',
             pointBorderColor: 'rgba(75,192,192,1)',
             pointBackgroundColor: '#fff',
             pointBorderWidth: 1,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
             pointHoverBorderColor: 'rgba(220,220,220,1)',
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: contadores.map(function(x) { return x * costo; })
           }
         ]
   }
 

    return (
      <div id="graficouno">
        <Bar ref="chart"  data={datadeprueba}
          height={350}
          width={100}
          backgroundColor="black"
          options={{ maintainAspectRatio: false }}

        />
      </div>
    );
  }


  
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    //console.log(datasets[0].data);
    
    fetch(proxyurl +url)
    .then(data=>{return data.json()})
    .then(res=>{
      this.setState({datos:res})
  //  console.log("llegue")
  })
  }
}


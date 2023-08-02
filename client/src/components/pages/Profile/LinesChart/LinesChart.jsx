import React, { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


export default function LinesChart(props) {
    let {city} = props;
    const [weather, setWeather] = useState({});
    
    //1) Llamada a weather api para obtener temperaturas exteriores
    useEffect(() => {
        const weatherInfo = async(searchCity="madrid", countryCode="ES") => {
            // get "lat" and "lon" from a city name:
            const coordData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity},${countryCode}&appid=${apiKey}`);
            const coordResponse = await coordData.json();
            const lat = coordResponse[0].lat;
            const lon = coordResponse[0].lon;
    
            // get weather info from "lat" and "lon":
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            const weatherResponse = await weatherData.json();

            console.log("weather response: ", weatherResponse);
            setWeather(weatherResponse);
        };
        weatherInfo(city);
    }, []);

    //2) Inventar temperaturas interiores
    
    
    var indoorTemperatures = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
    var outsideTemperatures = [20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 0, 56];

    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var days2 = ["5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","1","2","3","4"];
    var hours = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];
    var inTemp = [27.4, 27.6, 28.7, 28.9, 29.1, 28.4, 26.8, 25.2, 24.5, 23.8, 24, 24.2, 22.6, 21.9, 21.2, 19.6, 18.9, 21.4, 23, 23.7, 25.3, 26.9, 28.5, 28.3, 28.1];
    var outTemp = [34, 34, 35, 35, 35, 34, 32, 30, 29, 28, 28, 28, 26, 25, 24, 22, 21, 24, 26, 27, 29, 31, 33, 33, 33];

    /* function setIndoorTemperatures() {
        let maxPercentage = 0.2;
        let percentage;
        let x;
        for(let i=0; i<outTemp.length; i++){
            console.log(i);
            if(i<12){
                x = 12 - i;
                percentage = (maxPercentage * x) / 12;
                
            } else {
                x = i - 12; 
                percentage = (maxPercentage * x) / 12;
            }
            console.log(percentage);
            inTemp.push(outTemp[i] * percentage);
        }
        console.log("temps; ", inTemp);
        return inTemp;
    } */

    


    var data = {
        labels: hours,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Temperaturas interiores',
                data: inTemp,
                tension: 0.3,
                fill : true,
                borderColor: 'rgb(6, 154, 142)',
                backgroundColor: 'rgba(6, 154, 142, 0.3)',
                pointRadius: 3,
                pointBorderColor: 'rgba(6, 154, 142)',
                pointBackgroundColor: 'rgba(6, 154, 142)',
            },
            {
              label: 'Temperaturas exteriores',
              data: outTemp,
              tension: 0.3,
              fill : true,
              borderColor: "#E19E35",
              backgroundColor: 'rgba(225, 158, 53, 0.3)',
              pointRadius: 3,
              pointBorderColor: "#E19E35",
              pointBackgroundColor: "#E19E35",
          }
        ],
    };
    
    var options = {
        scales: {
            y: {
                ticks: { color: "#000201"},
                grid: {
                    color: "#e5e6e6"
                }
            },
            x: {
                ticks: { color: "#000201"},
                grid: {
                    color: "#e5e6e6"
                }
            }
        },
        plugins: {
            legend: {
                display: true
            }
        }
    };

    return <Line data={data} options={options}/>
}
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

function getRandomColor() {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    var color = '';
    for (var i = 0; i < 50; i++) {
    }
    return colorArray;
        }

const Plots = () => {
    const [recovered, setRecovered] = useState([])
    const [recoveredState, setRecoveredState] = useState([])




    useEffect(() => {
            const coronaData = async () => {
            let response = await fetch(`https://corona.lmao.ninja/v2/states`)

            let coronaData = await response.json();
            setRecoveredState(coronaData.map(state => {
                return state.state
            }))
            //setMovies(data.Search)
            setRecovered(coronaData.map((state) => {
                return state.recovered
            }))




        }
        coronaData();

    }, [])

    const data = {
        labels: recoveredState,
        datasets: [
            {   
                background: '#f8f9fa',
                label: '# of Recovered',
                data: recovered,
                backgroundColor: getRandomColor(),
                borderColor: '#ffff',
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className='header'>
                <h1 className='title text-center'>Corona Virus Data</h1>
                    <h3 className="text-center">State Recovery Numbers</h3>
                <div className='links mt-5'>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
            <Doughnut data={data} className='w-75 h-75' />
            </div>
        </>
    )
}

export default Plots
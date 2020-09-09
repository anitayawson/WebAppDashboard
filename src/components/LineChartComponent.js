import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Clicks",
                data: [50, 60, 100, 80, 250, 300]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Activity Line Chart',
                    align: 'left',
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['7 Jun', '11 Jun', '15 Jun', '21 Jun', '25 Jun', '29 Jun'],
                }
            },
        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={200} width={520} />
            </div>
        );
    }
}
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
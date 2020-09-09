import React, { Component } from 'react';
import Navbar from './navbar'

import SummaryComponent from './SummaryComponent'
import LineChartComponent from './LineChartComponent'
import TimelineComponent from './TimelineComponent'
import ActiveMembersComponent from './ActiveMembersComponent'

export default class Main extends Component {
    render() {
        return (
            <div style={{backgroundColor: "whitesmoke"}}>
                <Navbar />
                <div style={{ margin: "100px 110px 50px 110px"}}>
                    <div class="grid-container">
                        <div class="grid-item first"><SummaryComponent/></div>
                        <div class="grid-item second"><LineChartComponent/></div>
                        <div class="grid-item third"><ActiveMembersComponent/></div>
                        <div class="grid-item fourth"><TimelineComponent/></div>
                    </div>
                </div>
            </div>
        )
    }
}

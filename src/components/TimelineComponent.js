import React, { Component } from 'react'

export default class TimelineComponent extends Component {
    render() {
        return (
            <div>
                <ul class="list-group">
                    <div style={{ margin: "15px 0px 15px 20px" }}>
                        Activity Timeline
                </div>
                    <li class="list-group-item" style={{ display: "flex", flexDirection: "row" }}>
                        <div class="label income">INCOME</div>
                        <div>
                            <p style={{ fontWeight: "bold", marginLeft: 30, marginRight: 221, marginBottom: 0 }}>Online Payment</p>
                            <p style={{ fontSize: 10, marginLeft: 30, marginBottom: 0 }}>by Ahmed Zaky</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h5 style={{ marginBottom: 0 }}>$165</h5>
                            <p style={{ fontSize: 10, marginBottom: 0, position: "relative", left: 10 }}>9:12 am </p>
                        </div>
                    </li>
                    <li class="list-group-item" style={{ display: "flex", flexDirection: "row", backgroundColor: "whitesmoke"}}>
                        <div class="label downloads">DOWNLOADS</div>
                        <div>
                            <p style={{ fontWeight: "bold", marginLeft: 30, marginRight: 190, marginBottom: 0 }}>intro_tutorial.mov</p>
                            <p style={{ fontSize: 10, marginLeft: 30, marginBottom: 0 }}>by Creative Minds</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h5 style={{ marginBottom: 0 }}>200GB</h5>
                            <p style={{ fontSize: 10, marginBottom: 0, position: "relative", left: 18 }}>10:30 am </p>
                        </div>
                    </li>
                    <li class="list-group-item" style={{ display: "flex", flexDirection: "row" }}>
                        <div class="label views">NEW VIEWS</div>
                        <div>
                            <p style={{ fontWeight: "bold", marginLeft: 30, marginRight: 170, marginBottom: 0 }}>Photoshop Resources</p>
                            <p style={{ fontSize: 10, marginLeft: 30, marginBottom: 0 }}>Epic Projects </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h5 style={{ marginBottom: 0,position: "relative", left: 18}}>219</h5>
                            <p style={{ fontSize: 10, marginBottom: 0, position: "relative", left: 5}}>12:45 pm </p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

{/* <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul > */}
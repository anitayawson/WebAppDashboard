import React, { Component } from 'react'

import Bill from '../images/bill.jpg'
import Awal from '../images/awal.png'
import Avatar from '../images/avatar.jpg'
import Joseph from '../images/joseph.jpg'
import Anita from '../images/anita.png'
import Selasi from '../images/selasi.jpg'

export default class ActiveMembersComponent extends Component {
    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <table class="table" style={{ height: "100%", width: "100%", position: "relative"}}>
                    <thead>
                        <tr>
                            <th scope="col">Top Active Members</th>
                            <th scope="col" style={{ textAlign: "center", backgroundColor: "#dfe9ed" }}>Views</th>
                            <th scope="col" style={{ textAlign: "center", backgroundColor: "#dfe9ed" }}>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img class="memberprofilepic" src={Bill} />
                                </div>
                                <div>
                                    <td scope="row" style={{ paddingBottom: 0 }}>Bill A. Forman</td>
                                    <p style={{ fontSize: 10, paddingLeft: 10, marginBottom: 0 }}>Art Director</p>

                                </div>
                            </div>

                            <td style={{ textAlign: "center" }}>200</td>
                            <td style={{ textAlign: "center" }}>10</td>
                        </tr>
                        <tr>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img class="memberprofilepic" src={Awal} />
                                </div>
                                <div>
                                    <td scope="row" style={{ paddingBottom: 0 }}>Mubarak Awal</td>
                                    <p style={{ fontSize: 10, paddingLeft: 10, marginBottom: 10 }}>Mobile App Developer</p>
                                </div>
                            </div>

                            <td style={{ textAlign: "center" }}>150</td>
                            <td style={{ textAlign: "center" }}>8</td>
                        </tr>
                        <tr>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img class="memberprofilepic" src={Joseph} />
                                </div>
                                <div>
                                    <td scope="row" style={{ paddingBottom: 0 }}>Joseph Antwi</td>
                                    <p style={{ fontSize: 10, paddingLeft: 10, marginBottom: 10 }}>Geography tutor</p>
                                </div>
                            </div>

                            <td style={{ textAlign: "center" }}>342</td>
                            <td style={{ textAlign: "center" }}>21</td>
                        </tr>
                        <tr>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img class="memberprofilepic" src={Anita} />
                                </div>
                                <div>
                                    <td scope="row" style={{ paddingBottom: 0 }}>Anita Yawson</td>
                                    <p style={{ fontSize: 10, paddingLeft: 10, marginBottom: 10 }}>Creative Director</p>
                                </div>
                            </div>

                            <td style={{ textAlign: "center" }}>65</td>
                            <td style={{ textAlign: "center" }}>15</td>
                        </tr>
                        <tr>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img class="memberprofilepic" src={Selasi} />
                                </div>
                                <div>
                                    <td scope="row" style={{ paddingBottom: 0 }}> Selasi Kudolo</td>
                                    <p style={{ fontSize: 10, paddingLeft: 10, marginBottom: 10 }}>Gamer</p>
                                </div>
                            </div>
                            <td style={{ textAlign: "center" }}>324</td>
                            <td style={{ textAlign: "center" }}>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

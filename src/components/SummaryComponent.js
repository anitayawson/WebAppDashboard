import React, { Component } from 'react'
import { BsCloudDownload, FiUsers, FaRegComments, AiOutlineDollarCircle } from 'react-icons/all'

export default class SummaryComponent extends Component {
    render() {
        return (
            <div>
                <div class="heading">Summary of This Month</div>
                <div style={{ display: "flex" }}>
                    <div class="summary-grid one">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <AiOutlineDollarCircle size={50} />
                            <div>
                                <h3 style={{ marginLeft: 45, fontWeight: "bold"}}>$7,983</h3>
                                <h6 style={{ marginLeft: 45 }}>INCOME</h6>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <p style={{ fontSize: 12 }}>Cillum anim id consectetur sint sit fugiat mollit.</p>
                    </div>
                    <div class="summary-grid two">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <BsCloudDownload size={50} />
                            <div>
                                <h3 style={{ marginLeft: 45, fontWeight: "bold" }}>1,402</h3>
                                <h6 style={{ marginLeft: 45 }}>DOWNLOADS</h6>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <p style={{ fontSize: 12 }}>Cillum anim id consectetur sint sit fugiat mollit.</p>
                    </div>
                    <div class="summary-grid three">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <FiUsers size={50} />
                            <div>
                                <h3 style={{ marginLeft: 45, fontWeight: "bold" }}>800</h3>
                                <h6 style={{ marginLeft: 45 }}>NEW VIEWS</h6>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <p style={{ fontSize: 12 }}>Cillum anim id consectetur sint sit fugiat mollit.</p>
                    </div>
                    <div class="summary-grid four">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <FaRegComments size={50} />
                            <div>
                            <h3 style={{ marginLeft: 45, fontWeight: "bold"}}>400</h3>
                            <h6 style={{ marginLeft: 45 }}>COMMENTS</h6>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <p style={{ fontSize: 12 }}>Cillum anim id consectetur sint sit fugiat mollit.</p>
                    </div>
                </div>
            </div>
        )
    }
}

import React from 'react'
import Profile from '../images/profile.png'
import { slide as Menu } from "react-burger-menu";
import '../navbar.css';

export default function navbar() {
    return (
        <div class="row">
            <div class="container-fluid">
                <div class="col-xl-2 col-lg-2" style={{ marginLeft: "-15px" }}>
                    <Menu>
                        <div style={{textAlign: "center", backgroundColor: "#464d4f", color: "white", paddingTop: 20, paddingBottom: 20}}><h4>Freelancer</h4></div>
                        <div style={{color: "#464d4f", paddingLeft: "1.5em", paddingBottom: 10, paddingTop: 20}}><h5 style={{fontWeight: "bold"}}>HOME</h5></div>
                        <a href="/" className="menu-item"><i class="list-icons fas fa-search"></i> Overview</a>
                        <a href="/" className="menu-item"><i class="list-icons far fa-user"></i> Members</a>
                        <a href="/" className="menu-item"><i class="list-icons far fa-folder-open"></i> Reports<span class="badge badge-light">4</span></a>
                        <a href="/" className="menu-item"><i class="list-icons far fa-calendar-alt"></i> Schedule</a>
                        <a href="/" className="menu-item"><i class="list-icons far fa-file"></i> Invoices<span class="badge badge-light">11</span></a>
                        <a href="/" className="menu-item"><i class="list-icons fas fa-bullhorn"></i> Marketing</a>
                        <a href="/" className="menu-item"><i class="list-icons fas fa-cog"></i> Settings <span class="badge badge-light">1</span></a>
                    </Menu>
                </div>

                <nav class="nav navbar navbar-light navigation">
                    <div class="navbar-text col-lg-8 col-xl-8">
                        <input type="text" class="form-control" style={{ width: 1030, position: "relative", right: 150 }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="dropdown">
                        <img class="profile__img" src={Profile} alt="Name" />
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Jonathan Doe
                            </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Account settings</a>
                            <a class="dropdown-item" href="#">Log out </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

import React from "react";
import "./info.css"

function Info() {

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="picture-container col-md-3">
                    <img alt="profile" className="profile" src="/profile.jpg" />
                    <span>Name: Mike Lang</span><br></br>
                    <span>Location: Danbury, CT </span><br></br>
                    <span>Email: Michaellang2525@yahoo.com</span>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12 about-container">
                            <h5>About Me</h5>
                            <p>
                                My name is Michael Lang and I currently reside in Danbury, CT with my wife and two dogs. I have a Bachelors degree in Finance from
                                Quinnipiac University, and my Masters in Information Systems from Marist College with a dual concentration in Systems Management and Data Analytics.
                                While studying at Quinnipiac University, I played two years on the men’s baseball team. 
                                In my spare time I enjoy golfing, watching movies, and playing with my dog.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 about-container">
                            <h5>Relevent Technical Compentencies</h5>
                            <p>
                            HTML5, CSS3, JavaScript, React, jQuery, Bootstrap, Express.js, Node, MongoDB, Mongoose, MySQL, Sequelize, APIs (creation/utilization), AJAX, Git Bash. 
                            <br></br><br></br>Additionally: Microsoft Access, Excel, Visio, VBA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 job-container">
                    <h5>Most Recent Position</h5>
                    <div className="row">
                        <div className="col-md-11 job">
                            <span>Rockit Solutions</span><br></br>
                            <span className="details">Systems Analyst</span><br></br>
                            <span className="details">Period: Feb. 2017 - Current</span><br></br><br></br>
                            <span className="resp">Responsibilities</span>
                            <ul>
                                <li>Designed, built, and maintained databases for normalization of bank data, tax reconciliation, and general operational support</li>
                                <li>Automated system trade processing utilizing a Microsoft Access database</li>
                                <li>Responsible for implementing and maintaining custodian data feeds</li>
                                <li>Automated morning data download process using various scripting tools</li>
                            </ul>
                            <span>Other Positions</span>
                            <ul>
                                <li>Data Analyst (Rockit Solutions)</li>
                                <li>Procurement Analyst (USI Insurance)</li>
                                <li>Claims Representative (Allstate Insurance)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
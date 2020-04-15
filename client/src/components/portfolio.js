import React from "react";
import "./portfolio.css"

function Portfolio() {

    return (
        <div className="col-md-10 projects-container text-center">
            <div className="project"><h2 className="proj-head"><img className="proj" alt="employee" src="./employee.png"></img><br></br><a className="external-link" href="https://serene-savannah-13108.herokuapp.com/">Employee Management</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="soccer" src="./soccer_ball.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/Project_1">Premier League Zone</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="calendar" src="./calendar.png"></img><br></br><a className="external-link" href="https://shrouded-hollows-79683.herokuapp.com/">My Calendar App</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="warrior" src="./warrior.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/unit-4-game">Hero Battle</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="burger" src="./burger.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/burger">Create a Burger</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="train" src="./train.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/Train_Schedule">Train Scheduler</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="chelsea" src="./chelsea.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/TriviaGame">Chelsea Trivia</a></h2></div>
            <div className="project"><h2 className="proj-head"><img className="proj" alt="article" src="./article.png"></img><br></br><a className="external-link" href="https://github.com/Mikelang25/article_scraper">Screen Rant Scaper</a></h2></div>
        </div>
    );
}

export default Portfolio;
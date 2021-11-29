import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'take-my-recipe',
            description: 'MySQL/Express/Handlebars/SASS',
            link: "https://take-my-recipe.herokuapp.com/",
            repo: "https://github.com/jaya1983/TakeMyRecipe"
        },
        {
            name: 'book-lovers',
            description: 'JQuery/API/Materialize',
            link: "https://jaya1983.github.io/book-lovers/",
            repo: "https://github.com/jaya1983/book-lovers"
        },
              {
            name: 'budget-tracker',
            description: 'HTML/CSS',
            link: "https://cryptic-crag-86890.herokuapp.com/",
            repo: "https://github.com/jaya1983/budget-tracker"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://jaya1983.github.io/weather-dashboard/",
            repo: "https://github.com/jaya1983/weather-dashboard"
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://jaya1983.github.io/quiz/",
            repo: "https://github.com/jaya1983/quiz"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://jaya1983.github.io/PasswordGenerator/",
            repo: "https://github.com/jaya1983/PasswordGenerator"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://radiant-taiga-33286.herokuapp.com/notes",
            repo: "https://github.com/jaya1983/note-taker"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://jaya1983.github.io/workday-scheduler/",
            repo: "https://github.com/jaya1983/workday-scheduler"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;

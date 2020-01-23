import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
    const { title, image, description, link} = props.project; //advance JS destruction syntax
        return(
            <div style= {{display: 'inline-block' , width:300 , margin:10}}>
                <h3> {title} </h3>
                <img src={image} alt='profile' style = {{ width:200 , height:120 }} />
                <p> {description} </p>
                <a href={link}>{link}</a>
            </div>  
        )
}

const Projects = () =>  (   //we can remove return method and do a inline return because there is only return method and nothing else.
 
    
        <div>
            <h2>Highlighted Projects</h2>
            <div>
               {PROJECTS.map((pr,index) => (
                        
                            <Project key={index} project={pr} />
                        ))
               }
            </div>
        </div>
    )



export default Projects;
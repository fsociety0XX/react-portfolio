import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {
    
        const {link,image} = props.sp;

        return(
            <div style= {{display: 'inline-block' , width:300 , margin:10}}>
                <a href={link}>
                <img src={image} alt={link} style = {{ width:35 , height:35, margin: 10 }}/>
                </a>
                
            </div>
        )
    
}

const SocialProfiles = () => (

    <div >
    <h2>Contact me</h2>
    {
        SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
            
                <SocialProfile key={SOCIAL_PROFILE.id} sp={SOCIAL_PROFILE}/>
        })
    }
</div>

)




export default SocialProfiles;
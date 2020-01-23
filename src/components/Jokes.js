import React, { Component } from 'react'


class Jokes extends Component{
    
    state = { joke : {} , jokes: []};

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then( response => response.json())
        .then( json => this.setState({joke : json}))
        .catch(error => alert(error.message)); 
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then( response => response.json())
        .then( json => this.setState({jokes : json}))
        .catch(error => alert(error.message));
    }

    render(){
        
        const { setup , punchline} = this.state.joke;
        return(
            <div>
                
                <h2>today's joke</h2>
        <p>{setup} <em>{punchline}</em></p>

        <hr />
        <h3>want more jokes?</h3>
        <button onClick= {this.fetchJokes}>Click me!</button>
        {
            this.state.jokes.map(joke => {
                const {id,setup,punchline} = joke;

                return( 
                    <p key={id}>{setup} <em>{punchline}</em></p>
                )
            })
        }
            </div>
        )
    }
}

export default Jokes;
import React from 'react'

import './home.css';

export default class Home extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (

            <div id='mainHome' role='region'>

                <h1 className='hiThere' id='colorIconBlk'>Hi there, I'm Tyler!</h1>

                <br />

                <div className='welcomeSection' role='article'>
                    <p className='homeContent' >I am a fullstack web developer ready to get to work and build something amazing!</p>

                    <p className='homeContent' role='article'>
                        Please check out my site and projects. I'm looking forward to hearing from you so we can get started.
                    </p>

                </div>

            </div>
        )
    }
}
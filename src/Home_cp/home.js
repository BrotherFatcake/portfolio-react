import React from 'react'

import './home.css';

export default class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        let isVisible = 'hide mainHome';

        if (this.props.mainVisible === 0) {
            isVisible = 'display mainHome';
        }

        return (

            <div id='mainHome' className={isVisible}>

                <div className='hiThere' id='colorIconBlk'>Hi there, I'm Tyler!</div>

                <br />

                <div className='welcomeSection' role="article">
                    <p className='homeContent' >I'm a fullstack web developer ready to get to work and build something amazing!</p>

                    <p className='homeContent' >                        
                    Please explore my site, I'm looking forward to hearing from you so we can get started.
                    </p>

                </div>

            </div>
        )
    }
}
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="overflow-auto">
                <footer className = "footer" >
                    <span className="text-muted">All Rights Reserved to Recruit Right</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent

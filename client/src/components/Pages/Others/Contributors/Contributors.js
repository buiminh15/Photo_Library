import React from 'react'
import './Contributors.css'

class Contributors extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            contributors: {
                current: [
                    {
                        avatar: "https://avatars2.githubusercontent.com/u/21976188?s=300",
                        name: "Will Adams",
                        desctiption: "Developer",
                    },
                    {
                        avatar: "https://avatars2.githubusercontent.com/u/21976188?s=300",
                        name: "Will Adams",
                        desctiption: "Developer",
                    },
                    {
                        avatar: "https://avatars2.githubusercontent.com/u/21976188?s=300",
                        name: "Will Adams",
                        desctiption: "Developer",
                    },
                ],
                others: [
                    {
                        avatar: "https://avatars2.githubusercontent.com/u/21976188?s=300",
                        name: "Will Adams",
                        desctiption: "Developer",
                    },
                    {
                        avatar: "https://avatars2.githubusercontent.com/u/21976188?s=300",
                        name: "Adams",
                        desctiption: "Developer",
                    },
                ],
            }
        }
    }

    render = () => (
        <div className="Contributors-panel flex-column w100 h100 mt50 self-hoz-center no-select">
            <div className="contributors-current flex-row flex-wrap pa-4 hr">
                {this.state.contributors.current.map((person, index) => (
                    <div key={index} className="current-person flex-1 flex-column hoz-center py-4 amb-1">
                        <div className="current-avatar">
                            <img src={person.avatar} alt={person.name}></img>
                        </div>
                        <div className="current-name">{person.name}</div>
                        <div className="current-description">{person.desctiption}</div>
                    </div>
                ))}
            </div>
            <h2 className="self-hoz-center">Other Contributors</h2>
            <div className="Contributors-other flex-column amb-3">
                {this.state.contributors.others.map((person, index) => (
                    <div key={index} className="other-person flex-row mx-3 amr-4 flex-row hoz-center pa-2">
                        <div className="other-avatar-text flex-row center">{person.name[0]}</div>
                        <div className="other-name">{person.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contributors

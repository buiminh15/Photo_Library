import React from 'react'

class Settings extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="Settings-panel flex-column w80 h100 self-hoz-center">
            <h2>Settings</h2>
            <div className="Settings-item flex-row hoz-center amr-3">
                <div className="Settings-name">Select Theme</div>
                <div className="Settings-value">
                    <select defaultValue={"0"}>
                        <option default="0">Default</option>
                        <option default="1">Dard</option>
                        <option default="2">Light</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Settings

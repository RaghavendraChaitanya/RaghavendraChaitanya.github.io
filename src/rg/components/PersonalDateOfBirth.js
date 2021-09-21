import React from "react";

class PersonalDateOfBirth extends React.Component {
    constructor() {
        super();
        this.status = {};
    }

    render() {
        return (
            <div>
                <h2
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 22
                    }}
                >
                    Date of Birth
                </h2>
                <h3
                    style={{
                        margin: 3,
                        padding: 0,
                        fontWeight: "normal"
                    }}
                >
                    07-Jul-1990
                </h3>
            </div>
        );
    }
}

export default PersonalDateOfBirth;

import React from "react";

import { List } from "semantic-ui-react";

class Work1 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content style={{ paddingLeft: 10 }}>
                    <h2
                        style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 22
                        }}
                    >
                        Full stack Java Developer, DST World Wide Services India PVT Ltd. - Hyderabad, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Sep 2016 - Present (4 years 1 month)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Developing front end pages and Reusable UI components using Angular.
                        </List.Item>
                        <List.Item as="li">
                            Developing new features in the backend using Spring framework (Spring Boot)
                        </List.Item>
                        <List.Item as="li">
                            Worked on integration with different back end systems like mainframes using REST Web services
                        </List.Item>
                        <List.Item as="li">
                            Worked on migrating the applications from managed servers to SS&amp;C private cloud
                        </List.Item>
                        <List.Item as="li">
                            Setting up CI/CD pipelines using Jenkins
                        </List.Item>
                        <List.Item as="li">
                            Setting up Code Quality checks using Sonar
                        </List.Item>
                        <List.Item as="li">
                            Implementing Unit, Integration and Acceptance testing using Junit, Spring Test Framework
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default Work1;

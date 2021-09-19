import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import { segmentStyleLeftFirst } from "./styles/default";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeftFirst}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="user" size="large" /> Profile
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 15
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <p>
                                An experienced Java developer with a strong interest in projects that require both conceptual,
                                analytical thinking and fully committed in designing and developing innovative applications.
                                <br />
                                <br />
                                My skill set includes:
                            </p>
                            <ul style={{ marginLeft: -25, marginBottom: 10 }}>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Languages:</b> Java, HTML, Prime faces, Typescript, CSS
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Frameworks:</b> Spring boot, Angular, JSF, Hibernate
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Databases:</b> Oracle, DB2.
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Build Tools:</b> Maven
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>CI/CD: </b> Jenkins
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Container: </b> Docker
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Cloud Technologies: </b> Basics of AWS (EC2, RDS, S3),Kubernetes
                                </li>
                                <li style={{ marginBottom: 5 }}>
                                    <b>Methodologies: </b> Agile(Scrum), Waterfall<br/><br/>
                                </li>
                            </ul>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default Profile;

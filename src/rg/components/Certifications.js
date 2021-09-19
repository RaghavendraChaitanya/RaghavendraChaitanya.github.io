import React from "react";

import { Segment, Icon, List } from "semantic-ui-react";

import Work1 from "./Work1";
import Work2 from "./Work2";

import { segmentStyleLeft } from "./styles/default";

class WorkWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="certificate" size="large" /> Certifications
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <h2
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 22
                                }}
                            >
                                Oracle Certified Associate Java Programmer (OCAJP)
                            </h2>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content style={{ paddingLeft: 10 }}>
                            <h2
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: 22
                                }}
                            >
                                Programming HTML5 and Java Script with CSS3
                            </h2>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default WorkWrapper;

import React from "react";

import { Segment, List } from "semantic-ui-react";

import { segmentStyleRight } from "./styles/default";

class HeaderRight extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment width={3} floated="right" style={segmentStyleRight}>
                <List>
                    <List.Item>
                        <List.Icon name="point" size="large" />
                        <List.Content>
                            <h4>Hyderabad, Telangana, India</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" size="large" />
                        <List.Content>
                            <h4>
                                <a href="mailto:chaitanyachvr@gmail.com">
                                chaitanyachvr@gmail.com
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="call" size="large" />
                        <List.Content>
                            <h4>+91-984 836 2757</h4>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkedin" size="large" />
                        <List.Content>
                            <h4>
                                <a href="https://www.linkedin.com/in/samridhi-dubey/">
                                    LinkedIn
                                </a>
                            </h4>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}

export default HeaderRight;

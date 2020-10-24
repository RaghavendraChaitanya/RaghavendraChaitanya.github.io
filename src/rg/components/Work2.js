import React from "react";

import { List } from "semantic-ui-react";

class Work2 extends React.Component {
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
                        Senior Systems Engineer, Infosys Ltd. - Hyderabad, India
                    </h2>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        Mar 2012 - Aug 2016 (4 years 6 months)
                    </h3>
                    <List as="ul" style={{ marginLeft: 15 }}>
                        <List.Item as="li">
                            Modify existing software to correct errors, to adapt it to new hardware, or to upgrade interfaces and improve performance
                        </List.Item>
                        <List.Item as="li">
                            Direct software programming and development of documentation
                        </List.Item>
                        <List.Item as="li">
                            Implemented project in JSF frame work which users to view or download the reports in Excel, PDF and XML formats
                        </List.Item>
                        <List.Item as="li">
                            Developed web pages using HTML and Java Script to enable users to download the reports
                        </List.Item>
                        <List.Item as="li">
                            Performed database optimizations and thus improving the performance of application
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        );
    }
}

export default Work2;

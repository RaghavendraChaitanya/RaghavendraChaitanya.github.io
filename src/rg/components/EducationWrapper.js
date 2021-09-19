import React from "react";

import { List, Segment, Icon } from "semantic-ui-react";

import EducationDetail from "./EducationDetail";

import { segmentStyleLeft } from "./styles/default";

class EducationWrapper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Segment style={segmentStyleLeft}>
                <h3 style={{ margin: 0 }}>
                    <Icon name="student" size="large" /> Education
                </h3>
                <List
                    style={{
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                >
                    <EducationDetail
                        degree="Executive Program in Data Analytics"
                        start="Aug 2019"
                        end="Dec 2019"
                        institute="Indian Institute of Technology,
                        Raipur, Chhattisgarh, India"
                    />
                    <EducationDetail
                        degree="Bachelor of Technology (Computer Science)"
                        marks="GPA-75"
                        start="Sep 2007"
                        end="May 2011"
                        institute="DVR College of Technology,
                        Hyderabad, Telangana, India"
                    />

                    <EducationDetail
                        degree="12th/Higher Secondary"
                        marks="Marks-93.6%"
                        start="Apr 2006"
                        end="Mar 2007"
                        institute="Narayana Junior College, Hyderabad,
                            Telangana, India"
                    />

                    <EducationDetail
                        degree="10th/Senior Secondary"
                        marks="Marks-88%"
                        start="Apr 2004"
                        end="Mar 2005"
                        institute="MNR High School, Hyderabad,
                                Telangana, India"
                    />
                </List>
            </Segment>
        );
    }
}

export default EducationWrapper;

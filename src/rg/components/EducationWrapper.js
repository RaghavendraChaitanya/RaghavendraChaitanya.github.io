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
                        marks="CGPS-6.2"
                        start="Jun 2004"
                        end="May 2008"
                        institute="Indian Institute of Technology,
                        Raipur, Chhattisgarh, India"
                    />
                    <EducationDetail
                        degree="Bachelor of Technology (Computer Science)"
                        marks="CGPS-6.2"
                        start="Jun 2004"
                        end="May 2008"
                        institute="Birla Institute of Technology,
                        Pilani, Rajasthan, India"
                    />

                    <EducationDetail
                        degree="12th/Higher Secondary"
                        marks="Marks-91.6%"
                        start="Apr 2003"
                        end="Mar 2004"
                        institute="Saraswati Shishu Mandir, Mungeli,
                            Chhatisgarh, India"
                    />

                    <EducationDetail
                        degree="10th/Senior Secondary"
                        marks="Marks-90%"
                        start="Apr 2001"
                        end="Mar 2002"
                        institute="Saraswati Shishu Mandir, Mungeli,
                                Chhatisgarh, India"
                    />
                </List>
            </Segment>
        );
    }
}

export default EducationWrapper;

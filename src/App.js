import React from "react";

import { Grid } from "semantic-ui-react";

import Certifications from "./rg/components/Certifications";
import Header from "./rg/components/Header";
import Profile from "./rg/components/Profile";
import WorkWrapper from "./rg/components/WorkWrapper";
import EducationWrapper from "./rg/components/EducationWrapper";
import PersonalWrapper from "./rg/components/PersonalWrapper";

import { gridStyleLeft } from "./rg/components/styles/default";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Grid celled style={{ width: "960px" }}>
                <Grid.Row>
                    <Grid.Column style={gridStyleLeft}>
                        <Header />

                        <Profile />

                        <Certifications />

                        <WorkWrapper />

                        <EducationWrapper />

                        <PersonalWrapper />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;

import {observer}            from "mobx-react";
import React                 from "react";
import {Route}               from "react-router";
import ExperimentListingPage from "./ExperimentListingPage";

const BASE_ROUTE = "/dashboard/experiments";

const ExperimentsPage = observer(() => {

    return (
        <div>
            <Route exact path={`${BASE_ROUTE}`} component={ExperimentListingPage}/>
        </div>
    );

});

export default ExperimentsPage;

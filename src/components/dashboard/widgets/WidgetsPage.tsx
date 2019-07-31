import React               from "react";
import {observer}          from "mobx-react";
import {Route, Switch}     from "react-router";
import WidgetsListingPage  from "./WidgetsListingPage";
import WidgetsRegisterPage from "./WidgetsRegisterPage";
import WidgetPreviewPage   from "./WidgetPreviewPage";

const BASE_ROUTE = "/dashboard/widgets";

const WidgetsPage = observer(() => {

    return (
        <div>
            <Switch>
                <Route exact path={`${BASE_ROUTE}`} component={WidgetsListingPage}/>
                <Route exact path={`${BASE_ROUTE}/register`} component={WidgetsRegisterPage}/>
                <Route exact path={`${BASE_ROUTE}/:widgetId`} component={WidgetPreviewPage}/>
            </Switch>
        </div>
    );

});


export default WidgetsPage;
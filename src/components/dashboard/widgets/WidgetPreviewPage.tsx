import {observer}                   from "mobx-react";
import React, {useEffect, useState} from "react";
import {withRouter}                 from "react-router";
import {widgetsStore}               from "../../../stores/WidgetStore";
import {Link}                       from "react-router-dom";

const WidgetPreviewPage = observer(({match}) => {

    const [widget, setWidget] = useState();

    useEffect(() => {
        async function init() {
            const widgetResponse = await widgetsStore.getWidgetByUuid(match.params.widgetId);
            setWidget(widgetResponse);
        }
        init();
    }, [match.params.widgetId]);

    return (
        <div>
            <Link to={"/dashboard/widgets"}>Back</Link>
            <br/>
            Widget Preview {match.params.widgetId}
            {JSON.stringify(widget)}
        </div>
    )

});

export default withRouter(WidgetPreviewPage);
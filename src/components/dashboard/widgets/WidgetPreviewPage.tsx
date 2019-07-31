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
            const experiment = window.Carbon.createExperiment();
            experiment.definition = await window.Carbon.experimentService.getExperimentDefinitionFromXml(
                `
                export default {
                  onMount: function () {},
                  onWidgetStateChange: function () {}
                }
                `,
                `
                <?xml version="1.0"?>
                <Experiment
                        name="My Cool Experiment"
                        uuid="11d55937-d06f-4dd8-96d1-49d0dd9126cf"
                >
                    <Canvas>
                        <Section>
                            <Widget
                                uuid="${widgetResponse.uuid}"
                                id="my-widget"
                            />
                        </Section>
                    </Canvas>
                </Experiment>
                `
            );
            experiment.mount("widget-mounting-point");
        }
        init();
    }, [match.params.widgetId]);

    return (
        <div>
            <Link to={"/dashboard/widgets"}>Back</Link>
            <br/>
            Widget Preview {match.params.widgetId}
            <div id={"widget-mounting-point"}></div>
        </div>
    )

});

export default withRouter(WidgetPreviewPage);
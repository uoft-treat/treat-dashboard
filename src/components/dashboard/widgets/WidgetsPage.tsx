import React, {useEffect} from "react";
import {observer}         from "mobx-react";
import {widgetsStore}     from "./WidgetsStore";


const WidgetsPage = observer(() => {

    useEffect(() => {
        async function init() {
            await widgetsStore.loadWidgets();
        }

        init().then(() => console.log("Initialization finished..."));
    }, []);

    return (
      <div>
          Widgets
            <pre>{JSON.stringify(widgetsStore.widgets, null, 2)}</pre>
      </div>
    );

});


export default WidgetsPage;
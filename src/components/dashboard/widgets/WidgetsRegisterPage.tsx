import React, {useState}   from "react";
import {observer}          from "mobx-react";
import {Button, TextField} from "@material-ui/core";
import styled              from 'styled-components';
import {Link}              from "react-router-dom";
import {widgetsStore}      from "../../../stores/WidgetStore";
import errorToMessage      from "../../../utilities/errorToMessage";
import {routerStore}       from "../../../stores/RouterStore";

const WidgetsRegisterPage = observer(() => {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [templateSource, setTemplateSource] = useState("");
    const [styleSource, setStyleSource] = useState("");
    const [scriptSource, setScriptSource] = useState("");
    const [error, setError] = useState();

    const registerWidgets = async () => {
        setError(null);
        try {
            await widgetsStore.registerWidgets({name, author, templateSource, styleSource, scriptSource});
        } catch (e) {
            return setError(errorToMessage(e));
        }
        window.alert("Widget registered.");
        routerStore.history.push("/dashboard/widgets");
    };

    return (
        <div>

            <Link to={"/dashboard/widgets"}>Back</Link>

            <h2>Register New Widget</h2>

            {error}

            <DefaultTextField
                id="outlined-dense-multiline"
                label="Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <DefaultTextField
                id="outlined-dense-multiline"
                label="Author"
                margin="normal"
                variant="outlined"
                rowsMax="4"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <DefaultTextField
                id="outlined-dense-multiline"
                label="Template Source"
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
                value={templateSource}
                onChange={(e) => setTemplateSource(e.target.value)}
            />

            <DefaultTextField
                id="outlined-dense-multiline"
                label="Style Source"
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
                value={styleSource}
                onChange={(e) => setStyleSource(e.target.value)}
            />

            <DefaultTextField
                id="outlined-dense-multiline"
                label="Script Source"
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
                value={scriptSource}
                onChange={(e) => setScriptSource(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={registerWidgets}>
                Register
            </Button>
        </div>
    )
});

const DefaultTextField = styled(TextField)`
  width: 100%;
`;

export default WidgetsRegisterPage;

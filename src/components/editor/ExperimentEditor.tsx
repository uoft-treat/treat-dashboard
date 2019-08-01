import {observer}  from "mobx-react";
import React       from "react";
import AppBar      from "./components/AppBar";
import LogicEditor from "./components/LogicEditor";
import styled      from 'styled-components';

const ExperimentEditor = observer(() => {

    return (
        <div>
            <AppBar/>
            <LogicEditorWrapper>
                <LogicEditor/>
            </LogicEditorWrapper>
        </div>
    )

});

const LogicEditorWrapper = styled.div`
  width: 600px;
`;

export default ExperimentEditor;

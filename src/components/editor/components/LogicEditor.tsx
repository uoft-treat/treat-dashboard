import {observer} from "mobx-react";
import React      from "react";
import {List}     from "@material-ui/core";
import LogicGroup from "./LogicGroup";

export type Statement = {
    name: string,
    statements?: Statement[],
}

const LOGIC: Statement = {
    name: "Experiment Logic",
    statements: [
        {
            name: "if BUTTON is pressed then",
            statements: [
                {
                    name: "for every line in BUTTON.CONTENT do",
                    statements: [
                        {
                            name: "print LINE"
                        }
                    ]
                },
                {
                    name: "print 'done'"
                }
            ]
        }
    ]
};

const LogicEditor = observer(() => {

    return (
        <div>
            <List>
                <LogicGroup statement={LOGIC} baseIndentation={0}/>
            </List>
        </div>
    )

});

export default LogicEditor;

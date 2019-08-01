import {observer}        from "mobx-react";
import React, {Fragment} from "react";
import {
    Collapse,
    ListItem,
    ListItemText,
    Icon,
    makeStyles,
    createStyles,
    Theme, Button
}                        from "@material-ui/core";
import {Statement}       from "./LogicEditor";
import styled            from 'styled-components';

const LogicGroup = observer(({statement, baseIndentation}: { statement: Statement, baseIndentation: number }) => {

    const [open, setOpen] = React.useState(true);

    return (
        <Wrapper baseIndentation={baseIndentation}>
            <ListItem button>
                <ListItemText primary={statement.name}/>
                {statement.statements && statement.statements.length && (
                    <Button onClick={() => setOpen(!open)}>
                        {open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                    </Button>
                )}
                <Button>
                    <Icon>edit</Icon>
                </Button>
            </ListItem>
            {statement.statements && statement.statements.length && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {statement.statements.map(statement => {
                        return (
                            <LogicGroup statement={statement} baseIndentation={baseIndentation + 1}/>
                        )
                    })}
                </Collapse>
            )}
        </Wrapper>
    )

});

const Wrapper = styled.div`
  padding-left: ${({baseIndentation}: { baseIndentation: number }) => baseIndentation * 10}px;
`;


export default LogicGroup;

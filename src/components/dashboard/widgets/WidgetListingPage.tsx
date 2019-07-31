import {observer}                                                        from "mobx-react";
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {widgetsStore}                                                    from "../../../stores/WidgetStore";
import React, {useEffect}                                                from "react";
import {withRouter}                                                      from "react-router";

const BASE_ROUTE = "/dashboard/widgets";

const WidgetListingPage = observer(({history}) => {

    useEffect(() => {
        async function init() {
            await widgetsStore.loadWidgets();
        }

        init().then(() => console.log("Initialization finished..."));
    }, []);

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`${BASE_ROUTE}/register`)}
            >
                Register New Widget
            </Button>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell align="right"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {widgetsStore.widgets.map(widget => {
                            return (
                                <TableRow key={widget.uuid}>
                                    <TableCell component="th" scope="row">
                                        {widget.name}
                                    </TableCell>
                                    <TableCell>{widget.author}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => history.push(`${BASE_ROUTE}/${widget.uuid}`)}
                                        >
                                            Preview
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}

                    </TableBody>
                </Table>
            </Paper>
        </div>
    );

});

export default withRouter(WidgetListingPage);
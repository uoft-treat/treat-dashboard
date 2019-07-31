import React                                                      from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Button,
}                                                                 from '@material-ui/core';
import Icon                                                       from '@material-ui/core/Icon';
import {authenticationStore}                                      from "../../stores/AuthenticationStore";
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";
import pathMatches                                                from "../../utilities/pathMatches";
import WidgetsPage                                                from "./widgets/WidgetsPage";
import ExperimentsPage                                            from "./experiments/ExperimentsPage";

const DRAWER_WIDTH = 240;
const BASE_ROUTE = "/dashboard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
        title: {
            flexGrow: 1,
        },
    }),
);

const DashboardPage = ({history, location}: RouteComponentProps) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        TREAT Dashboard
                    </Typography>
                    <Button color="inherit" onClick={authenticationStore.logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar}/>
                <List>
                    <ListItem
                        button
                        key={"widgets"}
                        onClick={() => history.push(`${BASE_ROUTE}/widgets`)}
                        selected={pathMatches(location.pathname, `${BASE_ROUTE}/widgets`)}
                    >
                        <ListItemIcon>
                            <Icon>widgets</Icon>
                        </ListItemIcon>
                        <ListItemText primary={"Widgets"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"experiments"}
                        onClick={() => history.push(`${BASE_ROUTE}/experiments`)}
                        selected={pathMatches(location.pathname, `${BASE_ROUTE}/experiments`)}
                    >
                        <ListItemIcon>
                            <Icon>web</Icon>
                        </ListItemIcon>
                        <ListItemText primary={"Experiments"}/>
                    </ListItem>
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route exact path={`${BASE_ROUTE}`} render={() => <Redirect to={`${BASE_ROUTE}/widgets`}/>}/>
                    <Route path={`${BASE_ROUTE}/widgets`} component={WidgetsPage}/>
                    <Route path={`${BASE_ROUTE}/experiments`} component={ExperimentsPage}/>
                </Switch>
            </main>

        </div>
    )
};

export default withRouter(DashboardPage);

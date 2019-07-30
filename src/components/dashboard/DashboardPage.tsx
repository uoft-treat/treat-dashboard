import React                                            from 'react';
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
}                                                       from '@material-ui/core';
import Icon                                             from '@material-ui/core/Icon';
import {authenticationStore}                            from "../../stores/AuthenticationStore";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import LoginPage                                        from "../login/LoginPage";
import pathMatches                                      from "../../utilities/pathMatches";
import WidgetsPage                                      from "./widgets/WidgetsPage";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
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
                        onClick={() => history.push("/dashboard/widgets")}
                        selected={pathMatches(location.pathname, "/dashboard/widgets")}
                    >
                        <ListItemIcon>
                            <Icon>widgets</Icon>
                        </ListItemIcon>
                        <ListItemText primary={"Widgets"}/>
                    </ListItem>
                    <ListItem
                        button
                        key={"experiments"}
                        onClick={() => history.push("/dashboard/experiments")}
                        selected={pathMatches(location.pathname, "/dashboard/experiments")}
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
                    <Route path="/dashboard/widgets" component={WidgetsPage}/>
                    <Route path="/dashboard/experiments" component={LoginPage}/>
                </Switch>
            </main>

        </div>
    )

}

export default withRouter(DashboardPage);

import {observer} from "mobx-react";
import React      from "react";
import {
    AppBar as MaterialAppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    makeStyles,
    createStyles,
    Theme,
    Icon
}                 from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const AppBar = observer(() => {

    const classes = useStyles();

    return (
        <div>
            <MaterialAppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Icon>chevron_left</Icon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Experiment Editor
                    </Typography>
                    <Button color="inherit">Fork</Button>
                </Toolbar>
            </MaterialAppBar>
        </div>
    )

});

export default AppBar;

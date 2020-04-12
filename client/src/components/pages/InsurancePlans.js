import React, {Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AtlasMenu from "../AtlasMenu";
import MainContent from "../MainContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

export default function App() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpenState = (state) => {
        setDrawerOpen(state);
    };

    return (
        <div className={classes.root}>
            <AtlasMenu drawerOpen={drawerOpen} onChangeDrawerOpen={handleDrawerOpenState} />
            <MainContent drawerOpen={drawerOpen}/>
        </div>
    )
}
import React, {Component} from 'react';
import AtlasMenu from "./components/AtlasMenu";
import { makeStyles } from '@material-ui/core/styles';
import MainContent from "./components/MainContent";

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
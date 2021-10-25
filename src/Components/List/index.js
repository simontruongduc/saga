import React, {Component} from 'react';
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "../Item";
import {withStyles} from "@mui/styles";
import styles from "./styles";

class List extends Component {
    render() {
        const {classes, tasks, status} = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box mt={1} mb={1}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task, index) => {
                            return <Item task={task} key={index} status={status}/>;
                        })
                    }
                </div>
            </Grid>
        );
    }
};

export default withStyles(styles)(List);
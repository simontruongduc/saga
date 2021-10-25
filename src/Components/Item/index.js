import React, {Component} from 'react';
import {withStyles} from "@mui/styles";
import styles from "./styles";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {CardActions, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
class Item extends Component {
    render() {
        var {classes, task, status} = this.props;
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="edit" className={classes.fab} size="small">
                        <Icon fontSize="small">edit_icon</Icon>
                    </Fab>
                    <Fab color="primary" aria-label="delete" className={classes.fab} size="small">
                        <Icon fontSize="small">delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(Item);
import React, {Component} from 'react';
import {withStyles} from "@mui/styles";
import styles from "./styles";
import {TextField} from "@mui/material";
class SearchBox extends Component {
    render() {
        var {classes,handleChange} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    margin="dense"
                    autoComplete="off"
                    onChange={handleChange}
                    placeholder="nhập từ khóa"
                />
            </form>
        );
    }
}

export default withStyles(styles)(SearchBox);
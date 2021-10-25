import React, {Component} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {withStyles} from "@mui/styles";
import styles from "./styles";
import Modal from '@mui/material/Modal';

class TaskForm extends Component {
    render() {
        var {open,onClose,classes} = this.props;
        return (
            <Modal open={open} onClose={onClose}>
                <div className={classes.modal}>
                    <form>
                        <Grid container>
                            <Grid item md={12}>
                                <TextField
                                    margin="dense"
                                    label="Tiêu đề"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    margin="dense"
                                    label="Mô tả"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button color="primary">Lưu lại</Button>
                                <Button onClick={onClose}>Hủy</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default withStyles(styles)(TaskForm);
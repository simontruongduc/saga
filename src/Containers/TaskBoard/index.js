import React, {Component} from 'react';
import {withStyles} from "@mui/styles";
import styles from "./styles";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import {STATUS} from "../../Constants";
import List from "../../Components/List";
import TaskForm from "../../Components/From";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as taskActions from "../../Actions/Task";
import SearchBox from "../../Components/SearchBox";

class TaskBoard extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        const {actions} = this.props;
        const {fetchTasks} = actions;
        fetchTasks();
    }

    renderBoard = () => {
        const {listTask} = this.props;
        return (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value);
                        return <List tasks={taskFilter} status={status} key={index}/>;
                    })
                }
            </Grid>
        );
    }
    handleClose = () => {
        this.setState({
            open: false
        });
    }
    handleOpen = () => {
        this.setState({
            open: true
        });
    }
    renderForm = () => {
        var {open} = this.state;
        return (
            <TaskForm open={open} onClose={this.handleClose}/>
        );
    }
    renderSearchBox = () =>{
        let xhtml = null;
        return <SearchBox/>;
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpen}>
                    <AddIcon/> thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listTask: state.tasks.listTask,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(taskActions, dispatch),
    };
};
export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
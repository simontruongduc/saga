import React, {Component} from 'react';
import {withStyles} from "@mui/styles";
import styles from "./styles";
import loadingGif from "../../assets/images/loading.gif";
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import * as LoadingAction from "../../Actions/Loading";

class Loading extends Component {
    render() {
        const {classes,loading} = this.props;
        if(loading)
        {
            return (
                <div className={classes.loading}>
                    <img src={loadingGif} alt="loading" className={classes.gif}/>
                </div>
            );
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading,
    };
};
const mapDispatchToProps = dispacth => {
    return {
        loadingActions: bindActionCreators(LoadingAction, dispacth),
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect
    )(Loading);
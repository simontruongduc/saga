import styles from "./styles";
import {withStyles,ThemeProvider} from "@mui/styles";
import React, {Component} from 'react';
import TaskBoard from "../TaskBoard";
import theme from "../../Commons/Theme";
import {Provider} from "react-redux";
import configStore from "../../Redux/ConfigStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Components/Loading";

const store = configStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <TaskBoard/>
                    <Loading/>
                    <ToastContainer />
                </ThemeProvider>
            </Provider>
        );
    }
}
export default withStyles(styles)(App);

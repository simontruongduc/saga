import {createTheme} from "@mui/material";

const theme = createTheme({
    //màu
    color:{
        primary:"#D32F2F",
        secondary:"#448AFF",
        error:"#F57C00"
    },
    //font
    typography:{
        fontFamily:"Roboto",
    },
    shape:{
        borderRadius:4,
        background:"#00796B",
        textColor:"white",
        border:"#CCCCCC"
    }
});
export default theme;
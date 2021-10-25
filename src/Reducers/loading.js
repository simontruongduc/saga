import * as Types from "../Constants/Loading";

const initialState ={
    loading : false,
};

const loading = (state = initialState,action) =>{
    switch (action.type){
        case Types.SHOW_LOADING:
            return {
                ...state,
                loading: true,
            };
        case Types.HIDE_LOADING:
            return {
                ...state,
                loading: false,
            };
        default : return state;
    }
};

export default loading;
import * as LoadingType from "../Constants/Loading";

export const showLoading = () => {
    return {
        type: LoadingType.SHOW_LOADING,
    };
};
export const hideLoading = () => {
    return {
        type: LoadingType.HIDE_LOADING,
    };
};
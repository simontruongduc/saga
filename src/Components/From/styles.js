const styles = (theme) =>({
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        backgroundColor: theme.palette.background.paper,
        outline:"none",
        padding:theme.spacing(2,4,4),
    },
    textField :{
        width: "100%"
    }
});

export default styles;
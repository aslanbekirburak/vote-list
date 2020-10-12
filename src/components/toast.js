import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = ({ isToastOpen, setToastOpen, text }) => {
  console.log("isToastOpen", isToastOpen)
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={isToastOpen}
      onClose={setToastOpen}
      key={"top" + "center"}
    >
      <Alert severity="success">
        {text}
      </Alert>
    </Snackbar>
  )
}
export default Toast;
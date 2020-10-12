import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from "../common/functions"

const Toast = ({ isToastOpen, setToastOpen, text }) => {
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
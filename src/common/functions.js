import React from "react"
import MuiAlert from '@material-ui/lab/Alert';

export const handleSetOrder = (oldData,orderNumber) => {
    let sortedList = null
    if (!orderNumber) {
        sortedList = oldData.sort(function (a, b) {
            return b.vote - a.vote;
        });
    } else if (orderNumber) {
        sortedList = oldData.sort(function (a, b) {
            return a.vote - b.vote;
        });
    }
    return sortedList
}

export function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
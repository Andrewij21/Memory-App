import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";

const AlertDialog = ({ removeItem }) => {
  return (
    <>
      <DialogTitle color="error" id="alert-dialog-title">
        {"Delete Item"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText color="InfoText" id="alert-dialog-description">
          Are you sure want to delete item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => removeItem(false)}
          variant="contained"
          color="text"
        >
          Cancle
        </Button>
        <Button
          onClick={() => removeItem(true)}
          autoFocus
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

AlertDialog.propTypes = {
  removeItem: PropTypes.func,
};

export default AlertDialog;

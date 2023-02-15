import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ViewEmployeeDetails = ({ open, handleClose, details }) => {
  console.log(details);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead></TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "800" }}>
                    Employee ID:
                  </TableCell>
                  <TableCell align="left">{details?.employeeId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "800" }}>
                    Employee Name:
                  </TableCell>
                  <TableCell align="left">{details?.employeename}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "800" }}>
                    Grade:
                  </TableCell>
                  <TableCell align="left">{details?.grade}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "800" }}>
                    Salary Status:
                  </TableCell>
                  <TableCell align="left">{details?.status}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewEmployeeDetails;

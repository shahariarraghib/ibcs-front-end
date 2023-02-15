import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import { TableContainer } from "@material-ui/core";
import useFetch from "../hooks/getDataHook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewEmployeeDetails from "../pages/modal/ViewEmployeeDetails";
import axios from "axios";
import Swal from "sweetalert2";
const EmployeesTable = () => {
  const [details, setDetail] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getEmplyees = useFetch("employee");
  const balanceData = useFetch("company");

  const deleteEmployee = (id) => {
    console.log(id);
    fetch(`${process.env.REACT_APP_API_KEY}/employee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Employee Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleStatusChange = (id, salary, status) => {
    const data = { status: status, salary: salary };

    if (balanceData[0].companyBalance >= salary) {
      console.log("parbe");
      axios
        .patch(`${process.env.REACT_APP_API_KEY}/employee/${id}`, data)
        .then((res) => {
          console.log(res);
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "Insufficient Balance!",
      });
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              Employee Name
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              Grade
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              Salary
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              Status
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              View
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "800" }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getEmplyees.map((employee) => (
            <TableRow
              key={employee._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{employee.employeename}</TableCell>
              <TableCell align="left">{employee.grade}</TableCell>
              <TableCell align="left">{employee.salary}</TableCell>
              {employee?.status === "Unpaid" ? (
                <TableCell
                  align="left"
                  style={{
                    color: "red",
                    fontWeight: "800",
                    cursor: "pointer ",
                  }}
                  onClick={() =>
                    handleStatusChange(
                      employee._id,
                      employee.salary,
                      (employee.status = "Paid")
                    )
                  }
                >
                  {employee.status}
                </TableCell>
              ) : (
                <TableCell
                  align="left"
                  style={{ color: "green", fontWeight: "800" }}
                >
                  {employee.status}
                </TableCell>
              )}
              <TableCell
                align="left"
                style={{ cursor: "pointer " }}
                onClick={() => handleOpen(setDetail(employee))}
              >
                <VisibilityIcon />
              </TableCell>
              <TableCell
                align="left"
                style={{ cursor: "pointer " }}
                onClick={() => deleteEmployee(employee._id)}
              >
                <DeleteIcon color="error" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ViewEmployeeDetails
        open={open}
        handleClose={handleClose}
        details={details}
      ></ViewEmployeeDetails>
    </TableContainer>
  );
};

export default EmployeesTable;

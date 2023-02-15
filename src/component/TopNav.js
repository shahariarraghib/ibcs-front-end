import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import useFetch from "../hooks/getDataHook";
import axios from "axios";
const TopNav = () => {
  const [salary, setSalary] = useState();
  const [companyBalance, setCompanyBalance] = useState();
  const data = useFetch("company");

  const handleLogout = () => {
    localStorage.removeItem("ibcsToken");
    window.location.replace("/");
  };

  const addSalaryAndBalance = () => {
    console.log(salary, companyBalance);
    {
      salary === "null" ? setSalary(data?.baseSalarys) : setSalary(salary);
    }
    const inputData = {
      baseSalary: salary,
      companyBalance: companyBalance,
    };
    axios
      .patch(`${process.env.REACT_APP_API_KEY}/company`, inputData)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <AppBar
      position="static"
      style={{ flexGrow: 1, backgroundColor: "#ec5990" }}
    >
      <Toolbar>
        <TextField
          style={{ flexGrow: 0, marginRight: "10px" }}
          variant="outlined"
          margin="normal"
          required
          name="salary"
          label="Salary"
          type="number"
          id="salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
        <TextField
          style={{ flexGrow: 0, marginRight: "10px" }}
          variant="outlined"
          margin="normal"
          required
          name="balance"
          label="Balance"
          type="number"
          id="balance"
          value={companyBalance}
          onChange={(event) => setCompanyBalance(event.target.value)}
        />
        <Button
          color="inherit"
          onClick={addSalaryAndBalance}
          style={{ flexGrow: 0, backgroundColor: "#bf1650" }}
        >
          Add balance
        </Button>
        <Typography variant="h6" style={{ flexGrow: 3 }}>
          Balance: {data[0]?.companyBalance}
        </Typography>
        <Button
          color="inherit"
          onClick={handleLogout}
          style={{ flexGrow: 1, backgroundColor: "#bf1650", width: "" }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import FormControl from "@material-ui/core/FormControl";
import EmployeesInputForm from "./EmployeesInputForm";
import EmployeesTable from "./EmployeesTable";
import TopNav from "./TopNav";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  table: {
    width: "45%",
    marginRight: "5%",
  },
  form: {
    width: "45%",
    marginLeft: "5%",
  },
});
const Home = () => {
  const classes = useStyles();
  const token = localStorage.getItem("HeyLinkToken");
  return (
    <>
      <TopNav></TopNav>
      <div className={classes.root}>
        <Table className={classes.table}>
          <EmployeesTable></EmployeesTable>
        </Table>

        <FormControl className={classes.form}>
          <EmployeesInputForm></EmployeesInputForm>
        </FormControl>
      </div>
    </>
  );
};

export default Home;

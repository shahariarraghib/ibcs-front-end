import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useFetch from "../hooks/getDataHook";
import "../style/style.css";
const EmployeesInputForm = () => {
  const basicSalary = useFetch("company");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let calculateSalary =
      basicSalary[0]?.baseSalary * parseInt(data.grade.split(",")[1]);
    let findGrade = data.grade.split(",")[0];
    console.log(findGrade);
    const inputData = {
      employeeId: data.employeeId,
      employeename: data.employeename,
      grade: findGrade,
      address: data.address,
      mobileNumber: data.mobileNumber,
      bankAccount: {
        accountNumber: data.accountNumber,
      },
      salary: calculateSalary,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/employee`, inputData)
      .then((res) => {
        console.log(res.status);
        if (res?.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Employee Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  console.log(errors);
  return (
    <div className="bg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputStyle"
          type="text"
          placeholder="Employee ID"
          {...register("employeeId", {
            required: true,
            maxLength: 4,
            minLength: 4,
          })}
        />
        {errors?.employeeId?.type && <p>{errors?.employeeId?.type} 4</p>}

        <input
          className="inputStyle"
          type="text"
          placeholder="Name"
          {...register("employeename", { required: true, maxLength: 200 })}
        />
        {errors.name && <p>Name field is required</p>}
        <select
          className="selectStyle"
          {...register("grade", { required: true })}
        >
          <option>Select Grades</option>
          <option value="grade one,6">grade one</option>
          <option value="grade two,5">grade two</option>
          <option value="grade three,4">grade three</option>
          <option value="grade four,3">grade four</option>
          <option value="grade five,2">grade five</option>
          <option value="grade six,1">grade six</option>
        </select>

        <input
          className="inputStyle"
          type="text"
          placeholder="Address"
          {...register("address", { required: true, maxLength: 500 })}
        />
        {errors.address && <p>Address field is required</p>}

        <input
          className="inputStyle"
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", { required: true })}
        />
        {errors.mobilenumber && <p>Mobile Number field is required</p>}
        <input
          className="inputStyle"
          type="text"
          placeholder="Bank account."
          {...register("accountNumber", {
            required: true,
          })}
        />
        {errors.bankaccount && <p>Bank Account field is required</p>}

        <input
          className="inputStylebutton"
          type="submit"
          value="add employee"
        />
      </form>
    </div>
  );
};

export default EmployeesInputForm;

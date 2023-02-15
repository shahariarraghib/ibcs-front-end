import { useEffect, useState } from "react";
// const token = localStorage.getItem("ibcsToken");

// get fetch data
const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/${endpoint}`, {
      /*  headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      }, */
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [data]);

  return data;
};

export default useFetch;

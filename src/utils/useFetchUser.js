import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchUser = (url, token) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(`${url}/GetInformation`, { headers: { token } })
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError("404 NOT FOUND");
          console.dir(err)
        }
      });
  }, [ url, token]);
  return { data, error };
};

import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url, token) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(url, { headers: { token } })
      .then((res) => {
        // setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        // setLoading(false);
        if (err.response.status === 404) {
          setError("404 NOT FOUND");
          console.dir(err);
        }
      });
  }, [url, token, data]);
  return { data, error };
};

import { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from './Auth/Auth';

function App() {
  const [auth, setAuth] = useState("Loading...");
  const [data, setData] = useState(null);

  useEffect(() => {
    let intervalID;

    let loading = ['Loading.', 'Loading..', 'Loading...'];
    let index = 0;
    const intervalTime = 200;
    const timeoutTime = 1000;

    intervalID = setInterval(() => {
      setAuth(loading[index]);
      index = (index + 1) % loading.length;
    }, intervalTime);
    const handleLoad = () => {
      setTimeout(() => {
        clearInterval(intervalID);
        setAuth(Auth);
      }, timeoutTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    axios
      .get("http://localhost:3000/test-db")
      .then((res) => {
        setData(res.data[0]); // Set the full object
        console.log("Success");
      })
      .catch(err => console.error(err));

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      {auth}
      <p>{data ? data.username : "No data found"}</p>
    </>
  );
}

export default App;

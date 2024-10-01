import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  //different color mode
  const BlueMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#07234b",
    });
    document.body.style.backgroundColor = "#07234b";
    showAlert("its BlueMode !", "success");
  };

  const yelloMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#574305",
    });
    document.body.style.backgroundColor = "#574305";
    showAlert("its YellowMode !", "success");
  };

  const greenMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#074b2b",
    });
    document.body.style.backgroundColor = "#074b2b";
    showAlert("its GreenMode !", "success");
  };

  // alert components
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Dark mode And light Mode
  const [mode, setMode] = useState("light");

  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMystyle({
        color: "white",
        backgroundColor: "#373737",
      });
      document.body.style.backgroundColor = "#373737";
      showAlert("Dark mode hash enable !", "success");
    } else {
      setMode("light");
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("light mode hash enable !", "success");
    }
  };

  //routing router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Navbar /> */}
          <TextForm
            heading="Enter Here Your Text....!"
            mystyle={mystyle}
            showAlert={showAlert}
          />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {/* <Navbar /> */}
          <About mystyle={mystyle} />
        </>
      ),
    },
  ]);

  //return in index html
  return (
    <>
      <Navbar
        title="Wordy"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        BlueMode={BlueMode}
        yelloMode={yelloMode}
        greenMode={greenMode}
      />
      <Alerts alert={Alert} />

      <div className="container my-4">
        <RouterProvider router={router} />
        {/* <TextForm
          heading="Enter Here Your Text....!"
          mystyle={mystyle}
          showAlert={showAlert}
        /> */}
      </div>
    </>
  );
}



export default App;

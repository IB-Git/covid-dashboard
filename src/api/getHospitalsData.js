import { useEffect, useState } from "react";
import Tabletop from "tabletop";
require("dotenv").config();

export const GetHospitalsData = () => {
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key :"",
      simpleSheet: true,
    })
      .then((data) => setHospitalsData(data))
      .catch((err) => console.warn(err));
  }, []);

  return hospitalsData;
};

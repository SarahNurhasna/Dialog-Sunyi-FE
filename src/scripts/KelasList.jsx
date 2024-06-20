/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const KelasList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("https://dialog-sunyi-be.vercel.app/api/classes");
        if (response.data.status === "success") {
          setClasses(response.data.data);
        } else {
          console.error("API request failed with message:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="grid gap-x-14 gap-y-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-12">
      {classes.map((kelas) => (
        <div key={kelas._id} className="group border border-gray-200 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden bg-DS-beige">
          <img src={kelas.poster_img} alt={kelas.title} className="image-card object-cover w-full max-h-48 group-hover:scale-110 transition-all duration-300 ease-in-out" />
          <div className="card-body mx-2 my-4 p-4">
            <div className="mb-2 text-DS-verdigris transition-all duration-300 ease-in-out flex lg:flex-wrap-reverse items-center justify-between">
              <span className="tag font-normal bg-transparent border-DS-verdigris border-x border-y rounded-md px-2 py-1 text-base text-DS-verdigris group-hover:bg-DS-verdigris group-hover:text-white group-hover:font-medium">
                {kelas.organizer}
              </span>
            </div>
            <h3 className="text-lg font-medium mb-2 transition-all duration-300 ease-in-out">{kelas.title}</h3>
            <Link to={`/classes/${kelas._id}`} className="flex items-center justify-end text-sm no-underline transition-all duration-300 ease-in-out font-normal group-hover:font-medium text-DS-davysgray group-hover:text-DS-verdigris">
              Baca selanjutnya
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KelasList;

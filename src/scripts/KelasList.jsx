/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const KelasList = ({ region, onSelectClass }) => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const filteredClasses = classes.filter((kelas) => kelas.region === region);

  if (loading) {
    return (
      <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center">
        <button
          disabled
          type="button"
          className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      </div>
    );
  }
  
  

  return (
    <div className="grid gap-x-14 gap-y-8 grid-cols-1 i2xl:grid-cols-5 ixl:grid-cols-4 ilg:grid-cols-3 ism:grid-cols-2 px-16 pb-16 pt-9 md:pt-6 sm:px-9 sm:py-9 sm:pt-4 items-center">
      {filteredClasses.length === 0 ? (
        <p className="col-span-full text-center text-DS-beige">
          Mohon maaf, saat ini belum ada kelas bahasa isyarat yang tersedia di region kamu.
        </p>
      ) : (
        filteredClasses.map((kelas) => (
          <div data-aos="fade-up" data-aos-delay="100" key={kelas._id} className="group border border-gray-200 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden bg-DS-beige">
            <img
              src={kelas.poster_img}
              alt={kelas.title}
              className="image-card object-cover w-full h-56 md:h-64 group-hover:scale-110 transition-all duration-300 ease-in-out"
              style={{ maxHeight: "300px" }} // Set maximum height for the image
            />
            <div className="card-body mx-2 my-4 p-4">
              
              <div className="mb-2 text-DS-verdigris transition-all duration-300 ease-in-out flex lg:flex-wrap-reverse items-center justify-between">
                <span className="tag font-normal 2sm:text-sm bg-transparent border-DS-verdigris border-x border-y rounded-md px-2 py-1 text-base text-DS-verdigris group-hover:bg-DS-verdigris group-hover:text-white group-hover:font-medium">
                  {kelas.organizer}
                </span>
              </div>
              <h3 className="text-lg font-medium mb-2 2sm:text-sm transition-all duration-300 ease-in-out">{kelas.title}</h3>
              <div className="flex justify-end">
                <button
                  onClick={() => onSelectClass(kelas)}
                  className="text-sm no-underline transition-all duration-300 ease-in-out font-normal group-hover:font-medium text-DS-davysgray group-hover:text-DS-verdigris"
                >
                  Info selengkapnya
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default KelasList;

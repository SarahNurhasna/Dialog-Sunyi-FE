/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KelasList = () => {
  const [kelas, setKelas] = useState([]);
  const [activeKelas, setActiveKelas] = useState(null);

  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const response = await axios.get('https://api-kelas.abdulfaqih.eu.org/kelas');
        if (response.data.status === 'success') {
          setKelas(response.data.data.kelas);
        } else {
          console.error('API request failed with message:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchKelas();
  }, []);

  const handleModalOpen = (kelasItem) => {
    setActiveKelas(kelasItem);
  };

  const handleModalClose = () => {
    setActiveKelas(null);
  };

  return (
    <div className="grid gap-x-14 gap-y-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-12 bg-DS-verdigris-700">
      {/* <h2>KELAS</h2> */}
      {kelas.map((kelasItem) => (
        <div key={kelasItem.id} className="group border border-gray-200 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden">
          <div className="card-body mx-2 my-4 p-4">
            <div className="mb-2 text-DS-verdigris transition-all duration-300 ease-in-out flex lg:flex-wrap-reverse items-center justify-between">
              <span className="tag font-normal bg-transparent border-DS-verdigris border-x border-y rounded-md px-2 py-1 text-base text-DS-verdigris group-hover:bg-DS-verdigris group-hover:text-white group-hover:font-medium">
                {kelasItem.region}
              </span>
              <span className="ml-2 text-base text-DS-verdigris">
                {kelasItem.title}
              </span>
            </div>
            <p className="text-xs text-gray-700 mb-4 overflow-hidden">{kelasItem.organizer}</p>
            <button
              onClick={() => handleModalOpen(kelasItem)}
              className="flex items-center justify-end text-sm no-underline transition-all duration-300 ease-in-out font-normal group-hover:font-medium text-DS-davysgray group-hover:text-DS-verdigris"
            >
              Info Selanjutnya
            </button>
          </div>
        </div>
      ))}

      {activeKelas && (
        <div id="static-modal" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {activeKelas.title}
                </h3>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex p-4 md:p-5 space-x-4">
                <img src={activeKelas.poster_img} alt={activeKelas.title} className="w-1/3 object-cover" />
                <div className="w-2/3 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Organizer: {activeKelas.organizer}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Realization Date: {activeKelas.realization_date}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Registration Date: {activeKelas.registration_date}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Fee: {activeKelas.fee}
                  </p>
                  <a href={activeKelas.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    More Info
                  </a>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelasList;

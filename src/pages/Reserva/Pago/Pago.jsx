import React, { useState } from "react";

const Pago = () => {
  const hoursCount = 2;
  const costPerHour = 45.0;
  const total = hoursCount * costPerHour;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="p-4 space-y-6 h-full overflow-auto dark:bg-neutral-900">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Payment Method Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm border dark:border-neutral-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-medium dark:text-white">
              Método de pago
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Agregar método de pago:
          </p>

          <button
            onClick={openModal}
            className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg border dark:border-neutral-700 hover:border-green-500 bg-white dark:bg-neutral-800 mb-6 group"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-gray-100 dark:bg-neutral-700 rounded-lg">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm sm:text-base dark:text-white">
                Agregar tarjeta de crédito o débito
              </span>
            </div>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 justify-center items-center">
            <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg border dark:border-neutral-600">
              <img
                src="https://www.niubiz.com.pe/assets/icons/tarjetas/yape.svg"
                alt="Yape"
                className="h-6 sm:h-8 mx-auto"
              />
            </div>
            <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg border dark:border-neutral-600">
              <img
                src="https://www.niubiz.com.pe/assets/icons/tarjetas/plin.svg"
                alt="Plin"
                className="h-6 sm:h-8 mx-auto"
              />
            </div>
            <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg border dark:border-neutral-600">
              <img
                src="https://www.niubiz.com.pe/assets/icons/tarjetas/visa.svg"
                alt="VISA"
                className="h-6 sm:h-8 mx-auto"
              />
            </div>
            <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg border dark:border-neutral-600">
              <img
                src="https://www.niubiz.com.pe/assets/icons/tarjetas/master.svg"
                alt="MASTERCARD"
                className="h-6 sm:h-8 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Summary and Order Button */}
        <div className="space-y-4 sm:space-y-6 w-full sm:w-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm border dark:border-neutral-700">
            <h3 className="text-lg font-medium mb-6 dark:text-white">Resumen</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Cantidad de horas
                </span>
                <span className="text-sm sm:text-base dark:text-white">{hoursCount}</span>
              </div>
              <div className="flex justify-between items-center gap-x-6">
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Costo por hora
                </span>
                <span className="text-sm sm:text-base dark:text-white">
                  S/{costPerHour.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-5 border-t dark:border-neutral-700 gap-x-6">
                <span className="font-medium text-sm sm:text-base dark:text-white">
                  Total
                </span>
                <span className="font-medium text-sm sm:text-base dark:text-white">
                  S/{total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm sm:text-base">
            Hacer pedido
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-11/12 sm:w-1/2 lg:w-1/3 border dark:border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Agregar tarjeta
            </h2>
            
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pago;
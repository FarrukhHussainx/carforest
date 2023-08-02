"use client";
import Image from "next/image";

import cross from "/public/cross.jpeg";
import cross1 from "/public/cross1.jpg";
import cross2 from "/public/cross2.jpg";
import cross3 from "/public/cross3.jpg";
import steering from "/public/steering-3.svg";
import fuel from "/public/fuel-9.svg";
import tyre from "/public/tyre-1.svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ProductCard = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="bg-blue-100 mx-auto rounded-md p-2 shadow-md hover:shadow-blue-400 mb-3">
        <Image
          className="w-[300px] h-[200px] rounded-md"
          src={data.image[0].secure_url}
          width={200}
          height={200}
        />
        <div className="flex justify-start items-center gap-1 text-blue-900 ml-2 mt-4">
          <h1 className="font-medium capitalize">{data.make}</h1>
          <h1 className="font-medium capitalize">{data.model}</h1>
          <h1 className="font-medium capitalize">{data.year}</h1>
        </div>
        <div className="flex justify-start items-center gap-1 text-green-900 ml-2 mt-2">
          <h1 className="font-medium">RS 230000</h1>
        </div>
        <div className="flex justify-start items-center gap-1 text-green-900 ml-2 mt-2">
          <button className="bg-blue-600" onClick={openModal}>
            open details
          </button>
        </div>
        <div className="flex justify-between gap-3 mt-2">
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={steering} />
            <h1 className="text-gray-500 capitalize">{data.transmission}</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={tyre} />
            <h1 className="text-gray-500">{data.mileage} KM/L</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={fuel} />
            <h1 className="text-gray-500">{data.fuelType}</h1>
          </div>
        </div>
      </div>
      {/*  */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductCard;

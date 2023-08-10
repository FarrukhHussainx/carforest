"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import steering from "/public/steering-3.svg";
import fuel from "/public/fuel-9.svg";
import tyre from "/public/tyre-1.svg";
import call from "/public/call.svg";
import pricetag from "/public/pricetag.svg";
import register from "/public/register.svg";
import year from "/public/year.svg";
import Slider from "./Slider";

export default function MyModal({ data, isOpen, closeModal }) {
  return (
    <>
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
                    className="text-lg font-medium leading-6 text-gray-900 "
                  >
                    <div className="flex gap-2 mb-2">
                      <h1 className="capitalize text-blue-600 text-xl">
                        {data.make}
                      </h1>
                      <h1 className="capitalize text-blue-600 text-xl">
                        {data.model}
                      </h1>
                    </div>
                  </Dialog.Title>
                  <Slider data={data} />
                  <div className="mt-5">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[25px] h-[25px] rounded-md"
                          src={steering}
                          alt="alt"
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Transmission
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.transmission}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[25px] h-[25px] rounded-md"
                          src={tyre}
                          alt="alt"
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Mileage
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.mileage}KM/L
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[25px] h-[25px] rounded-md"
                          src={fuel}
                          alt="alt"
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Fuel
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.fuelType}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[25px] h-[25px] rounded-md"
                          src={register}
                          alt="alt"
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Registered
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.city}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          alt="alt"
                          className="w-[25px] h-[25px] rounded-md"
                          src={year}
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Registered year
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.year}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          alt="alt"
                          className="w-[25px] h-[25px] rounded-md"
                          src={pricetag}
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Price
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        Rs {data.price}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Image
                          alt="alt"
                          className="w-[25px] h-[25px] rounded-md"
                          src={call}
                        />
                        <h1 className="text-gray-500 capitalize text-lg">
                          Contact
                        </h1>
                      </div>
                      <h1 className="text-gray-500 capitalize text-lg">
                        {data.phone}
                      </h1>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{data.description}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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
}

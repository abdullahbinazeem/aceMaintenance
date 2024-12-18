import {
  Facebook,
  FacebookIcon,
  Headset,
  Instagram,
  Mail,
  MapPinIcon,
  Phone,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
        <div className="xl:flex gap-32  md:justify-between">
          <div className="mb-16 xl:mb-0 basis-1/3">
            <a href="" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ace Maintenance
              </h1>
            </a>
            <p className="mt-6  text-gray-500 dark:text-gray-400 font-medium ">
              The Most Affordable, High-End House and Exterior Cleaning Provider
              In Vancouver.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-4">
                <li>
                  <a href="" className="hover:underline">
                    Pressure Washing
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Window Cleaning
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Drive Way & Balcony
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Exterior
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li>
                  <a href="" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6   text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center"
                  >
                    <Headset /> 604-653-0082
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center whitespace-nowrap"
                  >
                    <Mail className="shrink-0" />
                    Ace Maintenance@email.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center"
                  >
                    <MapPinIcon /> 564 Vancouver, BC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Ace Maintenance™. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-20 items-center">
      <div className="order-2 lg:order-1 mt-5 lg:mt-0">
        <img className="rounded-xl" src="https://i.ibb.co/xm7tdfv/04.jpg" alt="" />
      </div>
      <div className="order-1 lg:order-2">
        <div className="text-zinc-500 text-[0.94rem] leading-5 px-6">
          <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold mb-4">Welcome to WBS University</h2>

          <p className="mb-6">
            Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.
          </p>

          <div className="flex flex-wrap -ml-3 -mr-3 -mt-6">
            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-amber-400 text-white text-[1.31rem] leading-7 text-center rounded-md ">
                  <svg
                    fill="#fff"
                    width={24}
                    height={24}
                    viewBox="-32 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                    className="inline-block mt-1"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
                    </g>
                  </svg>
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Undergraduate</h6>

                  <div className="text-[0.82rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alarm-clock inline-block mr-1 -mt-1"
                    >
                      <circle cx="12" cy="13" r="8" />
                      <path d="M12 9v4l2 2" />
                      <path d="M5 3 2 6" />
                      <path d="m22 6-3-3" />
                      <path d="M6.38 18.7 4 21" />
                      <path d="M17.64 18.67 20 21" />
                    </svg>
                    Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-cyan-600 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                    className="inline-block mt-1"
                    width={24}
                    height={24}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M14.217 3.49965C12.796 2.83345 11.2035 2.83345 9.78252 3.49965L5.48919 5.51246C6.27114 5.59683 6.98602 6.0894 7.31789 6.86377C7.80739 8.00594 7.2783 9.32867 6.13613 9.81817L5.06046 10.2792C4.52594 10.5082 4.22261 10.6406 4.01782 10.7456C4.0167 10.7619 4.01564 10.7788 4.01465 10.7962L9.78261 13.5003C11.2036 14.1665 12.7961 14.1665 14.2171 13.5003L20.9082 10.3634C22.3637 9.68105 22.3637 7.31899 20.9082 6.63664L14.217 3.49965Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M4.9998 12.9147V16.6254C4.9998 17.6334 5.50331 18.5772 6.38514 19.0656C7.85351 19.8787 10.2038 21 11.9998 21C13.7958 21 16.1461 19.8787 17.6145 19.0656C18.4963 18.5772 18.9998 17.6334 18.9998 16.6254V12.9148L14.8538 14.8585C13.0294 15.7138 10.9703 15.7138 9.14588 14.8585L4.9998 12.9147Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M5.54544 8.43955C5.92616 8.27638 6.10253 7.83547 5.93936 7.45475C5.7762 7.07403 5.33529 6.89767 4.95456 7.06083L3.84318 7.53714C3.28571 7.77603 2.81328 7.97849 2.44254 8.18705C2.04805 8.40898 1.70851 8.66944 1.45419 9.05513C1.19986 9.44083 1.09421 9.85551 1.04563 10.3055C0.999964 10.7284 0.999981 11.2424 1 11.8489V14.7502C1 15.1644 1.33579 15.5002 1.75 15.5002C2.16422 15.5002 2.5 15.1644 2.5 14.7502V11.8878C2.5 11.232 2.50101 10.7995 2.53696 10.4665C2.57095 10.1517 2.63046 9.99612 2.70645 9.88087C2.78244 9.76562 2.90202 9.64964 3.178 9.49438C3.46985 9.33019 3.867 9.15889 4.46976 8.90056L5.54544 8.43955Z"
                        fill="#fff"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Graduate</h6>

                  <div className="text-[0.82rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alarm-clock inline-block mr-1 -mt-1"
                    >
                      <circle cx="12" cy="13" r="8" />
                      <path d="M12 9v4l2 2" />
                      <path d="M5 3 2 6" />
                      <path d="m22 6-3-3" />
                      <path d="M6.38 18.7 4 21" />
                      <path d="M17.64 18.67 20 21" />
                    </svg>
                    Online + Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-rose-600 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                    width={24}
                    height={24}
                    className="inline-block mt-1"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 3L12.4892 2.12785C12.1854 1.95738 11.8146 1.95738 11.5108 2.12785L12 3ZM13.3976 3.784L12.9084 4.65615C13.0542 4.73792 13.2181 4.78185 13.3852 4.78392L13.3976 3.784ZM15 3.80385L15.8598 3.29316C15.6818 2.99359 15.3608 2.80824 15.0124 2.80392L15 3.80385ZM15.8184 5.18162L14.9586 5.69231C15.044 5.83601 15.164 5.95603 15.3077 6.04139L15.8184 5.18162ZM17.1962 6L18.1961 5.98761C18.1918 5.63921 18.0064 5.31817 17.7068 5.14023L17.1962 6ZM17.216 7.60238L16.2161 7.61476C16.2181 7.78189 16.2621 7.94584 16.3438 8.09161L17.216 7.60238ZM18 9L18.8722 9.48924C19.0426 9.18535 19.0426 8.81465 18.8722 8.51076L18 9ZM17.216 10.3976L16.3438 9.90839C16.2621 10.0542 16.2181 10.2181 16.2161 10.3852L17.216 10.3976ZM17.1962 12L17.7068 12.8598C18.0064 12.6818 18.1918 12.3608 18.1961 12.0124L17.1962 12ZM15.8184 12.8184L15.3077 11.9586C15.164 12.044 15.044 12.164 14.9586 12.3077L15.8184 12.8184ZM15 14.1962L15.0124 15.1961C15.3608 15.1918 15.6818 15.0064 15.8598 14.7068L15 14.1962ZM13.3976 14.216L13.3852 13.2161C13.2181 13.2181 13.0542 13.2621 12.9084 13.3438L13.3976 14.216ZM12 15L11.5108 15.8722C11.8146 16.0426 12.1854 16.0426 12.4892 15.8722L12 15ZM10.6024 14.216L11.0916 13.3438C10.9458 13.2621 10.7819 13.2181 10.6148 13.2161L10.6024 14.216ZM9 14.1962L8.14023 14.7068C8.31817 15.0064 8.63921 15.1918 8.98761 15.1961L9 14.1962ZM8.18162 12.8184L9.04139 12.3077C8.95603 12.164 8.83602 12.044 8.69231 11.9586L8.18162 12.8184ZM6.80385 12L5.80392 12.0124C5.80824 12.3608 5.99359 12.6818 6.29316 12.8598L6.80385 12ZM6.784 10.3976L7.78392 10.3852C7.78185 10.2181 7.73792 10.0542 7.65615 9.90839L6.784 10.3976ZM6 9L5.12785 8.51076C4.95738 8.81465 4.95738 9.18535 5.12785 9.48924L6 9ZM6.784 7.60238L7.65615 8.09161C7.73792 7.94584 7.78185 7.78189 7.78392 7.61476L6.784 7.60238ZM6.80385 6L6.29316 5.14023C5.99359 5.31817 5.80824 5.63921 5.80392 5.98762L6.80385 6ZM8.18162 5.18162L8.69231 6.04139C8.83602 5.95603 8.95603 5.83602 9.04139 5.69231L8.18162 5.18162ZM9 3.80385L8.98762 2.80392C8.63921 2.80824 8.31817 2.99359 8.14023 3.29316L9 3.80385ZM10.6024 3.784L10.6148 4.78392C10.7819 4.78185 10.9458 4.73792 11.0916 4.65615L10.6024 3.784ZM8.5 21H7.5C7.5 21.3565 7.68976 21.686 7.99807 21.8649C8.30639 22.0438 8.68664 22.0451 8.99614 21.8682L8.5 21ZM12 19L12.4961 18.1318C12.1887 17.9561 11.8113 17.9561 11.5039 18.1318L12 19ZM15.5 21L15.0039 21.8682C15.3134 22.0451 15.6936 22.0438 16.0019 21.8649C16.3102 21.686 16.5 21.3565 16.5 21H15.5ZM11.5108 3.87215L12.9084 4.65615L13.8869 2.91185L12.4892 2.12785L11.5108 3.87215ZM13.3852 4.78392L14.9876 4.80377L15.0124 2.80392L13.41 2.78408L13.3852 4.78392ZM14.1402 4.31454L14.9586 5.69231L16.6781 4.67094L15.8598 3.29316L14.1402 4.31454ZM15.3077 6.04139L16.6855 6.85977L17.7068 5.14023L16.3291 4.32186L15.3077 6.04139ZM16.1962 6.01239L16.2161 7.61476L18.2159 7.58999L18.1961 5.98761L16.1962 6.01239ZM16.3438 8.09161L17.1278 9.48924L18.8722 8.51076L18.0882 7.11314L16.3438 8.09161ZM17.1278 8.51076L16.3438 9.90839L18.0882 10.8869L18.8722 9.48924L17.1278 8.51076ZM16.2161 10.3852L16.1962 11.9876L18.1961 12.0124L18.2159 10.41L16.2161 10.3852ZM14.9876 13.1962L13.3852 13.2161L13.41 15.2159L15.0124 15.1961L14.9876 13.1962ZM10.6148 13.2161L9.01239 13.1962L8.98761 15.1961L10.59 15.2159L10.6148 13.2161ZM7.80377 11.9876L7.78392 10.3852L5.78408 10.41L5.80392 12.0124L7.80377 11.9876ZM7.65615 9.90839L6.87215 8.51076L5.12785 9.48924L5.91185 10.8869L7.65615 9.90839ZM6.87215 9.48924L7.65615 8.09161L5.91185 7.11314L5.12785 8.51076L6.87215 9.48924ZM7.78392 7.61476L7.80377 6.01238L5.80392 5.98762L5.78408 7.58999L7.78392 7.61476ZM7.31454 6.85977L8.69231 6.04139L7.67094 4.32186L6.29316 5.14023L7.31454 6.85977ZM9.04139 5.69231L9.85977 4.31454L8.14023 3.29316L7.32186 4.67094L9.04139 5.69231ZM9.01238 4.80377L10.6148 4.78392L10.59 2.78408L8.98762 2.80392L9.01238 4.80377ZM11.0916 4.65615L12.4892 3.87215L11.5108 2.12785L10.1131 2.91185L11.0916 4.65615ZM16.6855 11.1402L15.3077 11.9586L16.3291 13.6781L17.7068 12.8598L16.6855 11.1402ZM8.69231 11.9586L7.31454 11.1402L6.29316 12.8598L7.67094 13.6781L8.69231 11.9586ZM12.9084 13.3438L11.5108 14.1278L12.4892 15.8722L13.8869 15.0882L12.9084 13.3438ZM12.4892 14.1278L11.0916 13.3438L10.1131 15.0882L11.5108 15.8722L12.4892 14.1278ZM8.99614 21.8682L12.4961 19.8682L11.5039 18.1318L8.00386 20.1318L8.99614 21.8682ZM11.5039 19.8682L15.0039 21.8682L15.9961 20.1318L12.4961 18.1318L11.5039 19.8682ZM16.5 21V13.3544H14.5V21H16.5ZM14.9586 12.3077L14.6402 12.8437L16.3598 13.8651L16.6781 13.3291L14.9586 12.3077ZM14.6402 12.8437L14.1402 13.6855L15.8598 14.7068L16.3598 13.8651L14.6402 12.8437ZM7.5 13.3544V21H9.5V13.3544H7.5ZM9.85977 13.6855L9.35977 12.8437L7.64023 13.8651L8.14023 14.7068L9.85977 13.6855ZM9.35977 12.8437L9.04139 12.3077L7.32186 13.3291L7.64023 13.8651L9.35977 12.8437ZM13 9C13 9.55228 12.5523 10 12 10V12C13.6569 12 15 10.6569 15 9H13ZM12 10C11.4477 10 11 9.55228 11 9H9C9 10.6569 10.3431 12 12 12V10ZM11 9C11 8.44772 11.4477 8 12 8V6C10.3431 6 9 7.34315 9 9H11ZM12 8C12.5523 8 13 8.44772 13 9H15C15 7.34315 13.6569 6 12 6V8Z"
                        fill="#fff"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Post Graduate</h6>

                  <div className="text-[0.82rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alarm-clock inline-block mr-1 -mt-1"
                    >
                      <circle cx="12" cy="13" r="8" />
                      <path d="M12 9v4l2 2" />
                      <path d="M5 3 2 6" />
                      <path d="m22 6-3-3" />
                      <path d="M6.38 18.7 4 21" />
                      <path d="M17.64 18.67 20 21" />
                    </svg>
                    Online + Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-violet-700 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                    width={24}
                    height={24}
                    className="inline-block mt-1"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Online education</h6>

                  <div className="text-[0.82rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alarm-clock inline-block mr-1 -mt-1"
                    >
                      <circle cx="12" cy="13" r="8" />
                      <path d="M12 9v4l2 2" />
                      <path d="M5 3 2 6" />
                      <path d="m22 6-3-3" />
                      <path d="M6.38 18.7 4 21" />
                      <path d="M17.64 18.67 20 21" />
                    </svg>
                    Coming soon...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            className="bg-sky-600/[0.1] hover:bg-primary-500 text-sky-600 hover:text-white transition duration-300 ease-in-out cursor-pointer inline-block font-medium mt-6 py-2 px-4 text-center align-middle border border-solid rounded-md overflow-hidden"
            href="https://eduport.webestica.com/#"
          >
            More about us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

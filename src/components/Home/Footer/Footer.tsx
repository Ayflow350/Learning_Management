import React from "react";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronDown,
} from "lucide-react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <a
      href={href}
      className="text-[#8C94A3] transition-colors duration-300 hover:text-primary"
    >
      {children}
    </a>
  </li>
);

const AppStoreButton = ({
  store,
  icon,
}: {
  store: "App Store" | "Play Store";
  icon: React.ReactNode;
}) => (
  <a
    href="#"
    className="flex items-center gap-3 rounded-lg bg-gray-800 p-3 transition-colors hover:bg-gray-700"
  >
    {icon}
    <div>
      <p className="text-xs text-gray-400">Download now</p>
      <p className="text-md font-semibold text-white">{store}</p>
    </div>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#1D2026] text-white">
      <div className="container mx-auto px-6 pt-24 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Logo and Social */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold">E-tutor</span>
            </div>
            <p className="mb-6 max-w-xs text-[14px] text-gray-400">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center  bg-gray-800 transition-colors hover:bg-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center  bg-gray-800 transition-colors hover:bg-primary"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center  bg-gray-800 transition-colors hover:bg-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center bg-gray-800 transition-colors hover:bg-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center  bg-gray-800 transition-colors hover:bg-primary"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2, 3, 4: Links */}
          <div>
            <h4 className="mb-4 text-[14px]  font-medium  uppercase tracking-wider text-white">
              Top 4 Category
            </h4>
            <ul className="space-y-3  text-[14px]">
              <FooterLink href="#">Development</FooterLink>
              <FooterLink href="#">Finance & Accounting</FooterLink>
              <FooterLink href="#">Design</FooterLink>
              <FooterLink href="#">Business</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[14px]  font-medium uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[14px]">
              <FooterLink href="#">About</FooterLink>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center  text-[#8C94A3]"
                >
                  Become Instructor
                </a>
              </li>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Career</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="mb-4  text-[14px]  font-medium  uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-3  text-[14px]">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Terms & Condition</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-16 border-t border-[#363B47]/50"></div>

        {/* Bottom Bar with App Store buttons and copyright */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h4 className="mb-4 font-bold uppercase tracking-wider text-[#8C94A3]">
              DOWNLOAD OUR APP
            </h4>
            <div className="flex flex-col gap-4 sm:flex-row">
              <AppStoreButton
                store="App Store"
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4603_17472)">
                      <path
                        d="M21.9986 0C20.2926 0.117999 18.2986 1.20999 17.1366 2.63198C16.0766 3.92198 15.2046 5.83797 15.5446 7.69995C17.4086 7.75795 19.3346 6.63996 20.4506 5.19397C21.4946 3.84798 22.2846 1.94399 21.9986 0Z"
                        fill="white"
                      />
                      <path
                        d="M28.7406 10.7362C27.1026 8.68223 24.8006 7.49023 22.6266 7.49023C19.7566 7.49023 18.5427 8.86423 16.5487 8.86423C14.4927 8.86423 12.9307 7.49423 10.4487 7.49423C8.01071 7.49423 5.41473 8.98423 3.76874 11.5322C1.45475 15.1202 1.85075 21.8662 5.60073 27.6121C6.94272 29.6681 8.73471 31.9801 11.0787 32.0001C13.1647 32.0201 13.7527 30.6621 16.5787 30.6481C19.4046 30.6321 19.9406 32.0181 22.0226 31.9961C24.3686 31.9781 26.2586 29.4161 27.6006 27.3601C28.5626 25.8861 28.9206 25.1441 29.6666 23.4801C24.2406 21.4142 23.3706 13.6982 28.7406 10.7362Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4603_17472">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
              <AppStoreButton
                store="Play Store"
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8023 9.76833L3.01877 0.123178C2.80787 4.82537e-05 2.54255 0.00688879 2.33845 0.130018C2.12755 0.253148 1.99829 0.472045 1.99829 0.718304C1.99829 0.718304 2.00509 1.60757 2.0119 3.07145L14.2373 15.3639L19.8023 9.76833Z"
                      fill="url(#paint0_linear_4603_17483)"
                    />
                    <path
                      d="M2.01196 3.07129C2.03237 8.35219 2.0936 21.1714 2.12081 27.5536L14.2441 15.3637L2.01196 3.07129Z"
                      fill="url(#paint1_linear_4603_17483)"
                    />
                    <path
                      d="M29.4084 15.2889L19.8023 9.76855L14.2305 15.3641L20.5166 21.6848L29.4152 16.4723C29.6262 16.3492 29.7554 16.1234 29.7554 15.884C29.7554 15.6377 29.6193 15.412 29.4084 15.2889Z"
                      fill="url(#paint2_linear_4603_17483)"
                    />
                    <path
                      d="M2.11401 27.5536C2.12762 29.8315 2.13442 31.2885 2.13442 31.2885C2.13442 31.5348 2.26368 31.7605 2.47458 31.8768C2.68548 31.9999 2.944 31.9999 3.1549 31.8768L20.5235 21.6913L14.2373 15.3706L2.11401 27.5536Z"
                      fill="url(#paint3_linear_4603_17483)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4603_17483"
                        x1="1.99829"
                        y1="7.70208"
                        x2="19.8054"
                        y2="7.70208"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#63BE6B" />
                        <stop offset="0.506" stop-color="#5BBC6A" />
                        <stop offset="1" stop-color="#4AB96A" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4603_17483"
                        x1="2.0087"
                        y1="15.3154"
                        x2="14.237"
                        y2="15.3154"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3EC6F2" />
                        <stop offset="1" stop-color="#45AFE3" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_4603_17483"
                        x1="14.237"
                        y1="15.731"
                        x2="29.7538"
                        y2="15.731"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FAA51A" />
                        <stop offset="0.387" stop-color="#FAB716" />
                        <stop offset="0.741" stop-color="#FAC412" />
                        <stop offset="1" stop-color="#FAC80F" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_4603_17483"
                        x1="2.11701"
                        y1="23.6696"
                        x2="20.5232"
                        y2="23.6696"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#EC3B50" />
                        <stop offset="1" stop-color="#E7515B" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © 2021 - Eduflex. Designed by{" "}
              <a href="#" className="text-primary hover:underline">
                Templatecookie
              </a>
              . All rights reserved
            </p>
            <div className="inline-block relative mt-4">
              <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white border border-gray-800 px-4 py-2 rounded-lg">
                <span>English</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

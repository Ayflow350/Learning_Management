import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
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
      className="text-gray-400 transition-colors duration-300 hover:text-primary"
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
    <footer className="bg-dark-footer text-white">
      <div className="container mx-auto px-6 pt-24 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Logo and Social */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/logo-icon.svg"
                alt="E-tutor Icon"
                width={36}
                height={36}
              />
              <span className="text-2xl font-bold">E-tutor</span>
            </div>
            <p className="mb-6 max-w-xs text-gray-400">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-primary"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-primary"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2, 3, 4: Links */}
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-400">
              Top 4 Category
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Development</FooterLink>
              <FooterLink href="#">Finance & Accounting</FooterLink>
              <FooterLink href="#">Design</FooterLink>
              <FooterLink href="#">Business</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">About</FooterLink>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center font-semibold text-primary"
                >
                  Become Instructor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Career</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-400">
              Support
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Terms & Condition</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-16 border-t border-gray-800"></div>

        {/* Bottom Bar with App Store buttons and copyright */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h4 className="mb-4 font-bold uppercase tracking-wider text-gray-400">
              DOWNLOAD OUR APP
            </h4>
            <div className="flex flex-col gap-4 sm:flex-row">
              <AppStoreButton
                store="App Store"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.7c-.2-36.7 30.1-68.7 63.5-68.7c.7 0 1.2 .5 1.2 1.2v47.5c0 .7-.5 1.2-1.2 1.2c-29.7 0-54.3 24.6-53.8 54.3c.1 1.1 1 2 2.1 2h47.5c.7 0 1.2-.5 1.2-1.2V280.9c0-.7-.5-1.2-1.2-1.2c-33.4 0-63.7 32-63.5 68.7c.2 36.7-30.1 68.7-63.5 68.7c-.7 0-1.2-.5-1.2-1.2V381.9c0-.7.5-1.2 1.2-1.2c29.7 0 54.3-24.6 53.8-54.3c-.1-1.1-1-2-2.1-2h-47.5c-.7 0-1.2.5-1.2 1.2v-47.5c0-.7.5-1.2 1.2-1.2c33.4 0 63.7-32 63.5-68.7zM86.6 201.1c-33.4 0-63.7 32-63.5 68.7c.2 36.7 30.1 68.7 63.5 68.7c.7 0 1.2-.5 1.2-1.2V381.9c0-.7-.5-1.2-1.2-1.2c-29.7 0-54.3-24.6-53.8-54.3c.1-1.1 1-2 2.1-2h47.5c.7 0 1.2.5 1.2 1.2v-47.5c0-.7-.5-1.2-1.2-1.2c-33.4 0-63.7-32-63.5-68.7z" />
                  </svg>
                }
              />
              <AppStoreButton
                store="Play Store"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L464 256 47 512V0zm421.5 271.6l-76.5 44.2-259.4-155.7 335.9-10.6z" />
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

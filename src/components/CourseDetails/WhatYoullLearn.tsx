import React from "react";

import Image from "next/image";

const WhatYoullLearn = () => {
  const points = [
    "You will learn how to design beautiful websites using Figma, a powerful webtool used by designers at Uber, Airbnb and Microsoft.",
    "You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, Nasa, and more.",
    "You will learn secret tips of freelance Web Designers and how they make great money freelancing online.",
    "Learn to use that functionality, learning both Python 2 and Python 3!",
    "Understand how to use both the Jupyter Notebook and create .py files.",
    "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
  ];
  return (
    <div className="rounded-lg border border-transparent  bg-[#E1F7E3] p-8">
      <h3 className="mb-6 text-2xl font-bold text-dark-text">
        What you will learn in this course
      </h3>
      <ul className="grid  grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <Image
              src={"/Video/CheckCircle.svg"}
              width={24}
              height={24}
              alt=""
            />
            <span className="text-[#4E5566] text-sm w-[352px] ">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WhatYoullLearn;

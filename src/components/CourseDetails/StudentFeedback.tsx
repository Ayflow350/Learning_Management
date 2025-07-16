import React from "react";
import Image from "next/image";
import { Progress } from "../ui/progress";
import { DotIcon, Star } from "lucide-react";
import { Button } from "../ui/button";

const RatingBar = ({
  stars,
  percentage,
}: {
  stars: number;
  percentage: number;
}) => (
  <div className="flex items-center gap-4">
    <div className="w-2/5">
      <Progress value={percentage} className="h-2" />
    </div>
    <div className="flex w-1/5 items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < stars ? "text-[#FD8E1F] fill-[#FD8E1F]" : "text-gray-300"
          }
        />
      ))}
    </div>
    <p className="w-1/5 text-sm text-[#1D2026] font-semibold">{percentage}%</p>
  </div>
);

// Assuming DotIcon is from lucide or similar

const Review = ({
  name,
  time,
  text,
  avatar,
}: {
  name: string;
  time: string;
  text: string;
  avatar: string;
}) => (
  <div className="flex items-start space-x-4 py-6 border-b">
    {/* === THIS IS THE FIX === */}
    {/* Add `flex-shrink-0` to prevent this container from shrinking */}
    <div className="flex-shrink-0">
      <Image
        src={avatar}
        alt={name}
        width={40} // Use the actual size you want (40px)
        height={40} // Use the actual size you want (40px)
        className="rounded-full object-cover" // Use object-cover to ensure the image fits nicely
      />
    </div>

    {/* Add `flex-1 min-w-0` to the text container so it fills the remaining space and wraps text correctly */}
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1">
        <h4 className="font-medium text-sm  text-[#1D2026]">{name}</h4>
        <div className=" flex items-center  text-[12px] text-[#6E7485]">
          <span className="-mr-1">
            <DotIcon />
          </span>
          {time}
        </div>
      </div>
      <div className="flex items-center my-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="text-[#FD8E1F] fill-[#FD8E1F]" />
        ))}
      </div>
      <p className="text-[#4E5566] text-[14px]">{text}</p>
    </div>
  </div>
);

const StudentFeedback = () => {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold text-dark-text">
        Students Feedback
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center rounded-lg border p-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-bold text-[#FD8E1F]">4.8</p>
          <div className="flex my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < 5 ? "text-[#FD8E1F] fill-[#FD8E1F]" : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">Course Rating</p>
        </div>
        <div className="md:col-span-2">
          <RatingBar stars={5} percentage={75} />
          <RatingBar stars={4} percentage={21} />
          <RatingBar stars={3} percentage={3} />
          <RatingBar stars={2} percentage={1} />
          <RatingBar stars={1} percentage={1} />
        </div>
      </div>
      <div className="mt-8">
        <Review
          name="Guy Hawkins"
          time="1 week ago"
          text="This course is just amazing! I have great course content, nice and clear explanation of giving examples, the instructor has a pretty attractive voice, pretty and interesting and fun at the same time!"
          avatar="https://i.pravatar.cc/48?img=13"
        />
        <Review
          name="Dianne Russell"
          time="14 hours ago"
          text="This course is just amazing! I have great course content, nice and clear explanation of giving examples, the instructor has a pretty attractive voice, pretty and interesting and fun at the same time!"
          avatar="https://i.pravatar.cc/48?img=12"
        />
      </div>
      <div className="text-center mt-6 mb-5">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
};

export default StudentFeedback;

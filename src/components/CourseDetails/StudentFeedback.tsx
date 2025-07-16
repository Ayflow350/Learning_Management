import React from "react";
import Image from "next/image";
import { Progress } from "../ui/progress";
import { Star } from "lucide-react";
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
    <Image
      src={avatar}
      alt={name}
      width={48}
      height={48}
      className="rounded-full"
    />
    <div>
      <div className="flex items-center gap-4">
        <h4 className="font-semibold text-[#1D2026]">{name}</h4>
        <p className="text-sm text-gray-500"> . {time}</p>
      </div>
      <div className="flex items-center my-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-600">{text}</p>
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
          <p className="text-6xl font-bold text-amber-500">4.8</p>
          <div className="flex my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < 5 ? "text-amber-400 fill-amber-400" : "text-gray-300"
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
          avatar="https://i.pravatar.cc/48?img=11"
        />
        <Review
          name="Dianne Russell"
          time="14 hours ago"
          text="This course is just amazing, I have a great course content."
          avatar="https://i.pravatar.cc/48?img=12"
        />
      </div>
      <div className="text-center mt-6">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
};

export default StudentFeedback;

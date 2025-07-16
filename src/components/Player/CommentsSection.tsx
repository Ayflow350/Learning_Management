// src/components/Player/CommentsSection.tsx
import React from "react";
// import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// === THIS IS THE FIX: Define the type for a comment ===
interface CommentType {
  avatar: string;
  name: string;
  time: string;
  text: string;
  replies?: CommentType[]; // A comment can have an optional array of replies
}

// Apply the new type to the component's props
const Comment = ({ avatar, name, time, text, replies = [] }: CommentType) => (
  <div className="flex items-start gap-4">
    <Avatar>
      <AvatarImage src={avatar} alt={name} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <p className="font-semibold text-dark-text">{name}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <p className="text-gray-600 mt-1">{text}</p>
      <button className="text-sm font-semibold text-gray-500 mt-2 hover:text-primary">
        REPLY
      </button>
      {/* TypeScript now knows `reply` is an object, so the spread is safe */}
      {replies.map((reply, index) => (
        <div key={index} className="mt-4">
          <Comment {...reply} />
        </div>
      ))}
    </div>
  </div>
);

const CommentsSection = () => {
  // Tell TypeScript that the `comments` array conforms to our new type
  const comments: CommentType[] = [
    {
      avatar: "https://i.pravatar.cc/40?img=1",
      name: "Ronald Richards",
      time: "1 week ago",
      text: "Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      replies: [
        {
          avatar: "https://i.pravatar.cc/40?img=2",
          name: "Kristin Watson",
          time: "1 week ago",
          text: "Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
        },
      ],
    },
    {
      avatar: "https://i.pravatar.cc/40?img=3",
      name: "Cody Fisher",
      time: "2 weeks ago",
      text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="font-bold text-dark-text">Comments (154)</h3>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          className="text-primary border-primary/50 hover:bg-primary-light hover:text-primary"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default CommentsSection;

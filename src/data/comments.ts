// src/data/comments.ts
export interface Comment {
  id: number;
  author: string;
  avatarUrl: string;
  timeAgo: string;
  content: string;
  replies?: Comment[];
}

export const commentsData: Comment[] = [
  {
    id: 1,
    author: "Ronald Richards",
    avatarUrl: "https://i.pravatar.cc/40?img=1",
    timeAgo: "1 week ago",
    content:
      "At et sit fastidii liberavisse cum, sea mollis pertinax definitionem at, an sea commodo dictas. Et vis tempor legimus, sea oblique docendi te.",
  },
  {
    id: 2,
    author: "Kristin Watson",
    avatarUrl: "https://i.pravatar.cc/40?img=2",
    timeAgo: "1 week ago",
    content:
      "Malis percipitur instructior an cum, viderer luptatum et est, et iisque denique pertinacia.",
    replies: [
      {
        id: 3,
        author: "Courtney Henry",
        avatarUrl: "https://i.pravatar.cc/40?img=3",
        timeAgo: "1 week ago",
        content: "Thank you so much, you are a great mentor. 🙌",
      },
    ],
  },
];

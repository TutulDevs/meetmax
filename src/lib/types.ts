export type POST = {
  user: {
    img: string;
    initials: string;
    name: string;
  };
  postTimeInfo: string;
  stats: {
    likedBy: number;
    comments: number;
    shares: number;
  };
  isLiked: boolean;
  contents: {
    images: string[];
    text: string;
  };
};

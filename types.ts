export type ScreenName = 'feed' | 'create' | 'arena' | 'events' | 'profile';

export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  type: 'spoiler' | 'theory' | 'contest' | 'discussion';
  title: string;
  content: string;
  image?: string;
  upvotes: string;
  comments: number;
  contestInfo?: {
    endsIn: string;
    joined: number;
  };
}

export interface UserStats {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  role?: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  type: string;
  time: string;
  host?: string;
  attendees: number;
  image?: string;
  isFeatured?: boolean;
}
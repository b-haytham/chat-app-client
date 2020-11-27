export type UserType = {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  requestsSent: UserType[];
  requestsRecieved: UserType[];
  followers: UserType[] | string[];
  follows: UserType[] | string[];
  posts: PostType[] | string[] | null;
  comments: CommentType[] | string[];
  rooms: RoomType[] | string[];
  messagesSent: MessageType[] | string[];
  messagesRecieved: MessageType[] | string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type PostType = {
  _id: string;
  title: string;
  description: string;
  content: string;
  owner: UserType | string;
  comments: CommentType[] | string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type CommentType = {
  _id: string;
  text: string;
  owner: UserType | string;
  post: PostType | string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type MessageType = {
  _id: string;
  sender: UserType;
  reciever: UserType;
  room: RoomType | string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type RoomType = {
  _id: string;
  creator: UserType;
  acceptor: UserType;
  messages: MessageType[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type FollowerType = {
  _id: string;
  sender: string;
  reciever: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

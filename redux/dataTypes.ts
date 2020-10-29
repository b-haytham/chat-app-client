

export type UserType = {
    _id: string
    username: string
    email: string
    avatar: string
    requestsSent: UserType[] | string[]
    requestsRecived: UserType[] | string[]
    followers: UserType[] | string[]
    follows: UserType[] | string[]
    posts: PostType[] | string[] | null
    comments: CommentType[] | string[]
    rooms: RoomType[] | string[]
    messagesSent: MessageType[] | string[]
    messagesRecieved: MessageType[] | string[]
    createdAt: Date
    updatedAt: Date
    __v: number
}


export type PostType = {
    title: string
    description: string
    content: string
    owner: UserType | string
    comments: CommentType[] | string[]
    createdAt: Date
    updatedAt: Date
    __v: number 
}

export type CommentType = {
    text: string
    owner: UserType | string
    post: PostType | string
    createdAt: Date
    updatedAt: Date
    __v: number
}

export type MessageType = {
    sender: UserType | string
    reciever: UserType | string
    room: RoomType | string
    content: string
    createdAt: Date
    updatedAt: Date
    __v: number
}

export type RoomType = {
    creator: UserType | string 
    acceptor: UserType | string
    messages: MessageType[] | string[]
    createdAt: Date
    updatedAt: Date
    __v: number
}
export type TProject = {
    title: string;
    images: string[];
    description: string;
    technology: string[];
    liveLink: string;
    clientRepo: string;
    serverRepo?: string;
  };
  
  export type TBlog = {
    title: string;
    content: string;
    image: string;
    category: string;
  };
  
  export type TUser = {
    name: string;
    email: string;
    password: string;
  };
  
  export type TRUser = {
    email: string;
    name: string;
    __v: number;
    _id: number;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type TMessage = {
    message: string;
    email: string;
    name: string;
  };
  
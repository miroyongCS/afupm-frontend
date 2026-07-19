export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

/**
 * 인덱스드 엑세스 타입
 * 복잡한 큰 타입에서 필요한 타입만 추출하여 사용 용이
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthor(author: Post["author"]) {
  console.log(`${author.name}`);
}

const post: Post = {
  title: "",
  content: "",
  author: {
    id: 1,
    name: "",
  },
};

type Posts = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const posts: Posts[number] = {
  title: "",
  content: "",
  author: {
    id: 1,
    name: "",
  },
};

function printAuthors(author: Posts[number]["author"]) {
  console.log(`${author.name}`);
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

/**
 * Pick <T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  url: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 타입을 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL, 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  url: "",
};

/**
 * Record<K, V>
 */

type Thumbnail = {
  large: {
    url: string;
  };

  medium: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail2 = Record<"large" | "medium", { url: string }>;

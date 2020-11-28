import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Author from '@/components/simple/Author/Author';
import { getPost } from '@/resource/github';
import matter from 'gray-matter';

export default function Index({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Author />
      <h1>{post.data.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const post = await getPost('first-post.md');
  const { content, data } = matter(post);
  return {
    props: {
      post: {
        content,
        data,
      },
    },
  };
};

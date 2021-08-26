import Router from 'next/router';

export default function Post() {
  const path = typeof window !== 'undefined' ? Router.asPath : ''
  return <h1>I am the post with path: {path}</h1>
}
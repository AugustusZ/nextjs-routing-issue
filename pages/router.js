import Router from 'next/router'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {    
    // pretend this is a router that could route to multiple places...
    Router.push({
      pathname: `/posts/view`,
      query: {
        id: 'first-post',
      },
      hash: 'so-cool'
    }, '/posts/first-post#so-cool')    
  }, [])  

  return (
    <h1>Routing...</h1>
  )
}

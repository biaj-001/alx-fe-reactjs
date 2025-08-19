// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import React, { useState } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query Demo</h1>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      {showPosts && <PostsComponent />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

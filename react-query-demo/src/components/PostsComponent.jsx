import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);
  document.getElementById("output").innerHTML = "Bonjour !";
  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
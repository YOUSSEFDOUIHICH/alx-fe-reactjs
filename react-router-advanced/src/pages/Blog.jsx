import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Get the dynamic part of the URL

  return <h2>Viewing Post ID: {postId}</h2>;
}

export default BlogPost;
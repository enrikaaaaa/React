import { useEffect, useState } from "react";
import { getPosts } from "../../api/news";
import Text from "../../common/Text";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data.slice(0, 2));
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <Header />
      <Text className="h1">News</Text>
      <div className="news">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Text className="h1">{post.title}</Text>
              <Text className="h2">{post.body}</Text>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default News;

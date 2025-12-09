import { useState, useEffect } from "react";
import NewCard from "./NewCard";

function Home({ category, search }) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "edaa23ba1a2b4c96969dfc7649907efb";

  useEffect(() => {
    setLoading(true); // start loading
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${search}&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles || []))
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); // stop loading
  }, [category, search]);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  if (!articles || articles.length === 0) {
    return <p className="text-center mt-5">No articles found!</p>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{category} News</h2>

      <div className="row">
        {articles.map((article, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <NewCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

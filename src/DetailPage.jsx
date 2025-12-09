import { useLocation, Link } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();
  const { article } = state;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-primary mb-3">Back</Link>

      <h2>{article.title}</h2>

      {article.urlToImage && (
        <img src={article.urlToImage} className="my-3" 
        style={{width:"80%",borderRadius:"10px"}} alt="" />
      )}

      <p><b>Author: </b>{article.author || "Unknown"}</p>
<p><b>Published: </b>{article.publishedAt ? article.publishedAt.slice(0,16).replace("T"," ") : "Unknown"}</p>

      <p className="mt-4">{article.content || article.description}</p>
    </div>
  );
}

export default DetailPage;

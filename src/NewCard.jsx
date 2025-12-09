import { Link } from "react-router-dom";

function NewCard({ article }) {
  return (
    <div className="card shadow-sm h-100" style={{ borderRadius:"10px" }}>

      <img 
        src={article.urlToImage || "https://placehold.co/600x400"} 
        className="card-img-top"
        style={{ height:"200px", objectFit:"cover" }} 
        alt={article.title || "Image"} 
      />

      <div className="card-body d-flex flex-column">
        <h5>{article.title}</h5>
        <p className="text-muted" style={{fontSize:"14px"}}>
          {article.author || "Unknown Author"}
        </p>
        <p style={{flexGrow:1}}>
          {article.description || "No description available"}
        </p>

        <Link 
          to="/detail" 
          state={{article}} 
          className="btn btn-primary mt-auto" 
          style={{width:"40%"}}
        >
          See More
        </Link>
      </div>

    </div>
  );
}

export default NewCard;

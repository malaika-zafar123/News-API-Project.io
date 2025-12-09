import { useState } from "react";

function Navbar({ setCategory }) {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setCategory(search);
      setSearch(""); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">

        <a className="navbar-brand text-white fw-bold" href="#">News App</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('business')}>Business</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('general')}>General</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('entertainment')}>Entertainment</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('health')}>Health</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('science')}>Science</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('sports')}>Sports</span></li>
            <li className="nav-item"><span className="nav-link text-white" style={{cursor:"pointer"}} onClick={()=>setCategory('technology')}>Technology</span></li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

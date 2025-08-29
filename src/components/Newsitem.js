

import React from "react";

const  Newsitem =(props)=>{
  
    let { title, description, imageUrl, newsUrl,author,publishedAt,source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://platform.theverge.com/wp-content/uploads/sites/2/2025/08/Google-Pixel-10.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger  " style = {{left:"90%", zIndex:"1"}}>
   {source}
    
  </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} 3 {publishedAt}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;

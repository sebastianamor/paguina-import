import React from 'react';
import './blog.css';
function Blog() {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <iframe
        title="blog"
        src="https://abogadomigueltoledo.blogspot.com/?m=1"
        width="1200"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Blog; 

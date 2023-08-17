
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Data from '../data/Data.json'
const Blog = () => {
  const {title} = useParams()
  const [blog, setBlog] = useState(null);
   
  const slugify = (text) => {
    return text
      .toLowerCase() // this function return the lowercase of the text/title
      .replace(/ /g, "-") // (/ /g) it is a regular expression, first / and last /g define that it is a regular expression. in this regular expression if the text have any space the replace function will replace the space and set hyphen(-)
  };

    useEffect(() => {
      const singleBlog = Data.blogs.find(item => slugify(item.title) === title)

      if (singleBlog) {
        setBlog(singleBlog)
      }


    }, [title]);
    


  
  return (
    <section>
      <div className="container pt-5">
        {
          blog ? (
            <div className="blog">
              <img src={blog.image} height={'300px'}/>
              <h2>{blog.title}</h2>
              <div>
                <span>by {blog.author}</span>
                <span className="mx-5">on {blog.publishedDate}</span>
                <span><i className="fa-solid fa-eye ms-5"></i> {blog.views}</span>
              </div>
              <p>{blog.content}</p>
            </div>
          ) : (<h2>Sorry the blog not found</h2>)
        }
      </div>
    </section>
  )
}

export default Blog

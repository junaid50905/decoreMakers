
import { useParams } from "react-router-dom"

const Blog = () => {
  const {id} = useParams()
  
  


  
  return (
    <section>
      <div className="container">
        <div className="blog">
          <h2>single blog {id}</h2>
        </div>
      </div>
    </section>
  )
}

export default Blog

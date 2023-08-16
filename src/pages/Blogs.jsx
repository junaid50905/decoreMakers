import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"
import Data from '../data/Data.json'
const Blogs = () => {
  return (
    <section>
      <PageTitle title={'Blogs'}/>

      <div className="container my-5">
        <div className="row">

          {
            Data.blogs.map((blog, i) => {
              const { id, title, author, image, publishedDate, views } = blog
              const truncatedTitle = title.length > 60 ? title.substring(0, 60) + '...' : title;
              return (
                <Link to={`/blogs/${id}`} key={i} className="col-12 col-sm-6 col-md-4 my-3" style={{ textDecoration: 'none' }}>
                  <div>
                    <div className="post-entry">
                      <div className="post-thumbnail"><img src={image} alt="Image" className="img-fluid" /></div>
                      <div className="post-content-entry">
                        <h6 className="my-2">{truncatedTitle}</h6>
                        <div className="meta">
                          <div className="d-flex justify-content-between align-items-center mx-2">
                            <div>by <span className="text-muted">{author}</span></div>
                            <div>on <span className="text-muted">{publishedDate}</span></div>
                            <div><i className="fa-solid fa-eye ms-5"></i><span className="text-muted"> {views}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>

    </section>
  )
}

export default Blogs

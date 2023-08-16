import Data from '../data/Data.json'
import { Link } from 'react-router-dom';
const RecentBlogs = () => {

    const recentBlogs = Data.blogs.slice(0, 3);
  return (
      <div className="blog-section">
          <div className="container">
              <div className="row mb-5">
                  <div className="col-md-6">
                      <h2 className="section-title">Recent Blog</h2>
                  </div>
                  <div className="col-md-6 text-start text-md-end">
                      <Link to={'/blogs'} className="more">View All Posts</Link>
                  </div>
              </div>

              <div className="row">

                  {
                      recentBlogs.map((blog, i)=>{
                        const { title, author, image, publishedDate, views } = blog
                        return(
                            <div className="col-12 col-sm-6 col-md-4" key={i}>
                                <div className="post-entry">
                                    <a href="#" className="post-thumbnail"><img src={image} alt="Image" className="img-fluid" /></a>
                                    <div className="post-content-entry">
                                        <h3><a href="#">{title}</a></h3>
                                        <div className="meta">
                                            <span>by <a href="#">{author}</a></span> <span>on <a href="#">{publishedDate}</a></span>
                                            <span><i className="fa-solid fa-eye ms-5"></i> {views}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                  }

              </div>
          </div>
      </div>
  )
}

export default RecentBlogs

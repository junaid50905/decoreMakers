import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"
import Data from '../data/Data.json'
const Blogs = () => {


  const slugify = (text) => {
    return text
      .toLowerCase() // this function return the lowercase of the text/title
      .replace(/ /g, "-") // (/ /g) it is a regular expression, first / and last /g define that it is a regular expression. in this regular expression if the text have any space the replace function will replace the space and set hyphen(-)
  };
  return (
    <section>
      <PageTitle title={'Blogs'} />

      <div className="container my-5">
        <div className="row">

          {
            Data.blogs.map((blog, i) => {
              const { title, author, image, publishedDate, views } = blog
              const truncatedTitle = title.length > 60 ? title.substring(0, 60) + '...' : title;

              return (
                <Link key={i} to={`/blogs/${slugify(title)}`} className="col-12 col-sm-6 col-md-4 my-3" style={{ textDecoration: 'none' }}>
                  <div className="post-entry">
                    <div className="post-thumbnail"><img src={image} alt="Image" className="img-fluid" /></div>
                    <div className="post-content-entry">
                      <h6 className="my-2">{truncatedTitle}</h6>
                      <div className="meta d-flex justify-content-between px-2">
                        <div><span className="text-dark">by</span> {author}</div>
                        <div><span className="text-dark">on</span> {publishedDate}</div>
                        <div><i className="fa-solid fa-eye ms-5 text-dark"></i> {views}</div>
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

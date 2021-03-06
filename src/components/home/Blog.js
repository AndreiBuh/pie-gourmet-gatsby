import React from "react"
import { Link } from "gatsby"

import Title from "../global/Title"

const Blog = () => {
  return (
    <section className="p-5" style={{ background: "#fff4f3" }} id="blog">
      <div className="container">
        <Title title="Blog" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus quasi qui delectus accusantium ab non, in sit ipsam
              libero exercitationem excepturi iste architecto deleniti
              blanditiis harum, iure minima tempora quod tenetur minus. Iure
              eius voluptates explicabo similique molestiae beatae, odit enim
              eligendi facere tempora vero dolores magnam fuga ab pariatur
              nesciunt quos recusandae atque labore!
            </p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

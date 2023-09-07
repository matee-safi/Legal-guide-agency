import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <div>
    <a href="../"><StaticImage src="../images/404-error-template-6.png.webp" quality={100} alt="Page not Found"/></a>
  </div>
)

export default NotFoundPage

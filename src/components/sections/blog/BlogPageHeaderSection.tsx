import Image from "next/image";
import BlogBreadcrumb from "./subcomponents/BlogBreadcrumb";
import BlogFeaturedHero from "./subcomponents/BlogFeaturedHero";
import { featuredBlogs } from "@/data/blogs";

interface BlogPageHeaderSectionProps {
  title?: string;
}

export default function BlogPageHeaderSection({ title = "Latest Blogs" }: BlogPageHeaderSectionProps) {
  return (
    <section className="tj-page-header position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content position-relative">
              <h1 className="tj-page-title">{title}</h1>
              <BlogBreadcrumb currentTitle="Blog" />
              <div className="shape position-absolute end-0 top-0 d-none d-lg-block opacity-50" style={{ pointerEvents: "none" }}>
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>

          {/* Top 3 Featured Articles in Page Header */}
          <BlogFeaturedHero posts={featuredBlogs} />
        </div>
      </div>
    </section>
  );
}

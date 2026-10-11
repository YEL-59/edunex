import Image from "next/image";
import BlogDetailsBreadcrumb from "./subcomponents/BlogDetailsBreadcrumb";

interface BlogDetailsHeaderProps {
  title?: string;
}

export default function BlogDetailsHeader({ title = "Blog Details" }: BlogDetailsHeaderProps) {
  return (
    <section className="tj-page-header position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content position-relative">
              <h1 className="tj-page-title">{title}</h1>
              <BlogDetailsBreadcrumb title={title} />
              <div
                className="shape position-absolute end-0 top-0 d-none d-lg-block opacity-50"
                style={{ pointerEvents: "none" }}
              >
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

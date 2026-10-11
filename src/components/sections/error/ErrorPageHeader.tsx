import Image from "next/image";
import ErrorBreadcrumb from "./subcomponents/ErrorBreadcrumb";

export default function ErrorPageHeader() {
  return (
    <section className="tj-page-header error-page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              <ErrorBreadcrumb currentPage="Error 404" />
              <div className="shape">
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

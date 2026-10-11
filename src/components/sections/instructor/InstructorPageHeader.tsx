import Image from "next/image";
import InstructorBreadcrumb from "./subcomponents/InstructorBreadcrumb";

interface InstructorPageHeaderProps {
  title?: string;
  currentPage?: string;
}

export default function InstructorPageHeader({
  title = "Expert Instructor",
  currentPage = "Instructor",
}: InstructorPageHeaderProps) {
  return (
    <section className="tj-page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              <h1 className="tj-page-title">{title}</h1>
              <InstructorBreadcrumb currentPage={currentPage} />
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

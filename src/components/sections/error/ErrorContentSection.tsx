import ErrorIllustration from "./subcomponents/ErrorIllustration";
import ErrorActionButtons from "./subcomponents/ErrorActionButtons";

export default function ErrorContentSection() {
  return (
    <section className="tj-error-section section-gap-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-error-wrap text-center">
              <div className="tj-error-content">
                {/* Sub-component: 3D Illustration */}
                <ErrorIllustration />

                <span className="sec-subtitle">
                  <i className="tji-subtitle"></i> Page not found
                </span>
                <h2 className="error-title">This Page Skipped Class.</h2>
                <div className="error-desc">
                  The page you&apos;re looking for was moved, renamed or never
                  enrolled. Let&apos;s get you back to learning.
                </div>

                {/* Sub-component: Navigation CTA Buttons */}
                <ErrorActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

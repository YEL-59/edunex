import ComingSoonCountdown from "./subcomponents/ComingSoonCountdown";
import ComingSoonForm from "./subcomponents/ComingSoonForm";
import ComingSoonSocials from "./subcomponents/ComingSoonSocials";
import ComingSoonFooter from "./subcomponents/ComingSoonFooter";

export default function ComingSoonSection() {
  return (
    <section className="tj-coming-soon-section">
      <div
        className="tj_coming_soon"
        style={{
          backgroundImage: "url('/assets/images/bg/coming-soon-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          position: "relative",
        }}
      >
        <div
          className="tj_coming_soon_wrap"
          style={{
            maxWidth: "760px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Main Content */}
          <div className="tj_coming_soon_content text-center mb-4">
            <span
              className="sec-subtitle d-inline-block"
              style={{
                color: "#60a5fa",
                fontWeight: 600,
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              <i className="tji-subtitle" style={{ marginRight: "6px" }}></i>{" "}
              Something new is brewing
            </span>
            <h1
              className="title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Coming Soon
            </h1>
            <div
              className="desc"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              We&apos;re putting the finishing touches on something special.
              Leave your email and be the first to know when we launch.
            </div>
          </div>

          {/* Sub-component: Live Glassmorphism Countdown */}
          <ComingSoonCountdown />

          {/* Sub-component: Interactive Subscription Form */}
          <ComingSoonForm />

          {/* Sub-component: Social Links */}
          <ComingSoonSocials />

          {/* Sub-component: Copyright */}
          <ComingSoonFooter />
        </div>
      </div>
    </section>
  );
}

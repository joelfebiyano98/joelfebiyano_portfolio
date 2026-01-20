export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(1200px 600px at 50% 0%, #111827 0%, #020617 60%, #000 100%)",
        color: "#e5e5e5",
        padding: "80px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "820px", width: "100%" }}>
        <h2 style={{ fontSize: "40px", letterSpacing: "-0.5px" }}>
          About Me
        </h2>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#444",
            margin: "20px 0 32px",
          }}
        />

        <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
          I am a <strong>Teradata Database Administrator</strong> with hands-on
          experience managing <strong>production-grade data platforms</strong>.
          My work focuses on ensuring database stability, performance, and
          availability for business-critical systems.
        </p>

        <p style={{ marginTop: "16px", lineHeight: 1.8, opacity: 0.9 }}>
          I regularly handle <strong>performance tuning</strong>, query
          optimization, space management, and incident resolution in
          high-pressure environments. I work closely with application and
          engineering teams to diagnose issues, implement fixes, and prevent
          recurring problems.
        </p>

        <p style={{ marginTop: "16px", lineHeight: 1.8, opacity: 0.9 }}>
          Alongside core DBA responsibilities, I have exposure to
          <strong> cloud and modern data platforms</strong>, and I am actively
          building skills around automation, monitoring, and scalable data
          infrastructure.
        </p>

        <p style={{ marginTop: "16px", lineHeight: 1.8, opacity: 0.9 }}>
          I value clean systems, reliability, and continuous improvement, and I
          aim to grow into roles that combine <strong>deep database expertise</strong>
          with <strong>cloud and data engineering</strong>.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/joelfebiyano98"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>

        <div style={{ marginTop: "48px" }}>
          <a href="/" style={{ color: "#7dd3fc", textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

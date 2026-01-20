export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#0b0b0b",
        color: "#e5e5e5",
        padding: "80px 24px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <h2 style={{ fontSize: "40px", letterSpacing: "-0.5px" }}>
          About
        </h2>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#444",
            margin: "20px 0",
          }}
        />

        <p style={{ marginTop: "20px", lineHeight: 1.7, opacity: 0.85 }}>
          I am a Teradata DBA with experience managing production databases,
          handling performance tuning, monitoring, and ensuring high availability.
          I work closely with application teams to maintain stable and reliable
          data platforms.
        </p>

        <p style={{ marginTop: "16px", lineHeight: 1.7, opacity: 0.85 }}>
          I am interested in cloud data platforms, database automation, and
          continuously improving system reliability through best practices
          and proactive monitoring.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a href="/" style={{ color: "#7dd3fc", textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

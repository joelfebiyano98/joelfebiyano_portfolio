export default function App() {
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          transform: "translateY(-40px)",
        }}
      >
        <h1 style={{ fontSize: "56px", letterSpacing: "-1px" }}>
          Joel Febiyano
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#444",
            margin: "24px auto",
          }}
        />

        <p style={{ marginTop: "12px", opacity: 0.7 }}>
          Teradata DBA · Cloud & Data
        </p>

        {/* Links */}
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <a
            href="/about"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
          >
            About
          </a>

          <a
            href="https://github.com/joelfebiyano98"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/joelfebiyano"
            style={{ color: "#7dd3fc", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

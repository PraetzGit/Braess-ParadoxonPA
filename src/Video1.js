export default function Video1() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 1000,
        margin: "auto",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>
        1. Simulation in SUMO – ohne zusätzliche Straße
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        Diese Simulation zeigt das Verkehrsnetz ohne zusätzliche Straße
      </p>

      {/* Layout: Video + Erklärung */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Video */}
        <div style={{ flex: "1 1 550px" }}>
          <video
            controls
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <source src="/Paint1.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Video nicht.
          </video>
        </div>

        {/* Erklärung */}
        <div style={{ flex: "1 1 300px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#222" }}>
            Erklärung
          </h2>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            In diesem Video fährt das Verkehrsnetz ohne zusätzliche Straße. Alle
            900 Autos verteilen sich auf die beiden Routen – 500 links, 400
            rechts.
          </p>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            Hier gibt es keine Abkürzungen, alles läuft normal. Die
            durchschnittliche Reisezeit hängt nur davon ab, wie viele Autos auf
            welcher Route sind.
          </p>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            Dieses Video zeigt den Startpunkt, an dem wir später vergleichen,
            wie sich zusätzliche Straßen auswirken.
          </p>
        </div>
      </div>
    </div>
  );
}

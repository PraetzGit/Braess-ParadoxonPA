export default function Video1() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 1300,
        margin: "auto",
        fontFamily: "Roboto, sans-serif",
        minHeight: "100vh",
        backgroundImage: "url('/bremerhaven2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>
        1. Simulation in SUMO – ohne zusätzliche Straße
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        Diese Simulation zeigt das Verkehrsnetz ohne zusätzliche Straße
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        
        <div style={{ flex: "1 1 550px" }}>
          <video
            controls
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <source src="/SUMO1.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Video nicht.
          </video>
              <p
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1rem",
              backgroundColor: "rgba(255,255,255,0.85)",
              borderLeft: "5px solid #4caf50",
              fontSize: "0.95rem",
              color: "#333",
              borderRadius: "6px",
            }}
          >
            <strong>Hinweis:</strong> Die Farben der Autos hängen von ihren
            Geschwindigkeiten ab
            <br />
            (grün – schnell, gelb – mäßig, rot – sehr langsam oder stehend)
          </p>
        </div>

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

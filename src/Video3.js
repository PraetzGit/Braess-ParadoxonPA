export default function Video3() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 1300,
        margin: "auto",
        fontFamily: "Roboto, sans-serif",
        minHeight: "100vh",
        backgroundImage: "url('/bremerhaven2.png')", // Bildpfad anpassen
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>
        3. Simulation in SUMO – Braess-Paradoxon
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        In dieser Simulation nutzen mehr als die Hälfte der Fahrzeuge die neue
        Straße.
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
            <source src="/SUMO3.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Video nicht.
          </video>
        </div>

        {/* Erklärung */}
        <div style={{ flex: "1 1 300px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#222" }}>
            Erklärung
          </h2>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            In diesem Szenario nutzen mehr als die Hälfte der 500 linken Autos
            die neue Straße (also mehr als 250).
          </p>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            Das klingt erstmal gut, führt aber zu mehr Stau auf den wichtigen
            Strecken, sodass die durchschnittliche Reisezeit für alle 900 Autos
            steigt.
          </p>

          <p style={{ fontSize: "1rem", color: "#333", fontWeight: 600 }}>
            → Das ist das Braess-Paradoxon.
          </p>
          {/* Diagramm */}
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#333" }}>
              Vergleich der Reisezeiten
            </h3>

            <img
              src="/SUMO3.png"
              alt="Diagramm zum Braess-Paradoxon"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Video2() {
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
        2. Simulation in SUMO – Zusätzliche Straße, kein Paradoxon
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
        Die zusätzliche Straße ist vorhanden, wird jedoch von weniger als der
        Hälfte der Fahrzeuge genutzt.
      </p>

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
            <source src="/SUMO2.mp4" type="video/mp4" />
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
            Jetzt gibt es eine neue Straße, die die Autos nutzen könnten. Wenn
            weniger als die Hälfte der 500 linken Autos die neue Straße nehmen
            (also weniger als 250), wird das Netz entlastet.
          </p>

          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
            Das entlastet das Straßennetz: Die Reisezeiten verbessern sich oder
            bleiben ähnlich, Staus treten kaum auf.
          </p>

          <p style={{ fontSize: "1rem", color: "#333", fontWeight: 600 }}>
            → Das ist kein Braess-Paradoxon.
          </p>
              
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#333" }}>
              Vergleich der Reisezeiten
            </h3>

            <img
              src="/SUMO2.png"
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

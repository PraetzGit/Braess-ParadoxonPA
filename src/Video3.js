export default function Video3() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 900,
        margin: "auto",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>
        3. Simulation in SUMO – Braess-Paradoxon
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Mehr als die Hälfte der Fahrzeuge nutzt die neue Straße. Dadurch erhöht
        sich die durchschnittliche Reisezeit.
      </p>

      <video
        controls
        width="100%"
        style={{
          marginTop: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <source src="/Paint1.mp4" type="video/mp4" />
        Dein Browser unterstützt dieses Video nicht.
      </video>
    </div>
  );
}  

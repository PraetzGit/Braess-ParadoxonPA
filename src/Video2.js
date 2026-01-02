export default function Video2() {
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
        Simulation 2: Mit zusätzlicher Straße, kein Paradoxon{" "}
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Hier wird das Verkehrsgeschehen mit zusätzlicher Straße gezeigt, dabei
        entsteht aber kein Paradoxon.
      </p>

      <div
        style={{
          marginTop: "2rem",
          background: "#eee",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: "1.5rem",
        }}
      >
        Video kommt hier hin
      </div>
    </div>
  );
}

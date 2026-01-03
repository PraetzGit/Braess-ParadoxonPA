export default function Home() {
    return (
      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          padding: "2rem",
          maxWidth: 800,
          margin: "0 auto",
          color: "#333",
          lineHeight: 1.6,
            minHeight: "100vh",
        backgroundImage: "url('/bremerhaven.png')", // Bildpfad anpassen
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#222",
            marginBottom: "24px",
          }}
        >
          Braess-Paradoxon – Profilarbeit
        </h1>
  
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#555",
            marginBottom: "20px",
          }}
        >
          <strong style={{ fontWeight: 700, color: "#222" }}>
            Haben Sie in Bremerhaven schon einmal den vermeintlich schnellsten Weg
            gewählt – und sind dennoch später angekommen?
          </strong>
        </p>
  
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#555",
            marginBottom: "16px",
          }}
        >
          Genau aus diesem Grund wurde diese Webseite erstellt. Im Rahmen unserer
          Profilarbeit untersuchen wir das sogenannte{" "}
          <strong style={{ fontWeight: 700, color: "#222" }}>
            Braess-Paradoxon
          </strong>
          .
        </p>
  
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#555",
            marginBottom: "16px",
          }}
        >
          Wissenschaftlich beschrieben handelt es sich dabei um ein Phänomen aus
          der Verkehrsplanung:{" "}
          <strong style={{ fontWeight: 500 }}>
            Durch den Bau einer zusätzlichen Straße kann sich die durchschnittliche
            Reisezeit aller Verkehrsteilnehmer erhöhen, obwohl die Kapazität des
            Straßennetzes vergrößert wird.
          </strong>
        </p>
  
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#555",
            marginBottom: "16px",
          }}
        >
          Doch was bedeutet das konkret?
        </p>
  
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#555",
          }}
        >
          Diese Webseite soll das Braess-Paradoxon am Beispiel des{" "}
          <strong style={{ fontWeight: 500 }}>
            Bremerhavener Innenstadtverkehrs
          </strong>{" "}
          veranschaulichen und das Thema möglichst verständlich und anschaulich für
          alle zugänglich machen.
        </p>
      </div>
    );
  }

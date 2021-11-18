import "./styles.css";

interface gifProps {
  text: string;
}

export default function GifTv(props: gifProps) {
  const { text } = props;
  return (
    <div
      className="gif-tv"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div
        className="gif"
        style={{
          width: "400px",
          height: "400px",
          marginTop: "20px"
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://cdn.glitch.com/0e4d1ff3-5897-47c5-9711-d026c01539b8%2Fbddfd6e4434f42662b009295c9bab86e.gif?v=1573157191712"
          alt="Computer man"
        ></img>
      </div>
      <div className="lyrics" style={{ marginTop: "20px" }}>
        {text}
      </div>
    </div>
  );
}

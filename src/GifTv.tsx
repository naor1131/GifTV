import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "./App";
import "./styles.css";

interface gifProps {
  line: Line;
}

const idleGifURL = "https://gifer.com/embed/757D";

export default function GifTv(props: gifProps) {
  const { line } = props;
  const [frameSrc, setFrameSrc] = useState<string>(idleGifURL);

  useEffect(() => {
    async function getData() {
      if (line.lineNo === 0) {
        setFrameSrc(idleGifURL);
      } else {
        const searchTerm = line.text.split(" ").pop();
        const result = await axios(
          `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`
        );
        const url = result?.data?.data[0]?.embed_url;
        setFrameSrc(url ?? idleGifURL);
      }
    }
    getData();
  }, [line]);

  return (
    <div className="gif">
      <iframe
        width="480px"
        height="360px"
        title={"GifTv"}
        src={frameSrc}
      ></iframe>
    </div>
  );
}

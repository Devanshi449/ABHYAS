import axios from "axios";

function Downloadb() {
  return (
    <div style={{display:'float',top:'10%'}}>
      <button
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:5000/api/generate/question-paper",
            {
              questionArr: [
                "622a093444e135074a0f5656",
                "622a1098675004330dcf12bd",
              ],
            },
            {
              responseType: "blob",
            }
          );
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        }}
      >
        download qpaper
      </button>
      <button
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:5000/api/generate/answer-key",
            {
              questionArr: [
                "622a093444e135074a0f5656",
                "622a1098675004330dcf12bd",
              ],
            },
            {
              responseType: "blob",
            }
          );
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        }}
      >
        download answer key
      </button>
    </div>
  );
}

export default Downloadb;
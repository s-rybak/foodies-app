import { useEffect } from "react";

const useAutoResizeTextarea = (textareaClass) => {
  useEffect(() => {
    const textarea = document.querySelector(`.${textareaClass}`);
    const adjustHeight = (e) => {
      textarea.style.height = "36px";
      textarea.style.height = `${e.target.scrollHeight}px`;
    };

    textarea.addEventListener("input", adjustHeight);

    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, [textareaClass]);
};

export default useAutoResizeTextarea;

import {RefObject, useState} from "react";

export const useInput = () => {
  const [input, setInput] = useState<string>("");

  const updateInput = (value: string, textareaRef?: RefObject<HTMLTextAreaElement>) => {
    setInput(value);
    if (value.length > 0 && textareaRef)
      adjustHeight(textareaRef);
  };


const adjustHeight = (textareaRef: RefObject<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    // Anpassen der Höhe an den Inhalt
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return { input, updateInput };
}
import {useState} from "react";


export function useRetry() {
  const [retryOpen, setRetryOpen] = useState<boolean>(false);

  const updateRetryOpen = () => {
    setRetryOpen(prev => !prev);
  }

  return { retryOpen, updateRetryOpen };
}


export const useRetryInput = () => {
  const [retryInput, setRetryInput] = useState<string>("");

  const updateRetryInput = (value: string) => setRetryInput(value);

  return { retryInput, updateRetryInput };
}
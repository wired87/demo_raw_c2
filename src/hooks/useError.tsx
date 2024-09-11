import {useState} from "react";

export const useError = () => {
  const [error, setError] = useState<string>("");

  const updateError = (value: string) => setError(value);

  return { error, updateError };
}
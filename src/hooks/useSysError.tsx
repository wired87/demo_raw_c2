import {useState} from "react";

export const useSysError = () => {
  const [sysError, setError] = useState<string>("");

  const updateSysError = (value: string) => setError(value);

  return { sysError, updateSysError };
}
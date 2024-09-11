import {useState} from "react";

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoading = (value:boolean) => setLoading(value);

  return {loading, setLoading, updateLoading};
}

export const useSysLoading = () => {
  const [sysLoading, setSysLoading] = useState<boolean>(false);

  const updateSysLoading = (b:boolean) => setSysLoading(b);

  return {sysLoading, updateSysLoading};
}
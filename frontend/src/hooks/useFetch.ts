import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export default function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // prevent setting state on unmounted component

    async function fetchData() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        if (isMounted) setData(json);
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Unknown error');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false; // cleanup to prevent memory leaks
    };
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
}

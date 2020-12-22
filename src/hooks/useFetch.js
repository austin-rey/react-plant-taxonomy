import { useState, useEffect } from 'react';

import trefle from '../api/trefle'

export const useFetch = (url,ref,initialValue) => {

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
          try {
              const req = await trefle.get(url)
              setData(req.data.data);
          } catch (error) {
              setError(error);
          } finally {
            setLoading(false);
          }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url,ref])
  return {data, error, loading};
}


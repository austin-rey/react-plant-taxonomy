import { useState, useEffect,useRef } from 'react';

import trefle from '../api/trefle'

export const useFetchPlant = (url,initialValue) => {
  const cache = useRef({})
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
          try {
            if (cache.current[url]) {
              setData(cache.current[url]);
            } else {
              const req = await trefle.get(url)
              cache.current[url] = req.data.data;
              setData(req.data.data);
            }
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
      })();
  }, [url])

  return {data, error, loading};
}


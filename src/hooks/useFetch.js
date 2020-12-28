import { useState, useEffect,useRef } from 'react';

import trefle from '../api/trefle'

export const useFetch = (url,initialValue) => {
  const cache = useRef({})
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setPageCount] = useState();

  useEffect(() => {
      (async () => {
          try {
            if (cache.current[url]) {
              console.log('has cache')
              const sameData = cache.current[url];
              setData(sameData);
            } else {
              console.log('no cache')
              const req = await trefle.get(url)
              setPageCount((req.data.links.last).replace('/api/v1/species?page=',''));
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

  return {data, error, loading,totalPages};
}


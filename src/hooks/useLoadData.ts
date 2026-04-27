import { useState, useEffect } from "react";

/**
 * Simulates an async data fetch with a brief loading delay.
 * When real async data (Supabase) is added, replace this with actual fetch logic.
 */
export function useLoadData<T>(fetcher: () => T, delayMs = 600): { data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);
    const timer = setTimeout(() => {
      setData(fetcher());
      setLoading(false);
    }, delayMs);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayMs]);

  return { data, loading };
}

/**
 * Version with dependency tracking — re-fetches when deps change.
 */
export function useLoadDataWithDeps<T>(
  fetcher: () => T,
  deps: unknown[],
  delayMs = 400
): { data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);
    const timer = setTimeout(() => {
      setData(fetcher());
      setLoading(false);
    }, delayMs);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delayMs]);

  return { data, loading };
}

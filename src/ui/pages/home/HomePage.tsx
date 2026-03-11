import { useCallback, useState } from "react";
import { getHealth } from "@/api/health";
import { Button } from "@/ui/shared/Button";
import { PageCard } from "@/ui/shared/PageCard";

export function HomePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const onCallApi = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getHealth();
      setData(result);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error";
      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PageCard
      title="Home"
      description={
        <>
          Demo gọi BE bằng Axios: <code>GET /health</code>
        </>
      }
    >
      <Button onClick={onCallApi} disabled={loading}>
        {loading ? "Đang gọi..." : "Gọi API"}
      </Button>
      {error ? (
        <pre className="mt-4 overflow-auto rounded-xl border border-danger/35 bg-danger/10 p-3 text-sm">
          Error: {error}
        </pre>
      ) : (
        <pre className="mt-4 overflow-auto rounded-xl border border-border bg-black/25 p-3 text-sm">
          {data ? JSON.stringify(data, null, 2) : "No data"}
        </pre>
      )}
    </PageCard>
  );
}

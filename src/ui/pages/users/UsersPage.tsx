import { useEffect, useState } from "react";
import { getUsers, type User } from "@/api/users";
import { PageCard } from "@/ui/shared/PageCard";
import { UsersGrid } from "@/ui/pages/users/components/UsersGrid";

export function UsersPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUsers();
        if (mounted) setUsers(data);
      } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        if (mounted) setError(message);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <PageCard
      title="Users"
      description={
        <>
          Demo gọi BE: <code>GET /users</code>
        </>
      }
    >
      {loading ? (
        <p className="text-sm text-muted">Loading...</p>
      ) : error ? (
        <pre className="overflow-auto rounded-xl border border-danger/35 bg-danger/10 p-3 text-sm">
          Error: {error}
        </pre>
      ) : users.length === 0 ? (
        <p className="text-sm text-muted">No users</p>
      ) : (
        <UsersGrid users={users} />
      )}
    </PageCard>
  );
}

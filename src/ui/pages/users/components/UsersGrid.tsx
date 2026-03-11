import { useMemo } from "react";
import type { ColDef, GetRowIdParams } from "ag-grid-community";
import type { User } from "@/api/users";
import { DataTable } from "@/ui/shared/DataTable";

export function UsersGrid({ users }: { users: User[] }) {
  const columnDefs = useMemo<ColDef<User>[]>(
    () => [
      { headerName: "ID", field: "id", width: 140 },
      { headerName: "Name", field: "name", flex: 1, minWidth: 240 }
    ],
    []
  );

  return (
    <DataTable<User>
      rowData={users}
      columnDefs={columnDefs}
      getRowId={(params: GetRowIdParams<User>) => String(params.data?.id ?? "")}
    />
  );
}

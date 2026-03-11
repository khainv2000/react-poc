import type { ReactNode } from "react";
import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import { cx } from "@/ui/shared/cx";

export type DataTableProps<TData> = {
  title?: ReactNode;
  rowData: TData[];
  columnDefs: ColDef<TData>[];
  height?: number | string;
  wrapperClassName?: string;
  themeClassName?: string;
} & Omit<AgGridReactProps<TData>, "rowData" | "columnDefs">;

export function DataTable<TData>({
  title,
  rowData,
  columnDefs,
  height = 420,
  wrapperClassName,
  themeClassName = "ag-theme-quartz",
  defaultColDef,
  ...gridProps
}: DataTableProps<TData>) {
  const mergedDefaultColDef: ColDef<TData> = {
    sortable: true,
    filter: true,
    resizable: true,
    ...defaultColDef
  };

  return (
    <div className={cx("space-y-2", wrapperClassName)}>
      {title ? <div className="text-sm font-medium text-fg">{title}</div> : null}
      <div
        className={cx("overflow-hidden rounded-2xl border border-border bg-card/40", themeClassName)}
        style={{ height }}
      >
        <AgGridReact<TData>
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={mergedDefaultColDef}
          {...gridProps}
        />
      </div>
    </div>
  );
}

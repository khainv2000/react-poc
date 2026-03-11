import type { ReactNode } from "react";

export function PageCard({
    title,
    description,
    children,
}: {
    title: string;
    description?: ReactNode;
    children?: ReactNode;
}) {
    const hasChildren =
        children !== undefined && children !== null && children !== false;

    return (
        <section className="rounded-2xl border border-border bg-card/70 p-5">
            <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
            {description ? (
                <p className="mt-1 text-sm text-muted">{description}</p>
            ) : null}
            {hasChildren ? <div className="mt-4">{children}</div> : null}
        </section>
    );
}

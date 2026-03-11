import { PageCard } from "@/ui/shared/PageCard";

export function NotFoundPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
            <div className="text-6xl font-bold">404</div>
            <p className="text-base text-muted">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}

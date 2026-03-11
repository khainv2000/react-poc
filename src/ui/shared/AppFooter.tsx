import { Container } from "@/ui/shared/Container";

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <Container className="flex items-center gap-3 py-4 text-sm text-muted">
        <span>© {new Date().getFullYear()} react-poc</span>
        <span className="opacity-60">•</span>
        <span>React Router + Axios</span>
      </Container>
    </footer>
  );
}

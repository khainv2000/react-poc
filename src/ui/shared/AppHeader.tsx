import { NavLink } from "react-router-dom";
import { Container } from "@/ui/shared/Container";
import { cx } from "@/ui/shared/cx";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "text-sm no-underline transition",
          isActive ? "font-semibold text-fg" : "text-muted hover:text-fg"
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function AppHeader() {
  return (
    <header className="border-b border-border bg-card/60 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="font-bold tracking-tight">react-poc</div>
        <nav className="flex items-center gap-4">
          <NavItem to="/" label="Home" />
          <NavItem to="/users" label="Users" />
          <NavItem to="/about" label="About" />
        </nav>
      </Container>
    </header>
  );
}

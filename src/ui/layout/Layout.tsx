import { Outlet } from "react-router-dom";
// import { AppFooter } from "@/ui/shared/AppFooter";
import { AppHeader } from "@/ui/shared/AppHeader";
import { Container } from "@/ui/shared/Container";

export function Layout() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="py-6">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

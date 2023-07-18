import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: RootLayoutProps) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}

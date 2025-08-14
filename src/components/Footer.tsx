import Container from "./Container";
import {LogoGlyph} from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <Container className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <LogoGlyph className="w-4 h-4"/>
          <span>creadev.</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </Container>
    </footer>
  );
}



import Section from "@/components/Section";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import {ArrowRight, Target} from "@/components/icons";

export const metadata = {
  title: "Əlaqə | creadev.",
  description:
    "Bizimlə əlaqə: Instagram @creadev.team, mobil nömrələrimiz və creadev.ai barədə məlumat.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <Section
        subtitle={<Badge icon={<Target/>}>əlaqə</Badge>}
        title={
          <>
            <span className="text-white">bizimlə</span>{" "}
            <span
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">
              əlaqə
            </span>
          </>
        }
        center
      >
        <Container>
          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Instagram */}
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-5">
              <div className="text-white/85 text-sm mb-1">Instagram</div>
              <div className="text-lg font-medium mb-4">@creadev.team</div>
              <a
                href="https://instagram.com/creadev.team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5"
              >
                Profilə keçid <ArrowRight/>
              </a>
            </div>

            {/* Phone numbers */}
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-5">
              <div className="text-white/85 text-sm mb-2">Mobil nömrələrimiz</div>
              <ul className="space-y-2 text-white/90">
                <li>
                  <a className="hover:underline" href="tel:+994559015013">
                    +994 55 901 50 13
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="tel:+994507357709">
                    +994 50 735 77 09
                  </a>
                </li>
              </ul>
            </div>

            {/* creadev.ai info */}
            <div
              className="md:col-span-2 rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-white/90 text-base font-medium">creadev.ai</div>
                <p className="text-white/70 text-sm max-w-2xl">
                  Süni intellekt köməkçimiz layihə müraciətlərinizi qəbul edir, lazımi sualları verir<br/>
                  və yekun məlumatı birbaşa komandamıza ötürür.
                </p>
              </div>
              <Button variant="primary" size="md">
                Süni intellektə keçid
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}



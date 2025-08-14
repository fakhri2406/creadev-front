import Section from "@/components/Section";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import {Target} from "@/components/icons";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata = {
  title: "Xidmətlər | creadev.",
  description:
    "Korporativ saytlar, funksional platformalar, mobil tətbiqlər. Keyfiyyət və təhlükəsizlik zəmanəti, əlavə IT konsultasiya, UX/UI dizayn, SMM və mobilografiya.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* Intro */}
      <Section
        subtitle={<Badge icon={<Target/>}>xidmətlərimiz</Badge>}
        title={
          <>
              <span
                className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">
                  biz nələri </span>
            <span className="text-white">təklif edirik</span>{" "}

          </>
        }
        center
      >
        <Container>
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
            <ServiceCard
              title="Korporativ saytlar"
              pricePrimary="650 AZN-dən"
              note="Qiymət tələblərinizdən asılı olaraq dəyişə bilər"
              bullets={[
                "Backend + frontend",
                "Admin panel və RBAC",
                "Sürətli və etibarlı hosting",
              ]}
            />
            <ServiceCard
              title="Funksional platformalar"
              pricePrimary="razılaşma yolu ilə"
              note="Layihənin həcmi və texniki şərtlərə görə"
              bullets={[
                "Korporativ saytlardakı xüsusiyyətlər",
                "İstənilən funksional və inteqrasiyalar",
                "Ölçülənən arxitektura",
              ]}
            />
            <ServiceCard
              title="Mobil tətbiqlər"
              pricePrimary="razılaşma yolu ilə"
              note="iOS / Android, native və ya cross-platform"
              bullets={[
                "Müasir və performans yönümlü UI",
                "Backend API inteqrasiyası",
                "Store yayımlama dəstəyi",
              ]}
            />
          </div>
          {/* CTA row */}
          <div
            className="mx-auto max-w-5xl mt-5 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 flex items-center justify-between">
            <div className="text-white/80 text-sm">Layihənizi müzakirə etmək üçün bizimlə əlaqə saxlayın</div>
            <div className="flex items-center gap-2">
              <a href="/contact" className="inline-flex">
                <Button variant="secondary" size="md">Əlaqə</Button>
              </a>
              <Button variant="primary" size="md">creadev.ai</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional */}
      <Section
        compact
        subtitle={<Badge icon={<Target/>}>əlavə</Badge>}
        title={
          <>
            <span className="text-white">zəmanətlər</span>{" "}
            <span
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">
              və əlavə xidmətlər
            </span>
          </>
        }
        center
      >
        <Container>
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-5">
              <h3 className="text-white/90 text-lg font-medium mb-2">Zəmanətlər</h3>
              <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                <li>Performans və SEO standartlarına uyğunluq</li>
                <li>Təhlükəsizlik və məlumatların qorunması prinsipləri</li>
                <li>Kod keyfiyyəti, baxımlılıq və sənədləşmə</li>
              </ul>
            </div>
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-5">
              <h3 className="text-white/90 text-lg font-medium mb-2">Əlavə xidmətlər</h3>
              <div className="flex flex-wrap gap-2">
                {([
                  "IT konsultasiya",
                  "UX/UI dizayn",
                  "SMM",
                  "Mobiloqrafiya",
                ] as const).map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs text-white/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

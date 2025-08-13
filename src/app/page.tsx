"use client";

import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import {Analysis, Backend, Frontend, Idea, LogoGlyph, Target} from "@/components/icons";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import ProcessCard from "@/components/home/ProcessCard";
import TeamCard from "@/components/home/TeamCard";
import Accordion from "@/components/home/Accordion";
import ProcessCTA from "@/components/home/ProcessCTA";

export default function Home() {
    return (
        <main className="bg-black text-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-black">
                <Container className="pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-start">
                        <div className="max-w-xl space-y-6">
                            <Badge icon={<Target className="w-3.5 h-3.5"/>}>biz kimik?</Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                                <span
                                    className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">creadev</span>{' '}
                                <span className="text-white">team</span>
                            </h1>
                            <p className="text-sm sm:text-base text-white/70 max-w-prose">
                                Startuplar, agentliklər və şirkətlər üçün rəqəmsal həllər yaradan proqram təminatı
                                şirkəti.
                            </p>
                            <div className="flex items-center gap-3">
                                <Button variant="secondary" size="lg">Əlaqə saxlamaq</Button>
                                <Button variant="primary" size="lg">Süni intellekt ilə sifariş</Button>
                            </div>
                        </div>
                        <div className="relative hidden lg:block h-[260px] xl:h-[300px]">
                            <div
                                className="absolute top-0 right-8 w-64 h-40 rounded-2xl border border-white/10 bg-white/8 backdrop-blur-md px-6 grid place-items-center text-white/80 rotate-[3deg] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                                <div className="text-sm text-center">Müasir və performanslı sistemlər</div>
                            </div>
                            <div
                                className="absolute bottom-0 -left-3 w-56 h-40 rounded-2xl border border-white/10 bg-white/8 backdrop-blur-md px-6 grid place-items-center text-white/80 rotate-[-6deg] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                                <div className="text-sm text-center">Təhlükəsiz və miqyaslana bilən arxitektura</div>
                            </div>
                        </div>
                    </div>
                    {/* Hero gallery */}
                    <div className="pt-10 flex justify-center">
                        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-5">
                                <PlaceholderImage aspect="portrait" className="rounded-xl w-full"/>
                                <PlaceholderImage aspect="cinema" className="rounded-xl w-full"/>
                            </div>
                            <div className="flex flex-col gap-5">
                                <PlaceholderImage aspect="cinema" className="rounded-xl w-full"/>
                                <PlaceholderImage aspect="portrait" className="rounded-xl w-full"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* İş prosesi */}
            <Section subtitle={<Badge icon={<Target/>}>necə işləyirik?</Badge>} title={<>
                <span className="text-white">iş</span>{' '}
                <span
                    className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">prosesi</span>
            </>} center>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ProcessCard icon={<Idea className="w-5 h-5"/>} title="İdeyanız"
                                 desc="İlk olaraq, komandamıza (və ya süni intellektə) layihəniz üçün uyğun olan istənilən formada detallı təqdimatı təhvil verirsiniz."/>
                    <ProcessCard icon={<Analysis className="w-5 h-5"/>} title="Analiz"
                                 desc="Komandamız verdiyiniz təqdimatı dərin şəkildə analiz edir. Təqdimat əsasında platforma üçün zəruri olan məlumatlar qeyd olunur."/>
                    <ProcessCard icon={<Backend className="w-5 h-5"/>} title="Backend"
                                 desc="Aparılan qeydlərə əsasən bütün təhlükəsizlik şərtləri nəzərə alınmaqla, keyfiyyətli və sürətli backend kodu yazılır və host edilir."/>
                    <ProcessCard icon={<Frontend className="w-5 h-5"/>} title="Frontend"
                                 desc="Backend tamamlanandan sonra, developerlərimiz müasir dizayn trendlərinə uyğun olaraq, cəlbedici frontend yaradırlar."/>
                </div>

                <div className="mt-6">
                    <ProcessCTA/>
                </div>
            </Section>

            {/* creadev.ai */}
            <Section subtitle={<Badge icon={<Target/>}>süni intellektimiz</Badge>} title={<>
                <span
                    className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">creadev.</span>
                <span className="text-white">ai</span>
            </>}>
                <div className="flex items-center justify-between mb-6">
                    <p className="text-white/70 text-sm max-w-prose">Digər şirkətlərdən fərqli olaraq, müraciətlərinizdə
                        vaxt itirməyəcəksiniz!</p>
                    <Button variant="primary" size="md">Süni intellektə keçid</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    <div className="flex flex-col gap-4">
                        <PlaceholderImage aspect="cinema" radius="xl"/>
                        <PlaceholderImage aspect="cinema" radius="xl"/>
                    </div>
                    <div className="space-y-4">
                        <div
                            className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md p-4 text-white/80">
                            <div className="text-sm font-medium">Əlavə funksionallıq</div>
                            <div className="text-xs text-white/60">creadev.ai şirkətimiz haqqında bütün suallarınızı
                                cavablandıra bilər
                            </div>
                        </div>
                        <PlaceholderImage aspect="landscape" radius="xl"/>
                    </div>
                </div>
            </Section>

            {/* Team */}
            <Section subtitle={<Badge icon={<Target/>}>əməkdaşlarımız</Badge>}
                     title={<>
                         <span className="text-white">komandamızı</span>{' '}
                         <span
                             className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">qarşılayın</span>
                     </>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TeamCard name="Fəxri Gözəlov" role="Backend Developer və DevOps"
                              about="Java, Spring Boot və konteynerləşdirmə üzrə ixtisaslaşır; miqyaslana bilən sistemlər qurur."/>
                    <TeamCard name="Asif Rzayev" role="Fullstack Developer"
                              about="UI/UX və performans yönümlü frontend, server yönümlü SSR/SSG inteqrasiyaları ilə işləyir."/>
                    <TeamCard name="Telman Hacızadə" role="UX/UI Design və SMM"
                              about="Müştəri təcrübəsini artıran dizayn sistemləri hazırlayır, brend kommunikasiya xəttini qurur."/>
                    <TeamCard name="Şahlar Cəfərov" role="Product Content Manager"
                              about="Məhsul məzmun strategiyasına cavabdehdir, istifadəçi yönümlü materialları kurasiya edir."/>
                </div>
            </Section>

            {/* FAQ */}
            <Section subtitle={<Badge icon={<Target/>}>faq</Badge>} title={<>
                <span
                    className="bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(200,200,200,0.55))] bg-clip-text text-transparent">suallar və</span>{' '}
                <span className="text-white">cavablar</span>
            </>} center>
                <div className="mx-auto max-w-2xl">
                    <Accordion
                        items={[
                            {
                                q: "Hansı xidmətləri təklif edirsiniz?",
                                a: "Komandamız IT məsələləri üçün konsultasiya, veb proqramlaşdırma, mobil tətbiq proqramlaşdırması və bunların dizaynı ilə məşğuldur.",
                            },
                            {
                                q: "Bir layihənin təxmini müddəti nə qədərdir?",
                                a: "Həcmə görə dəyişir; tipik layihələr 3-8 həftə arasında olur."
                            },
                            {
                                q: "Layihə hazırlandıqdan sonra rədaktə edirsiniz?",
                                a: "Bəli, SLA və ehtiyacdan asılı olaraq davamlı dəstək göstərilir."
                            },
                            {
                                q: "Ödəniş modeli necədir?",
                                a: "Sabit qiymət və ya sprint əsaslı model təklif edirik."
                            },
                        ]}
                    />
                </div>
            </Section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-10 text-sm text-white/60">
                <Container className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2"><LogoGlyph
                        className="w-4 h-4"/><span>creadev.</span></div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </Container>
            </footer>
        </main>
    );
}

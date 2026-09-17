import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock3, Heart, Instagram, MapPin, Phone, Waves } from "lucide-react";
import { useRef } from "react";

import auroraImage from "@/assets/aurora.jpeg";
import ursinhosImage from "@/assets/ursinhos-carinhosos.png";
import { Bubbles, Clouds, Rainbow } from "@/components/party-icons";
import { RsvpForm } from "@/components/rsvp-form";
import { Button } from "@/components/ui/button";

export const eventData = {
  name: "Aurora",
  age: 5,
  date: "Data a definir",
  time: "Horário a definir",
  location: "Condomínio Village do Oeste",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurora faz 5 anos | Convite" },
      { name: "description", content: "Convite para a festa de 5 anos da Aurora, com ursinhos e muita diversão na piscina." },
      { property: "og:title", content: "Aurora faz 5 anos!" },
      { property: "og:description", content: "Você está convidado para uma aventura cheia de carinho e diversão na piscina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const rsvpRef = useRef<HTMLElement>(null);

  function openRsvp() {
    rsvpRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="overflow-hidden bg-background">
      <section className="hero-scene relative flex min-h-[94svh] flex-col overflow-hidden px-4 pb-12 pt-7 sm:px-7 sm:pt-10">
        <Clouds />
        <Bubbles count={14} />
        <Rainbow className="absolute -right-12 top-24 opacity-85 sm:right-8 sm:top-28" />
        <div className="star star-one" aria-hidden="true">★</div>
        <div className="star star-two" aria-hidden="true">★</div>
        <div className="heart-float heart-one" aria-hidden="true">♥</div>
        <div className="heart-float heart-two" aria-hidden="true">♥</div>

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-extrabold text-primary">
            <span className="flex size-9 items-center justify-center rounded-full bg-card shadow-soft"><Heart className="size-5 fill-current" /></span>
            Uma aventura carinhosa
          </div>
          <span className="rounded-full border border-card/60 bg-card/70 px-3 py-1.5 text-xs font-extrabold text-foreground/60 backdrop-blur-sm">Festa na piscina</span>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-4 pt-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pt-10">
          <div className="animate-rise text-center lg:text-left">
            <p className="mb-1 font-display text-xl text-pink sm:text-2xl">Você está convidado para celebrar</p>
            <h1 className="font-display text-[clamp(4.5rem,20vw,9rem)] leading-[0.75] text-primary drop-shadow-title">
              {eventData.name}
            </h1>
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <span className="font-display text-7xl leading-none text-pink sm:text-8xl">{eventData.age}</span>
              <span className="text-left font-display text-3xl leading-[0.85] text-leaf sm:text-4xl">anos<br /><span className="text-xl text-primary sm:text-2xl">de pura alegria!</span></span>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed text-foreground/75 sm:text-lg lg:mx-0">
              Prepare o sorriso, coloque a roupa de banho e venha viver uma aventura cheia de carinho e diversão!
            </p>
            <Button onClick={openRsvp} variant="primary" size="lg" className="mt-7 w-full sm:w-auto">
              <Heart className="size-5 fill-current" /> Confirmar presença
            </Button>
          </div>

          <div className="relative mx-auto mt-2 w-full max-w-2xl animate-rise-delayed pb-6 sm:pb-2">
            <div className="aurora-frame relative z-20 mx-auto aspect-square w-[46%] max-w-[270px] overflow-hidden rounded-full border-[7px] border-card shadow-party sm:border-[10px]">
              <img src={auroraImage} alt="Aurora sorrindo" className="h-full w-full object-cover object-[50%_24%]" />
            </div>
            <div className="pool-water relative -mt-9 min-h-48 overflow-hidden rounded-[48%_52%_18%_18%/28%_30%_16%_16%] border-[7px] border-card/70 shadow-water sm:-mt-14 sm:min-h-64">
              <div className="water-shine" />
              <img src={ursinhosImage} alt="Ursinhos coloridos brincando na piscina" className="bear-party absolute inset-x-0 bottom-0 z-10 mx-auto w-[94%] max-w-2xl object-contain" />
            </div>
          </div>
        </div>

        <button onClick={openRsvp} className="relative z-10 mx-auto mt-2 flex flex-col items-center gap-1 text-xs font-extrabold text-primary/70" aria-label="Ver detalhes da festa">
          <span>Descubra os detalhes</span>
          <span className="animate-bounce-soft text-xl">⌄</span>
        </button>
      </section>

      <section className="relative bg-card px-4 py-16 sm:px-7 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="font-display text-2xl text-pink">Guarde essa alegria</span>
            <h2 className="mt-1 font-display text-4xl text-primary sm:text-5xl">Nosso dia especial</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={<CalendarDays />} label="Quando" value={eventData.date} tone="pink" />
            <InfoCard icon={<Clock3 />} label="Horário" value={eventData.time} tone="sun" />
            <InfoCard icon={<MapPin />} label="Onde" value={eventData.location} tone="leaf" />
            <InfoCard icon={<Waves />} label="Prepare-se" value="Roupa de banho e muita alegria!" tone="pool" />
          </div>
        </div>
      </section>

      <section ref={rsvpRef} id="confirmar" className="rsvp-section relative scroll-mt-0 px-4 py-16 sm:px-7 sm:py-24">
        <Bubbles count={10} />
        <div className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border-4 border-card bg-card/95 p-6 shadow-party backdrop-blur-sm sm:p-10 lg:p-14">
          <RsvpForm />
        </div>
      </section>

      <footer className="bg-primary px-4 py-8 text-center text-primary-foreground">
        <p className="font-display text-2xl">Aurora • 5 anos</p>
        <p className="mt-1 text-sm font-bold opacity-80">Feito com carinho para um dia inesquecível.</p>
        <div className="mx-auto mt-4 flex max-w-md flex-col items-center justify-center gap-2 text-xs font-bold opacity-90 sm:flex-row sm:gap-4">
          <span>feito por:</span>
          <a href="https://instagram.com/jlucas.lourenco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 transition-colors hover:bg-primary-foreground/25">
            <Instagram className="size-3.5" /> @jlucas.lourenco
          </a>
          <a href="https://wa.me/5584988616456" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 transition-colors hover:bg-primary-foreground/25">
            <Phone className="size-3.5" /> 84 98861-6456
          </a>
        </div>
      </footer>
    </main>
  );
}

function InfoCard({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: string }) {
  return (
    <article className="party-card flex min-h-44 flex-col items-center justify-center px-5 py-7 text-center">
      <div className={`icon-disc icon-${tone}`}>{icon}</div>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-extrabold leading-snug text-foreground">{value}</p>
    </article>
  );
}
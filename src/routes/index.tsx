import { createFileRoute } from "@tanstack/react-router";

import { Invitation, type EventData } from "@/components/invitation";
import type { FormField } from "@/components/rsvp-form";

export const eventData: EventData = {
  name: "Aurora",
  age: 5,
  date: "10/10/2026",
  time: "15:00h",
  location: "Condomínio Village do Oeste",
};

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScGM5BRy7_B39JdNA7-q2ImMqUg81DHfD7VTfzikrkii3vH0A/formResponse";

const formFields: FormField[] = [
  { id: "guardian", label: "Nome do responsável", entry: "entry.366340186", placeholder: "Quem está confirmando?" },
  { id: "companions", label: "Nome das pessoas estarão com você?", entry: "entry.974905963", placeholder: "Ex.: Aurora e Lays" },
];

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
  component: InvitationPage,
});

function InvitationPage() {
  return <Invitation eventData={eventData} formUrl={formUrl} formFields={formFields} />;
}

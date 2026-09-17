import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Bubbles } from "@/components/party-icons";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfJQlfIG_OTedaU9wxzKl3guMbfrfmftbaHxr4Bz1WrxxIrXQ/formResponse";

type FormValues = {
  guardian: string;
  children: string;
  companions: string;
};

const initialValues: FormValues = { guardian: "", children: "", companions: "" };

export function RsvpForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value.slice(0, 160) }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<FormValues> = {};
    if (!values.guardian.trim()) nextErrors.guardian = "Conte para a gente quem está confirmando.";
    if (!values.children.trim()) nextErrors.children = "Informe o nome da criança.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const body = new URLSearchParams({
      "entry.1192086938": values.guardian.trim(),
      "entry.262603686": values.children.trim(),
      "entry.702210003": values.companions.trim() || "Nenhum",
    });

    try {
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body });
      setStatus("success");
    } catch {
      const hiddenFrame = document.createElement("iframe");
      hiddenFrame.name = `rsvp-${Date.now()}`;
      hiddenFrame.hidden = true;
      const hiddenForm = document.createElement("form");
      hiddenForm.action = FORM_URL;
      hiddenForm.method = "POST";
      hiddenForm.target = hiddenFrame.name;
      Object.entries(Object.fromEntries(body)).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      });
      document.body.append(hiddenFrame, hiddenForm);
      hiddenForm.submit();
      window.setTimeout(() => { hiddenForm.remove(); hiddenFrame.remove(); }, 2000);
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="success-scene relative flex min-h-[460px] flex-col items-center justify-center overflow-hidden px-6 text-center" role="status">
        <Bubbles count={16} />
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <i key={index} style={{ "--confetti-index": index } as React.CSSProperties} />)}
        </div>
        <div className="relative z-10 animate-celebrate">
          <div className="mx-auto mb-5 flex size-24 items-center justify-center rounded-full bg-sun text-5xl shadow-party">🎉</div>
          <CheckCircle2 className="mx-auto mb-3 size-8 text-leaf" aria-hidden="true" />
          <h2 className="font-display text-4xl text-primary sm:text-5xl">Presença confirmada!</h2>
          <p className="mx-auto mt-4 max-w-md text-lg font-semibold text-foreground/75">
            Estamos muito felizes em ter você nessa aventura!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-8 text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-extrabold text-secondary-foreground">
          <Sparkles className="size-4" /> Vai ser mágico!
        </span>
        <h2 className="font-display text-4xl text-primary sm:text-5xl">Confirme sua presença!</h2>
        <p className="mx-auto mt-3 max-w-lg text-base font-semibold text-foreground/65">
          É rapidinho! Preencha os dados para reservar sua vaga nessa aventura.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-5" noValidate>
        <Field label="Nome do responsável" id="guardian" value={values.guardian} error={errors.guardian} placeholder="Quem está confirmando?" onChange={(value) => updateField("guardian", value)} />
        <Field label="Nome da(s) criança(s)" id="children" value={values.children} error={errors.children} placeholder="Nome das crianças" onChange={(value) => updateField("children", value)} />
        <Field label="Acompanhante(s)" id="companions" value={values.companions} error={errors.companions} placeholder="Nomes ou quantidade (opcional)" onChange={(value) => updateField("companions", value)} />
        <Button type="submit" variant="primary" size="lg" className="mt-3 w-full" disabled={status === "sending"}>
          {status === "sending" ? "Enviando carinho..." : <><Send className="size-5" /> Enviar confirmação</>}
        </Button>
      </form>
    </div>
  );
}

function Field({ label, id, value, error, placeholder, onChange }: {
  label: string;
  id: string;
  value: string;
  error: string | undefined;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-extrabold text-foreground/80">{label}</label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        maxLength={160}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-14 w-full rounded-2xl border-2 border-border bg-card px-5 text-base font-semibold text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
      {error && <p id={`${id}-error`} className="mt-2 text-sm font-bold text-destructive">{error}</p>}
    </div>
  );
}
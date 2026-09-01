import { ArrowDownToLine } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

export function ProductPdfDownload({
  label,
  pdf,
  downloadName,
}: {
  label: string;
  pdf: string;
  downloadName: string;
}) {
  return (
    <section className="border-t border-border bg-secondary/45 px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
      <Reveal distance={32}>
        <div className="mx-auto flex max-w-7xl justify-center">
          <a
            href={pdf}
            download={downloadName}
            className="animate-download-gold-glow inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 text-[0.68rem] tracking-[0.16em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5 rtl:text-sm rtl:tracking-normal rtl:normal-case"
          >
            {label}
            <ArrowDownToLine className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

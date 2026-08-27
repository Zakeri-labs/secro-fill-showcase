"use client";

import { useEffect } from "react";

import { useI18n } from "@/lib/i18n";

export function LocalizedMetadata({
  titleKey,
  descriptionKey,
}: {
  titleKey: string;
  descriptionKey: string;
}) {
  const { t } = useI18n();

  useEffect(() => {
    const localizedTitle = `${t(titleKey)} | SECRO-FILL`;
    const localizedDescription = t(descriptionKey);

    const applyMetadata = () => {
      if (document.title !== localizedTitle) document.title = localizedTitle;

      let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!description) {
        description = document.createElement("meta");
        description.name = "description";
        document.head.appendChild(description);
      }
      if (description.content !== localizedDescription) {
        description.content = localizedDescription;
      }
    };

    applyMetadata();
    const observer = new MutationObserver(applyMetadata);
    observer.observe(document.head, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [descriptionKey, t, titleKey]);

  return null;
}

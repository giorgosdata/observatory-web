export function pickLocale<T extends Record<string, any>>(
  value: any,
  locale: string
): string {
  if (!value) return "";
  // αν είναι ήδη string
  if (typeof value === "string") return value;

  // αν είναι object {el,en}
  const v = value?.[locale] ?? value?.el ?? value?.en ?? "";
  return typeof v === "string" ? v : "";
}

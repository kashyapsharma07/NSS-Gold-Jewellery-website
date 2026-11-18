import { siteConfig } from "@/config/site";

export function buildWhatsAppLink(
    message: string,
    number: string = siteConfig.whatsappNumber,
): string {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Alias for backwards compatibility if lowercase is used elsewhere
export const buildWhatsappLink = buildWhatsAppLink;
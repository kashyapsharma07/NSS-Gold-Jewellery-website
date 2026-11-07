import { siteConfig } from "@/config/site"

export function buildWhatsappLink(
    message: string,
    number: string = siteConfig.whatsappNumber,

): string {
    return 'https://wa.me/${number}?text=${encodeURIComponent(message)}';
}
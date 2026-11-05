export type SocialNetwork = "instagram" | "dribbble" | "linkedin";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  href: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  phoneHref: `tel:${string}`;
  socials: SocialLink[];
};

export const contact = {
  email: "hello@rheamonroe.com",
  phone: "(503) 555-0198",
  phoneHref: "tel:+15035550198",
  socials: [
    { network: "instagram", label: "Instagram", href: "https://instagram.com" },
    { network: "dribbble", label: "Dribbble", href: "https://dribbble.com" },
    { network: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  ],
} satisfies ContactInfo;

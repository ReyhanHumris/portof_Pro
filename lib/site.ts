export const site = {
  name: "Raihaan Humris",
  shortName: "RH",
  brand: "ReyDev",
  /** Sama dengan favicon di app/favicon.ico */
  brandIcon: "/favicon.ico",
  tagline: "Fullstack Web Developer",
  location: "Ende, NTT",
  email: "raihaanhumris@gmail.com",
  whatsapp: "628233934478",
  /** Nama tampilan di profil GitHub */
  githubName: "Muhammad Raihaan Humris",
  /**
   * @handle GitHub (tanpa spasi). Sesuaikan di .env: GITHUB_USERNAME=handle_anda
   */
  githubUsername: "ReyhanHumris",
} as const;

export function githubProfileUrl(username: string = site.githubUsername) {
  return `https://github.com/${username}`;
}

export const navLinks = [
  { id: "home", label: "Beranda", href: "#home", icon: "home" },
  { id: "about", label: "Tentang", href: "#about", icon: "person" },
  { id: "skills", label: "Keahlian", href: "#skills", icon: "code" },
  { id: "projects", label: "Proyek", href: "#projects", icon: "work" },
  { id: "contact", label: "Kontak", href: "#contact", icon: "mail" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

/** Rail width (4.25rem) + left offset (~1rem) + breathing room */
export const SIDEBAR_OFFSET = "6.75rem";

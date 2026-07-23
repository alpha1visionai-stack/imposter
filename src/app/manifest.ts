import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Imposter – Das Partyspiel",
    short_name: "Imposter",
    description:
      "Finde den Imposter! Das mobile Partyspiel für 3-12 Spieler auf einem Handy.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0620",
    theme_color: "#0b0620",
    orientation: "portrait",
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}

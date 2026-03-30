/**
 * Single source of truth for landing page copy and links.
 * Replace placeholders with real NAP + social URLs before launch.
 */

import { GALLERY_IMAGE_FILES } from "./gallery-files";

function galleryAltFromFilename(file: string) {
  const base = file.replace(/\.(jpe?g|png|webp)$/i, "").replace(/~/g, "-");
  return `Bikers Cafe Dubrovnik — ${base.replace(/[-_]/g, " ")}`;
}

export const site = {
  name: "Bikers Cafe Dubrovnik",
  tagline: "Best Place for Bikers in Dubrovnik",
  phoneDisplay: "+385 91 313 0320",
  phoneE164: "+385913130320",
  social: {
    facebook: "https://www.facebook.com/bikerscaffedubrovnik/",
    instagram: "https://www.instagram.com/dubrovnikbikerscaffe/",
  },
  location: {
    addressLines: [
      "Ul. kralja Petra Krešimira IV 37",
      "20000 Dubrovnik",
      "Croatia",
    ],
    /** Matches published opening hours (confirm in Google Business Profile). */
    hours:
      "Mon–Fri · 07:00–00:00\nSat–Sun · 08:00–00:00",
    /** Same pin as the embedded map (Bikers Cafe). */
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=43.49907799102703,14.959770453534613",
    /** Google Maps embed `src` (share → embed map). */
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235345.2600819122!2d14.959770453534613!3d43.49907799102703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c74cac75bdd35%3A0x90412098e9ec94fd!2sBikers%20Cafe!5e0!3m2!1sen!2shr!4v1774903463574!5m2!1sen!2shr",
  },
  about: {
    eyebrow: "About us",
    title: "Built for the road",
    body: [
      "Bikers Cafe Dubrovnik is where the ride meets the Adriatic. We built a home for locals and travelers who live for the road, quality drinks and a space that respects the machine and the people around it.",
      "Whether you rolled in on two wheels or you are here for the atmosphere, you get the same welcome: confident hospitality, mechanical precision in every detail, and a backdrop that feels like a premium garage with the Dubrovnik Old City and Adriatic Sea at arm’s length.",
    ],
    stats: [
      {
        label: "Rider-first vibe",
        value: "Built for riders, made for the road.",
      },
      {
        label: "Community",
        value: "A place where riders meet, connect, and belong.",
      },
      {
        label: "Dubrovnik",
        value: "The ultimate biker stop in Dubrovnik.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "The garage energy",
    subtitle:
      "Real bikes, real light, real atmosphere from the cafe—see it before you roll up.",
    items: GALLERY_IMAGE_FILES.map((file) => ({
      src: `/content/gallery/${encodeURIComponent(file)}`,
      alt: galleryAltFromFilename(file),
    })),
  },
  footer: {
    line: "Ride in. Chill out. See you at the bar.",
    copyrightYear: 2026,
  },
};

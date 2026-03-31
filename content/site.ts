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
      "Since 2000., Bikers Cafe Dubrovnik has been a meeting point for riders, locals, and travelers who share the same passion for motorcycles, freedom, and authentic atmosphere.",
      "Located in Dubrovnik, our cafe is more than just a place for coffee. It is a biker destination where the sound of engines, premium bikes, strong espresso, cold beer, and real stories from the road create an experience you remember.",
      "Whether you ride a Harley, touring bike, sport bike, or simply love the biker lifestyle, this is the place where people come together before city rides, after coastal routes, and during unforgettable Dubrovnik sunsets.",
      "From local bikers to international motorcycle travelers exploring the Adriatic coast, Bikers Cafe Dubrovnik is known as one of the most unique biker-friendly places in the city.",
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

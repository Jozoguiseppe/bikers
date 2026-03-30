/**
 * Filenames synced from `/content/*.jpg` — also copied to `public/content/gallery/` for Next.js.
 * Add new photos to `content/`, then copy to public: `cp content/*.jpg public/content/gallery/`
 * and append the filename here.
 */
export const GALLERY_IMAGE_FILES = [
  "20210707_204711.jpg",
  "20210912_185902.jpg",
  "20211010_182346.jpg",
  "20220430_112429.jpg",
  "20220519_204028.jpg",
  "20220710_204307.jpg",
  "20240404_183105.jpg",
  "20240519_185551~2.jpg",
  "20240626_211133.jpg",
  "20250330_215607.jpg",
  "20250407_185849.jpg",
  "20250407_185930.jpg",
  "20250407_185948.jpg",
  "20250407_190050.jpg",
  "20250407_212527.jpg",
  "20250407_212804.jpg",
  "20250407_212854.jpg",
  "20250529_210031.jpg",
  "20250822_233337.jpg",
  "20251202_210423.jpg",
  "IMG-d8b4533ea5aa927ec4e623c5abd5b478-V.jpg",
  "IMG_20181217_203505_157.jpg",
  "PSX_20210912_190129.jpg",
] as const;

/**
 * Best 8 for the homepage grid; clicking any opens the full gallery viewer.
 * Must be a subset of `GALLERY_IMAGE_FILES` (same strings).
 */
export const GALLERY_HOMEPAGE_FILES = [
  "20210912_185902.jpg",
  "20220710_204307.jpg",
  "20240404_183105.jpg",
  "20250407_185930.jpg",
  "20250407_190050.jpg",
  "20250407_212804.jpg",
  "20251202_210423.jpg",
  "IMG-d8b4533ea5aa927ec4e623c5abd5b478-V.jpg",
] as const satisfies readonly (typeof GALLERY_IMAGE_FILES)[number][];

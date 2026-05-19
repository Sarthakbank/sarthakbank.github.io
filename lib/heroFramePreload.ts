const cache = new Map<string, Promise<HTMLImageElement>>();

export function loadHeroFrame(src: string): Promise<HTMLImageElement> {
  const existing = cache.get(src);
  if (existing) return existing;

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load frame: ${src}`));
    img.src = src;
  });

  cache.set(src, promise);
  return promise;
}

export function preloadHeroFrames(sources: string[]) {
  sources.forEach((src) => {
    void loadHeroFrame(src).catch(() => undefined);
  });
}

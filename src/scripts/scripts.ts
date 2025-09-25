export const startAvatarAnimation = () => {
  const polygons = document.querySelectorAll<SVGPolygonElement>("svg g polygon");
  if (polygons.length === 0) return;

  setInterval(() => {
    const selected: SVGPolygonElement[] = [];
    const used = new Set<number>();

    while (selected.length < 8 && used.size < polygons.length) {
      const randomIndex = Math.floor(Math.random() * polygons.length);
      if (!used.has(randomIndex)) {
        used.add(randomIndex);
        selected.push(polygons[randomIndex]);
      }
    }

    // sırayla ekle
    selected.forEach((p, i) => {
      setTimeout(() => {
        p.classList.add("force-hover");

        setTimeout(() => {
          p.classList.remove("force-hover");
        }, 1000); 

      }, i * 200); 
    });

  }, 1000); 
};

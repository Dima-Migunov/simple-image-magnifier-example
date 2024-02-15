function u(o, r, n) {
  let a = 1, d = 1;
  const e = typeof o == "string" ? document.querySelector(o) : o;
  if (!e)
    throw new Error("containerElement is not found");
  const i = typeof r == "string" ? e.querySelector(r) : r;
  if (!i)
    throw new Error("imageElement is not found");
  const t = typeof n == "string" ? e.querySelector(n) : n;
  if (!t)
    throw new Error("imageOriginalEl is not found");
  const s = () => {
    t && (t.style.width = t.naturalWidth + "px", t.style.height = t.naturalHeight + "px", a = t.naturalWidth / e.clientWidth - 1, d = t.naturalHeight / e.clientHeight - 1);
  };
  return (() => {
    t.addEventListener("load", s), e.addEventListener("mouseenter", () => {
      i.style.opacity = "0";
    }), e.addEventListener("mouseleave", () => {
      i.style.opacity = "1";
    }), e.addEventListener("mousemove", (l) => {
      t.style.top = -l.offsetY * d + "px", t.style.left = -l.offsetX * a + "px";
    });
  })(), s(), s;
}
export {
  u as default
};

"use client";

import { useEffect, useRef } from "react";

/**
 * A small custom dot cursor that grows when hovering
 * interactive elements. Automatically disabled on
 * touch/coarse-pointer devices.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    function onMove(e: MouseEvent) {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.add("show");
    }

    function attachHoverListeners() {
      const hoverTargets = document.querySelectorAll("a, button, .tech-item, .project-toggle");
      const viewTargets = document.querySelectorAll(".portrait-box, .creative-tile");

      const onEnterHover = () => cursor?.classList.add("hover");
      const onLeaveHover = () => cursor?.classList.remove("hover");
      const onEnterView = () => cursor?.classList.add("view");
      const onLeaveView = () => cursor?.classList.remove("view");

      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", onEnterHover);
        el.addEventListener("mouseleave", onLeaveHover);
      });
      viewTargets.forEach((el) => {
        el.addEventListener("mouseenter", onEnterView);
        el.addEventListener("mouseleave", onLeaveView);
      });

      return () => {
        hoverTargets.forEach((el) => {
          el.removeEventListener("mouseenter", onEnterHover);
          el.removeEventListener("mouseleave", onLeaveHover);
        });
        viewTargets.forEach((el) => {
          el.removeEventListener("mouseenter", onEnterView);
          el.removeEventListener("mouseleave", onLeaveView);
        });
      };
    }

    window.addEventListener("mousemove", onMove);
    // Content renders after mount (data-driven), so wait a tick before
    // attaching hover listeners to catch dynamically rendered elements.
    const t = setTimeout(attachHoverListeners, 300);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(t);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} aria-hidden="true" />;
}

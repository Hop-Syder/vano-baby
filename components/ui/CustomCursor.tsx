/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Custom animated cursor
 * @created 2026-03-24
 */
"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let followerX = 0, followerY = 0;
    let targetX = 0, targetY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      followerX += (targetX - followerX) * 0.15;
      followerY += (targetY - followerY) * 0.15;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterClickable = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      follower.style.transform = "translate(-50%, -50%) scale(1.5)";
      follower.style.opacity = "1";
    };

    const onMouseLeaveClickable = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.opacity = "0.6";
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    // Attach to all clickable elements
    const bindHover = () => {
      document.querySelectorAll("a, button, [role='button'], .cursor-pointer").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterClickable);
        el.addEventListener("mouseleave", onMouseLeaveClickable);
      });
    };
    bindHover();
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={followerRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
}

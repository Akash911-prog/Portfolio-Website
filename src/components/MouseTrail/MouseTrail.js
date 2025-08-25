"use client";
import { useEffect } from "react";

export default function MouseTrail({
    trailColor = "cyan",
    tailLength = 30,
    size = 1,
}) {
    useEffect(() => {
        // overlay layer so dots never block clicks
        const layer = document.createElement("div");
        Object.assign(layer.style, {
            position: "fixed",
            inset: "0",
            pointerEvents: "none",
            zIndex: "2147483647",
        });
        document.body.appendChild(layer);

        const dotStyle = {
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            clipPath: "circle(50%)",
            backgroundColor: trailColor,
            pointerEvents: "none",
            willChange: "transform, opacity",
            transform: "translate(-50%, -50%)",
        };

        // pre-create trail dots (reused)
        const dots = Array.from({ length: tailLength }, () => {
            const el = document.createElement("div");
            Object.assign(el.style, dotStyle);
            layer.appendChild(el);
            return el;
        });

        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const positions = Array.from({ length: tailLength }, () => ({
            x: pointer.x,
            y: pointer.y,
        }));

        // active/fade controls
        let active = false;
        let fade = 0; // 0..1 multiplicative fade

        const onPointerMove = (e) => {
            active = true;
            fade = 1; // instantly restore visibility when moving again
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };

        // when pointer leaves the window, relatedTarget === null
        const onPointerOut = (e) => {
            if (e.relatedTarget === null) active = false;
        };

        const onBlur = () => {
            // user alt-tabs away
            active = false;
        };

        let raf;
        const animate = () => {
            // update position history
            positions.unshift({ x: pointer.x, y: pointer.y });
            positions.pop();

            // drive fade down when inactive
            if (!active && fade > 0) fade = Math.max(0, fade - 0.08);

            dots.forEach((dot, i) => {
                const { x, y } = positions[i];
                dot.style.left = `${x}px`;
                dot.style.top = `${y}px`;

                // base gradient (head bright → tail dim)
                const baseOpacity = 1 - i / tailLength;
                // const scale = 1 - i / (tailLength * 2.8);

                dot.style.opacity = (baseOpacity * fade).toString();
                // dot.style.transform = `translate(-50%, -50%) scale(${Math.max(
                //     0.2,
                //     scale
                // )})`;
            });

            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerout", onPointerOut, { passive: true });
        window.addEventListener("blur", onBlur);
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) active = false;
        });

        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerout", onPointerOut);
            window.removeEventListener("blur", onBlur);
            layer.remove();
        };
    }, [trailColor, tailLength, size]);

    return null;
}

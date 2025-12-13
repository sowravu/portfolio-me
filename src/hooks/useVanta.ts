import { useEffect, useRef } from 'react';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export const useVanta = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            // Vanta.js relies on THREE.VertexColors which was removed in newer THREE versions
            // We need to patch it to ensure lines are colored correctly
            const ThreeWithVertexColors = { ...THREE, VertexColors: true };

            vantaEffect.current = NET({
                el: vantaRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3fff8b,
                backgroundColor: 0x0,
                THREE: ThreeWithVertexColors
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return vantaRef;
};

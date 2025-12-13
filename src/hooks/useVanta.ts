import { useEffect, useRef } from 'react';

export const useStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star particle
        class Star {
            x!: number;
            y!: number;
            size!: number;
            speedY!: number;
            speedX!: number;
            opacity!: number;
            twinkleSpeed!: number;
            twinklePhase!: number;

            constructor() {
                this.reset();
                this.y = Math.random() * canvas!.height;
            }

            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = -10;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.5;
                this.twinkleSpeed = Math.random() * 0.05 + 0.02;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.twinklePhase += this.twinkleSpeed;

                if (this.y > canvas!.height + 10 || this.x < -10 || this.x > canvas!.width + 10) {
                    this.reset();
                }
            }

            draw() {
                const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity * twinkle})`;
                ctx!.fill();

                // Add glitter effect with a 4-point star shape
                if (Math.random() > 0.98) {
                    ctx!.save();
                    ctx!.translate(this.x, this.y);
                    ctx!.strokeStyle = `rgba(255, 255, 255, ${this.opacity * twinkle * 0.6})`;
                    ctx!.lineWidth = 0.5;

                    // Draw cross
                    ctx!.beginPath();
                    ctx!.moveTo(-this.size * 2, 0);
                    ctx!.lineTo(this.size * 2, 0);
                    ctx!.moveTo(0, -this.size * 2);
                    ctx!.lineTo(0, this.size * 2);
                    ctx!.stroke();

                    ctx!.restore();
                }
            }
        }

        // Create stars
        const stars: Star[] = [];
        const starCount = 150;
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return canvasRef;
};

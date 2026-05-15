import React, { useEffect, useRef } from 'react';

const Canvas3D = ({ onCreated }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const createParticles = () => {
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      const count = isMobile ? 70 : 120;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.7,
        speedX: (Math.random() - 0.5) * 0.22,
        speedY: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.45 + 0.2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        width * 0.5
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.18)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(59, 130, 246, ${particle.alpha})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    onCreated?.();
    animationFrame = window.requestAnimationFrame(render);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [onCreated]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
      <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
    </div>
  );
};

export default Canvas3D;

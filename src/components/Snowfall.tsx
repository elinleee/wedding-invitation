import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    // let width = '100%';
    // let height = '100%';

    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }

    const snowflakes: { x: number; y: number; radius: number; speed: number }[] = [];

    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.3,
      });
    }

    const update = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fillStyle = 'rgba(256,256,256,0.5)';
        ctx.fill();
        flake.y += flake.speed;

        if (flake.y > height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * width;
        }
      });

      requestAnimationFrame(update);
    };

    update();

    // 리사이즈 대응
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // 마우스 클릭 방해 안하게
        zIndex: 1000,
      }}
    />
  );
};

export default Snowfall;

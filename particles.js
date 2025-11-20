// Simple particles background - lightweight
(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const opts = {count:80, size:2.2, speed:0.6, connectDistance:130, colors:['rgba(180,140,255,0.6)','rgba(100,170,255,0.5)']};
  let particles = [];
  function rand(min,max){return Math.random()*(max-min)+min}
  function resize(){w=canvas.width=innerWidth; h=canvas.height=innerHeight}
  addEventListener('resize', resize);
  function init(){
    particles = [];
    for(let i=0;i<opts.count;i++){
      particles.push({x:rand(0,w), y:rand(0,h), vx:rand(-opts.speed,opts.speed), vy:rand(-opts.speed,opts.speed), r:rand(0.8,opts.size)});
    }
  }
  function loop(){
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<particles.length;i++){
      let p = particles[i];
      for(let j=i+1;j<particles.length;j++){
        let q = particles[j];
        let dx = p.x-q.x, dy = p.y-q.y;
        let dist = Math.sqrt(dx*dx+dy*dy);
        if(dist<opts.connectDistance){
          ctx.strokeStyle = 'rgba(180,140,255,'+ (0.12*(1-dist/opts.connectDistance)) +')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
        }
      }
    }
    for(let i=0;i<particles.length;i++){
      let p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>w) p.vx *= -1;
      if(p.y<0||p.y>h) p.vy *= -1;
      ctx.fillStyle = opts.colors[i%opts.colors.length];
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(loop);
  }
  init(); loop();
})();
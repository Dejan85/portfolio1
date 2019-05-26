export const percentageCircle = (canvas, canvas2, canvas3) => {
  const ctx = canvas.getContext('2d');
  const ctx2 = canvas2.getContext('2d');
  const ctx3 = canvas3.getContext('2d');

  const canv = [[ctx, 90], [ctx2, 80], [ctx3, 20]];

  canv.forEach(ctx => {
    (function() {
      xad(ctx[0], ctx[1]);
    })();
  });

  function xad(ctx, num) {
    let no = 0;
    const pointToFill = 4.72;
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    let diff;

    function fillCounter() {
      diff = (no / 100) * Math.PI * 2 * 10;
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 15;
      ctx.fillStyle = 'white';
      ctx.padding = 10;
      ctx.strokeStyle = '#29b6f6';
      ctx.textAlign = 'center';
      ctx.font = '3.7rem monospace';
      ctx.fillText(no + '%', 165, 165);

      ctx.beginPath();
      ctx.arc(160, 160, 150, pointToFill, diff / 10 + pointToFill);

      ctx.stroke();

      if (no >= num) {
        clearTimeout(fill);
      }

      no++;
    }
    const fill = setInterval(fillCounter, 15);
  }
};

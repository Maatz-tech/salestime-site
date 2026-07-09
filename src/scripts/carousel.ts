// Carrossel com card destacado (trajetória e serviços).
//
// As setas navegam por ÍNDICE, não por deslocamento de scroll: no desktop o
// scroll atinge o limite antes da posição de snap dos últimos cards, então
// "voltar um passo" a partir do fim cairia entre dois cards e o destaque
// pularia itens. Em swipe/arraste do usuário o índice é derivado do scroll.
export interface Carousel {
  goTo(i: number): void;
  step(): number;
}

export function initCarousel(opts: {
  track: HTMLElement;
  prev: HTMLButtonElement;
  next: HTMLButtonElement;
  cards: HTMLElement[];
}): Carousel {
  const { track, prev, next, cards } = opts;
  let index = Math.max(0, cards.findIndex((c) => c.classList.contains('is-active')));
  let animating = false; // scroll disparado pelas setas: não derivar índice
  let settle = 0;

  // Passo = largura de um item do track (li/article) + gap
  const step = () => {
    const first = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    return (first?.offsetWidth ?? 0) + gap;
  };
  const maxScroll = () => track.scrollWidth - track.clientWidth;

  const render = () => {
    cards.forEach((c, j) => c.classList.toggle('is-active', j === index));
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
  };

  const goTo = (i: number) => {
    index = Math.min(cards.length - 1, Math.max(0, i));
    animating = true;
    window.clearTimeout(settle);
    settle = window.setTimeout(() => (animating = false), 700);
    track.scrollTo({ left: Math.min(index * step(), maxScroll()), behavior: 'smooth' });
    render();
  };

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  let raf = 0;
  track.addEventListener(
    'scroll',
    () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (animating) {
          // animação das setas em andamento: só renova o prazo de assentamento
          window.clearTimeout(settle);
          settle = window.setTimeout(() => (animating = false), 200);
          return;
        }
        const atEnd = track.scrollLeft >= maxScroll() - 4;
        index = atEnd
          ? cards.length - 1
          : Math.min(cards.length - 1, Math.round(track.scrollLeft / step()));
        render();
      });
    },
    { passive: true }
  );
  track.addEventListener('scrollend', () => (animating = false));
  window.addEventListener('resize', render, { passive: true });

  render();
  return { goTo, step };
}

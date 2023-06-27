export default function shuffleFigures() {
    const figures = [
      { title: 'Bomb', power: 11, count: 6 },
      { title: 'Marshal', power: 10, count: 1 },
      { title: 'General', power: 9, count: 1 },
      { title: 'Colonel', power: 8, count: 2 },
      { title: 'Major', power: 7, count: 3 },
      { title: 'Captain', power: 6, count: 4 },
      { title: 'Lieutenant', power: 5, count: 4 },
      { title: 'Sergeant', power: 4, count: 4 },
      { title: 'Miner', power: 3, count: 5 },
      { title: 'Scout', power: 2, count: 8 },
      { title: 'Spy', power: 1, count: 1 },
      { title: 'Flag', power: 0, count: 1 },
    ];

    const shuffledFigures = figures.reduce((arr, figure) => {
      for (let i = 0; i < figure.count; i++) {
        arr.push({ title: figure.title });
      }
      return arr;
    }, []);

    for (let i = shuffledFigures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledFigures[i], shuffledFigures[j]] = [shuffledFigures[j], shuffledFigures[i]];
    }

    const player1Figures = shuffledFigures.slice(0, 40);
    const player2Figures = shuffledFigures.slice(40, 80);

    return { player1Figures, player2Figures };
  }
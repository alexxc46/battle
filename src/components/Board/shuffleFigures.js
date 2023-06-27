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

    const addFiguresToArray = () => {
        return figures.reduce((arr, figure) => {
            for (let i = 0; i < figure.count; i++) {
              arr.push({ title: figure.title });
            }
            return arr;
          }, [])
    }

    const shuffle = () => {
        const fa = addFiguresToArray()

        for (let i = fa.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fa[i], fa[j]] = [fa[j], fa[i]];
        }

        return fa;
    }

    const player1Figures = shuffle().slice(0, 40);
    const player2Figures = shuffle().slice(0, 40);


    return { player1Figures, player2Figures };
  }
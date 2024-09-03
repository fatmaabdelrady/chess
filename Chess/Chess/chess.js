
    const board = document.getElementById('board');

    const pieces = [
        ['black-castle', 'black-knight', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-knight', 'black-castle'],
        Array(8).fill('black-pawn'),
        Array(8).fill('empty'),
        Array(8).fill('empty'),
        Array(8).fill('empty'),
        Array(8).fill('empty'),
        Array(8).fill('white-pawn'),
        ['white-castle', 'white-knight', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-knight', 'white-castle'],
    ];

    for (let row = 0; row < 8; row++) {
        for (let colm = 0; colm < 8; colm++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + colm) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }
            const piece = pieces[row][colm];
            square.classList.add(piece);
            board.appendChild(square);
        }
    }


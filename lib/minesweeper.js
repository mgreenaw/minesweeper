// function to print out the board in a nice format
const printBoard = board => {
	console.log('Current Board:');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

// Create empty board
let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

// Actually display the board
printBoard(board);

board[0][1] = '1';
board[1][2] = 'B';

printBoard(board);
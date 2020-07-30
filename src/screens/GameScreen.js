import React, {Component} from 'react';
import Board from '../components/Board';
import {StyleSheet, TouchableOpacity, Text, Button, View} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  newGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      //   const desc = move ? 'Go to move #' + move : 'Go to game start';
      const desc = `Go to move # ${move}`;

      return (
        <Button
          title={desc}
          onPress={() => {
            this.jumpTo(move);
          }}></Button>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <View style={styles.game}>
        <View style={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </View>
        <View style={styles.gameInfo}>
          <Text> {status} </Text>

          <Button
            onPress={() => {
              this.newGame();
            }}
            title="New Game"
          />

          <View>{moves}</View>
        </View>
      </View>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  status: {
    marginBottom: 10,
  },
  game: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  gameInfo: {
    marginLeft: 20,
  },
});

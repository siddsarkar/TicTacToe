import React, {Component} from 'react';
import Board from '../components/Board';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';

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
  componentDidMount() {
    //do stuff
    SplashScreen.hide();
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
          key={move}
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
      <>
        <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />

        <View style={styles.game}>
          <Icon
            style={styles.menuIcon}
            name="menuunfold"
            size={30}
            color="lightgrey"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
          <Text style={styles.status}> {status} </Text>

          <View style={styles.gameBoard}>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </View>
          <View style={styles.gameInfo}>
            <TouchableOpacity
              style={styles.newGame}
              onPress={() => {
                this.newGame();
              }}>
              <Text style={styles.newText}>New Game</Text>
            </TouchableOpacity>

            {/* <View>{moves}</View> */}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  status: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 30,
  },
  game: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  gameInfo: {
    color: '#fff',
    marginLeft: 20,
  },
  newGame: {
    backgroundColor: '#fff',
    width: 130,
    height: 50,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newText: {
    fontSize: 20,
    color: '#000',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    // backgroundColor: '#000',
    // color: '#fff',
    zIndex: 999,
  },
});

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

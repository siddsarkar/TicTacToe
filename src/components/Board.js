import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Square from './Square';

export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        onClick={() => {
          this.props.onClick(i);
        }}
        value={this.props.squares[i]}
      />
    );
  }

  render() {
    return (
      <View style={styles.board}>
        <View style={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    margin: 20,
    borderWidth: 10,
    borderColor: 'black',
  },
  boardRow: {
    flexDirection: 'row',
  },
});

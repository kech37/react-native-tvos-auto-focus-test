import React, {createRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    if (this.usernameRef.current) {
      this.usernameRef.current.focus();
    }
  }

  render() {
    const {username, password} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            ref={this.usernameRef}
            style={styles.textInput}
            value={username}
            placeholder={'Insert the username'}
            onChangeText={(input) => {
              this.setState({
                username: input,
              });
            }}
            returnKeyType="next"
          />
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder={'Insert the password'}
            onChangeText={(input) => {
              this.setState({
                password: input,
              });
            }}
            secureTextEntry={true}
            returnKeyType="done"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    width: 12 * 24,
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 40,
    marginVertical: 12,
    padding: 0,
    width: 12 * 22,
  },
});

export default App;

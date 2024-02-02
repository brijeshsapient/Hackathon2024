import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';
import {get} from '../../utils/Lodash.utils';

interface State {
  connectionInfo: NetInfoState | null;
  children: any;
}
export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends React.Component<State> {
  subscription: NetInfoSubscription | null = null;

  state = {
    connectionInfo: null,
  };

  componentDidMount() {
    this.subscription = NetInfo.addEventListener(
      this.handleConnectionInfoChange,
    );
  }

  componentWillUnmount() {
    this.subscription && this.subscription();
  }

  handleConnectionInfoChange = (connectionInfo: NetInfoState) => {
    this.setState({connectionInfo});
    NetworkStatus.setConnectedStatus = connectionInfo.isConnected;
  };

  render() {
    const isConnected = get(this.state, 'connectionInfo.isConnected', true);
    return (
      <NetworkContext.Provider value={{isConnected}}>
        {isConnected ? (
          this.props.children
        ) : (
          <View style={style.noInternet}>
            <Text>No Internet Available</Text>
          </View>
        )}
      </NetworkContext.Provider>
    );
  }
}

export const NetworkStatus = {
  isConnected: true,
  set setConnectedStatus(status: boolean) {
    this.isConnected = status;
  },
};

const style = StyleSheet.create({
  noInternet: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});

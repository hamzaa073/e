import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import List from './src/component/List';
import Manage from './src/component/Manage';
import Profile from './src/component/Profile';
import Cart from './src/component/Cart';
import {Header, Avatar, Divider, Icon, Card} from 'react-native-elements';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
  tabs = [
    {
      key: 'Shop',
      icon: 'movie',
      label: 'Shop',
      barColor: 'gray',
    },
    {
      key: 'Manage',
      icon: 'today',
      label: 'Manage',
      barColor: 'gray',
    },
    {
      key: 'Profile',
      icon: 'contacts',
      label: 'Profile',
      barColor: 'gray',
    },
    {
      key: 'cart',
      icon: 'shopping-cart',
      label: 'cart',
      barColor: 'gray',
    },
  ];

  state = {
    activeTab: 'Shop',
  };

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {this.state.activeTab == 'Shop' ? (
            <List />
          ) : this.state.activeTab == 'Manage' ? (
            <Manage />
          ) : this.state.activeTab == 'Profile' ? (
            <Profile />
          ) : this.state.activeTab == 'cart' ? (
            <Cart />
          ) : (
            <View></View>
          )}
        </View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
};

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
};

export default function Navbar(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <View style={hamburgerOpen ? { height: RPH(100) } : { height: RPH(10) }}>
      <View style={Styles.bar}>
        <View style={Styles.pizzaDiv}>
          <Text style={Styles.textColor}>Pizza Maestro</Text>
        </View>
        <TouchableHighlight style={Styles.burgerDiv} onPress={() => { toggleHamburger(); }}>
          <View style={Styles.hamburger} >
            <View style={hamburgerOpen ? Styles.openBurger1 : Styles.burger1} />
            <View style={hamburgerOpen ? Styles.openBurger2 : Styles.burger2} />
            <View style={hamburgerOpen ? Styles.openBurger3 : Styles.burger3} />
          </View>
        </TouchableHighlight>
      </View>
      {hamburgerOpen && (
        <View style={Styles.menu}>
          <Text style={Styles.li} onPress={() => {
            toggleHamburger();
            props.navigation.navigate('Home');
          }}>
            Home
          </Text>
          <Text style={Styles.li} onPress={() => {
            toggleHamburger();
            props.navigation.navigate('Menu')
          }}>
            Lunch Menu
          </Text>
          <Text style={Styles.li} onPress={() => {
            toggleHamburger();
            props.navigation.navigate('About')
          }}>
            About us
          </Text>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    width: RPW(100),
    height: RPH(5),
    flexDirection: 'row',
    color: '#F0EAD6',
    paddingVertical: RPH(5),
    backgroundColor: '#010100AA',
  },
  pizzaDiv: {
    flex: 1,
    width: RPW(70),
    height: RPH(5),
    marginLeft: RPW(30),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  textColor: {
    color: '#F0EAD6',
    fontSize: 18,
    textAlign: 'center'
  },
  burgerDiv: {
    flex: 1,
    width: RPW(15),
    height: RPH(5),
    justifyContent: 'end',
    alignItems: 'center',
  },

  hamburger: {
    width: RPW(15),
    height: RPH(5),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexFlow: 'column nowrap',
  },

  burger1: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
    transform: [{ rotate: '0deg' }],
  },

  burger2: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
    transform: [{ translateX: 0 }],
    opacity: 1,
  },

  burger3: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
  },


  openBurger1: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
    opacity: 0,
  },

  openBurger2: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
    transform: [{ rotate: '45deg' }],
  },
  openBurger3: {
    width: RPW(15),
    height: RPH(1),
    borderRadius: 10,
    backgroundColor: '#F0EAD6',
    transform: [{ rotate: '-45deg' }],
  },

  menu: {
    position: 'absolute',
    backgroundColor: '#010100AA',
    height: RPH(95),
    width: RPW(100),
    top: RPH(10),
    bottom: 0,
    alignItems: 'center',
    flex: 1,
    color: '#F0EAD6',
  },

  li: {
    marginTop: RPH(5),
    paddingBottom: RPH(1),
    paddingHorizontal: RPW(20),
    width: RPW(60),
    textAlign: 'center',
    borderBottomColor: '#F0EAD6',
    borderBottomWidth: 2,
    color: '#F0EAD6',
  }
});

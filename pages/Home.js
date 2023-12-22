import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native';
import Navbar from '../components/Navbar';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
};

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
};

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Navbar navigation={navigation}/>
      <View style={styles.homeWrapper}>
        <Text
          style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 35, textAlign: 'center' }}
        >
          Welcome to Pizza Maestro{"\n"}Where Every Slice Tells a Story!{"\n"}
        </Text>
        <Text
          style={{ color: '#F0EAD6', fontSize: 18, textAlign: 'center' }}
        >
          At Pizza Maestro, we believe in more than just serving pizza. {"\n"}
          we believe in creating moments of joy, comfort, and connection.{"\n"}
          Our mission is to craft every slice with passion, using only the finest ingredients,{"\n"} so you can taste the love in every bite.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: '#00000066',
    width: RPW(100),
    paddingHorizontal: RPW(2.5),
    height: RPH(95),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

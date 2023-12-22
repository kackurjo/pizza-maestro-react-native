import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Navbar from '../components/Navbar';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
};

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
};

export default function About({ navigation }) {
  return (
    <ScrollView>
      <Navbar navigation={navigation} />
      <View style={styles.homeWrapper}>
        <Text
          style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          About Us
        </Text>
        <Text
          style={{ color: '#F0EAD6', fontSize: 16, textAlign: 'center' }}
        >
          Our team is a family, dedicated to bringing you the best pizza experience in Helsinki. {"\n"}
          From our skilled chefs who craft each pizza with precision,
          to our friendly servers who make you feel at home, every member of our staff is passionate about what they do.
        </Text>
        <Text
          style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          Contact Us
        </Text>
        <Text
          style={{ color: '#F0EAD6', fontSize: 16, textAlign: 'center' }}
        >
          We'd love to hear from you! Feel free to reach out using any of the methods below.{"\n"}
          Address:
          123 Main Street
          00010, Helsinki
          Finland
          {"\n"}
          Phone: (+358) 50 555-5555
          {"\n"}
          Email:
          info@pizzamaestro.finest{"\n"}
          {"\n"}{"\n"}
          Opening Hours:
          Monday - Friday: 11:00 AM - 14:00 PM
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

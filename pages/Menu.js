import { Dimensions, ScrollView, StyleSheet, SectionList, View, Text } from 'react-native';
import Navbar from '../components/Navbar';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
};

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
};

const data = [
  {
    title: 'Monday - Margherita Madness',
    data: 'Margherita Pizza: Tomato Sauce, Fresh Mozzarella, Basil, Olive Oil',
  },
  {
    title: 'Tuesday - Pepperoni Pleasure',
    data: 'Pepperoni Pizza: Tomato Sauce, Mozzarella, Pepperoni Slices',
  },
  {
    title: 'Wednesday - Calzone Delight',
    data: 'Classic Calzone - Ricotta, Mozzarella, Pepperoni, Sausage, Spinach',
  },
  {
    title: 'Thursday - BBQ Chicken Fiesta',
    data: 'BBQ Chicken Pizza: BBQ Sauce, Mozzarella, Grilled Chicken, Red Onions, Cilantro',
  },
  {
    title: "Friday - Meat Lover's Feast",
    data: 'Meat Lovers Pizza: Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bacon, Ham',
  }
]

export default function About({ navigation }) {
  return (
    <ScrollView>
      <Navbar navigation={navigation} />
      <View style={styles.homeWrapper}>
        <Text
          style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          Lunch Menu
        </Text>
        <View style={styles.dayView}>
          <Text
            style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 18 }}
          >
            Monday - Margherita Madness
          </Text>
          <Text
            style={styles.itemText}
          >
            Margherita Pizza: Tomato Sauce, Fresh Mozzarella, Basil, Olive Oil
          </Text>
        </View>
        <View style={styles.dayView}>
          <Text
            style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 18 }}
          >
            Tuesday - Pepperoni Pleasure
          </Text>
          <Text
            style={styles.itemText}
          >
            Pepperoni Pizza: Tomato Sauce, Mozzarella, Pepperoni Slices
          </Text>
        </View>
        <View style={styles.dayView}>
          <Text
            style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 18 }}
          >
            Wednesday - Calzone Delight
          </Text>
          <Text
            style={styles.itemText}
          >
            Classic Calzone - Ricotta, Mozzarella, Pepperoni, Sausage, Spinach
          </Text>
        </View>
        <View style={styles.dayView}>
          <Text
            style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 18 }}
          >
            Thursday - BBQ Chicken Fiesta
          </Text>
          <Text
            style={styles.itemText}
          >
            BBQ Chicken Pizza: BBQ Sauce, Mozzarella, Grilled Chicken, Red Onions, Cilantro
          </Text>
        </View>
        <View style={styles.dayView}>
          <Text
            style={{ color: '#F0EAD6', fontWeight: 'bold', fontSize: 18 }}
          >
            Friday - Meat Lover's Feast
          </Text>
          <Text
            style={styles.itemText}
          >
            Meat Lovers Pizza: Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bacon, Ham
          </Text>
        </View>
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
  dayView: {
    borderTopColor: '#F0EAD6',
    borderTopWidth: 2,
    width: RPW(80),
    padding: RPW(1),
    marginTop: RPH(2),
  },
  itemText: {
    color: '#F0EAD6',
    fontSize: 16,
    paddingLeft: RPW(4),
    paddingTop: RPH(1)
  }
});

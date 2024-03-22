import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';

const BookDetails = ({route}) => {
  const {book, imageUrl} = route.params;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Image source={{uri: imageUrl}} style={styles.movieImage} />
      <Text style={styles.modalTitle}>{book.name}</Text>
      <Text>Last Update: {book.last_update}</Text>
      <Text>Size: {book.seed_count}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFC3CA',
    padding: 50,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center', // Center content horizontally
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieImage: {
    width: 300,
    height: 400,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default BookDetails;

// import React, {useEffect, useRef} from 'react';
// import {View, Text, StyleSheet, Image, Animated} from 'react-native';

// const BookDetails = ({route}) => {
//   const {book, imageUrl} = route.params;

//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 2,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
//       <Image source={{uri: imageUrl}} style={styles.movieImage} />
//       <Text style={styles.title}>{book.name}</Text>
//       <Text style={styles.info}>Last Update: {book.last_update}</Text>
//       <Text style={styles.info}>Size: {book.seed_count}</Text>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EFC3CA',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     alignItems: 'center', // Center content horizontally
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   info: {
//     fontSize: 18,
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   movieImage: {
//     width: 300,
//     height: 400,
//     marginBottom: 20,
//     borderRadius: 10,
//   },
// });

// export default BookDetails;

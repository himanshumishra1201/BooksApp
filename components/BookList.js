// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// const BookList = ({navigation}) => {
//   const [books, setBooks] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     // Fetch books data and set state
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://openlibrary.org/people/mekBot/lists.json',
//         );
//         if (!response.ok) {
//           throw new Error(`Error fetching book data: ${response.status}`);
//         }
//         const data = await response.json();
//         setBooks(data.entries);
//       } catch (error) {
//         console.error('Error fetching book data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleBookSelect = book => {
//     setSelectedBook(book);
//     const imageUrl = `https://picsum.photos/200/${301 + books.indexOf(book)}`;
//     navigation.navigate('Details', {book, imageUrl});
//   };

//   const handleFavoriteToggle = book => {
//     // Toggle favorite status
//     const isFavorite = favorites.some(fav => fav.url === book.url);
//     if (isFavorite) {
//       setFavorites(favorites.filter(fav => fav.url !== book.url));
//     } else {
//       setFavorites([...favorites, book]);
//     }
//   };

//   const isBookFavorite = book => {
//     return favorites.some(fav => fav.url === book.url);
//   };

//   // const generateImageUrl = index => {
//   //   return `https://picsum.photos/200/${300 + index}`;
//   // };

//   // const renderBookItem = ({item, index}) => {
//   //   const isFavorite = favorites.some(fav => fav.url === item.url);

//   //   if (showFavoritesOnly && !isFavorite) {
//   //     return null;
//   //   }

//   //   const imageUrl = `https://picsum.photos/200/${301 + index}`;

//   //   return (
//   //     <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
//   //       <View style={styles.itemContainer}>
//   //         <TouchableOpacity onPress={() => handleBookSelect(item)}>
//   //           <Image
//   //             source={{
//   //               // uri: 'https://picsum.photos/200/300',
//   //               uri: imageUrl,
//   //             }}
//   //             style={styles.imageStyle}
//   //           />
//   //         </TouchableOpacity>
//   //         <View style={styles.textContainer}>
//   //           <Text style={styles.nameStyle}>{item.name}</Text>
//   //           {/* <Text style={styles.lastUpdateStyle}>
//   //             Last Update: {item.last_update}
//   //           </Text> */}
//   //           <Text>Size: {item.seed_count}</Text>
//   //           <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
//   //             <Text
//   //               style={[
//   //                 styles.favoriteIcon,
//   //                 isFavorite && styles.favoriteIconActive,
//   //               ]}>
//   //               ❤️
//   //             </Text>
//   //           </TouchableOpacity>
//   //         </View>
//   //       </View>
//   //     </TouchableOpacity>
//   //   );
//   // };

//   const renderBookItem = ({item, index}) => {
//     const isFavorite = favorites.some(fav => fav.url === item.url);

//     if (showFavoritesOnly && !isFavorite) {
//       return null;
//     }

//     // Dynamically generate image URL with an increasing number for each item
//     const imageUrl = `https://picsum.photos/200/${301 + index}`;

//     return (
//       <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
//         <View style={styles.itemContainer}>
//           <TouchableOpacity onPress={() => handleBookSelect(item)}>
//             <Image
//               source={{
//                 uri: imageUrl,
//               }}
//               style={styles.imageStyle}
//             />
//           </TouchableOpacity>
//           <View style={styles.textContainer}>
//             <Text style={styles.nameStyle}>{item.name}</Text>
//             {/* <Text style={styles.lastUpdateStyle}>
//               Last Update: {item.last_update}
//             </Text> */}
//             <Text>Size: {item.seed_count}</Text>
//             <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
//               <Text
//                 style={[
//                   styles.favoriteIcon,
//                   isFavorite && styles.favoriteIconActive,
//                 ]}>
//                 ❤️
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => setShowFavoritesOnly(!showFavoritesOnly)}>
//           <Text style={styles.buttonText}>
//             {showFavoritesOnly ? 'Show All' : 'Show Favorites Only'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={books}
//         renderItem={renderBookItem}
//         keyExtractor={item => item.url}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     overflow: 'hidden',
//     margin: 15,
//   },
//   imageStyle: {
//     width: 100,
//     height: 150,
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   textContainer: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   nameStyle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   lastUpdateStyle: {
//     color: 'gray',
//     fontSize: 14,
//   },
//   buttonContainer: {
//     alignItems: 'flex-start',
//     margin: 5,
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontWeight: 'bold',
//   },
//   favoriteIcon: {
//     fontSize: 20,
//     marginTop: 5,
//   },
//   favoriteIconActive: {
//     color: 'red',
//   },
// });

// export default BookList;

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';

const BookList = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch books data and set state
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/people/mekBot/lists.json',
        );
        if (!response.ok) {
          throw new Error(`Error fetching book data: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data.entries);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchData();
  }, []);

  const handleBookSelect = book => {
    setSelectedBook(book);
    const imageUrl = `https://picsum.photos/200/${301 + books.indexOf(book)}`;
    navigation.navigate('Details', {book, imageUrl});
  };

  const handleFavoriteToggle = book => {
    // Toggle favorite status
    const isFavorite = favorites.some(fav => fav.url === book.url);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.url !== book.url));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  const isBookFavorite = book => {
    return favorites.some(fav => fav.url === book.url);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const renderBookItem = ({item, index}) => {
    const isFavorite = favorites.some(fav => fav.url === item.url);

    if (showFavoritesOnly && !isFavorite) {
      return null;
    }

    const imageUrl = `https://picsum.photos/200/${301 + index}`;

    return (
      <TouchableOpacity
        onPress={() => handleFavoriteToggle(item)}
        activeOpacity={0.7}>
        <Animated.View style={[styles.itemContainer, {opacity: fadeAnim}]}>
          <TouchableOpacity onPress={() => handleBookSelect(item)}>
            <Image
              source={{uri: imageUrl}}
              style={styles.imageStyle}
              onLoad={fadeIn}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text>Size: {item.seed_count}</Text>
            <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
              <Text
                style={[
                  styles.favoriteIcon,
                  isFavorite && styles.favoriteIconActive,
                ]}>
                ❤️
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowFavoritesOnly(!showFavoritesOnly)}>
          <Text style={styles.buttonText}>
            {showFavoritesOnly ? 'Show All' : 'Show Favorites Only'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={item => item.url}
        extraData={favorites}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CBBDFC',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 3,
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 30,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  favoriteIcon: {
    fontSize: 25,
    marginTop: 5,
  },
  favoriteIconActive: {
    color: 'red',
  },
});

export default BookList;

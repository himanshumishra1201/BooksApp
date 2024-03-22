import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({navigation}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBookList, setShowBookList] = useState(true); // State variable to manage view

  const handleSearch = results => {
    setSearchResults(results);
    setShowBookList(false); // Hide BookList when search results are available
  };

  const handleBackToBookList = () => {
    // Show BookList when going back
    setShowBookList(true);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={handleSearch}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {isLoading && <Text>Searching...</Text>}
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      {showBookList ? (
        <BookList navigation={navigation} />
      ) : (
        <>
          <TouchableOpacity
            onPress={handleBackToBookList}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Book List</Text>
          </TouchableOpacity>
          <FlatList
            data={searchResults}
            renderItem={({item, index}) => (
              <View style={styles.flatstyle}>
                <Image
                  source={{
                    uri: `https://picsum.photos/200/${301 + index}`,
                  }}
                  style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>{item.title}</Text>
              </View>
            )}
            keyExtractor={item => item.key || item.isbn}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9faf3',
    paddingHorizontal: 10,
  },
  flatstyle: {
    marginVertical: 3,
    marginHorizontal: 7,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0daf0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '700',
    flex: 1,
    margin: 10,
  },
  imageStyle: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  backButton: {
    backgroundColor: '#b9d8478d',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    width: 150,
  },
  backButtonText: {
    fontWeight: '700',
    color: '#353131',
  },
});

export default HomeScreen;

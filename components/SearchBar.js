import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const SearchBar = ({onSearch, isLoading, setIsLoading, setError}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const handleSearch = async () => {
    if (!searchTerm) {
      setError('Please enter a search term.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${searchTerm}&limit=100&page=${currentPage}`,
      );
      if (!response.ok) {
        throw new Error(`Error fetching search results: ${response.status}`);
      }
      const newData = await response.json();
      setData(currentPage === 1 ? newData.docs : [...data, ...newData.docs]);
      onSearch(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (!data.next) return;

    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search Books"
        onChangeText={setSearchTerm}
        value={searchTerm}
        style={styles.searchBar}
      />
      <View style={{borderRadius: 30, backgroundColor: 'yellow'}}>
        <Button
          title="Search"
          onPress={handleSearch}
          style={styles.searchButton}
        />
      </View>
      {data.next && (
        <Button
          title="Load More"
          onPress={handleLoadMore}
          style={styles.loadMoreButton}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    borderColor: '#383434',
    width: '75%',
    margin: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    borderRadius: 20,
    color: 'red',
  },
});

export default SearchBar;

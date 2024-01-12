// UserList.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUsers, deleteAlbum } from '../redux/slices/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const navigation:any = useNavigation();
  const users = useSelector((state: any) => state.user.users);
  const deletedAlbums = useSelector((state: any) => state.user.deletedAlbums);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        dispatch(setUsers(userData));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity onPress={() => navigateToPhotos(item.id)}>
        <View>
          <Text>{item.name}</Text>
          {deletedAlbums.includes(item.id.toString()) ? (
            <Text>Album Deleted</Text>
          ) : (
            <Text>Album Available</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const navigateToPhotos = (userId: number) => {
    navigation.navigate('Photos', { userId });
  };

  return (
    <View>
      <Text>User List</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default UserList;

// Photos.tsx
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Photos = () => {
  const route:any = useRoute();
  const navigation = useNavigation();
  const albumId = route.params?.albumId || 0;

  const photos = React.useMemo(() => {
    // Simulating API call to get photos for a specific album
    return [
      { id: 1, thumbnailUrl: 'https://via.placeholder.com/150', title: 'Photo 1' },
      { id: 2, thumbnailUrl: 'https://via.placeholder.com/150', title: 'Photo 2' },
      // Add more photos as needed
    ];
  }, []);

  const renderPhotoItem = ({ item }: { item: any }) => (
    <View style={{ margin: 10 }}>
      <Image source={{ uri: item.thumbnailUrl }} style={{ width: 150, height: 150, borderRadius: 5 }} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>{albumId === 0 ? 'All Photos' : `Album ${albumId}`}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <FlatList
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

export default Photos;

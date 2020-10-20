import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card, ListItem} from 'react-native-elements';

type Props = {
  item: number;
};

const PostItem: React.FC<Props> = () => {
  return (
    <Card containerStyle={styles.container}>
      <Card.Image
        style={styles.imageStyles}
        source={{
          uri:
            'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
        }}
      />
      <ListItem containerStyle={styles.listItem} style={styles.listItem}>
        <View>
          <Avatar
            rounded
            size="small"
            source={{
              uri:
                'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
            }}
          />
          <ListItem.Title>Username</ListItem.Title>
        </View>
        <View>
            
        </View>
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    borderRadius: 25,
  },

  imageStyles: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  listItem: {
    justifyContent: 'space-between',
    borderBottomRightRadius: 25,
    borderBottomStartRadius: 25,
  },
});

export default PostItem;

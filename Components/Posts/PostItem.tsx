import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {PostType} from '../../redux/dataTypes';

type Props = {
  item: PostType;
};

const PostItem: React.FC<Props> = ({item}) => {
  return (
    <Card containerStyle={styles.container}>
      <Card.Image
        style={styles.imageStyles}
        source={{
          uri: item.content,
        }}
      />
      <ListItem containerStyle={styles.listItem} style={styles.listItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            rounded
            size="small"
            source={{
              uri: item.owner.avatar,
            }}
          />
          <ListItem.Title style={{marginLeft: 10}}>
            {item.owner.username}
          </ListItem.Title>
        </View>
        <View>
          <Icon name="heart" size={20} color="red" />
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

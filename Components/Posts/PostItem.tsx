import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Card, Divider, ListItem} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import TouchableScale from 'react-native-touchable-scale';

import Icon from 'react-native-vector-icons/FontAwesome';

import {PostType} from '../../redux/dataTypes';

type Props = {
  item: PostType;
};

const PostItem: React.FC<Props> = ({item}) => {
  const navigation = useNavigation();
  return (
    <Card containerStyle={styles.container}>
      <TouchableScale
        onPress={() => navigation.navigate('PostDetail', {post: item})}
        activeScale={0.999}>
        <Card.Image
          style={styles.imageStyles}
          source={{
            uri: item.content,
          }}
        />
      </TouchableScale>
      <ListItem containerStyle={styles.listItem} style={styles.listItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ListItem.Title style={{marginLeft: 10}}>
            {item.description}
          </ListItem.Title>
        </View>
      </ListItem>
      <Divider />
      <ListItem containerStyle={styles.listItem} style={styles.listItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableScale activeScale={0.6}>
            <Avatar
              rounded
              size="small"
              source={{
                uri: item.owner.avatar,
              }}
            />
          </TouchableScale>
          <ListItem.Title style={{marginLeft: 10}}>
            {item.owner.username}
          </ListItem.Title>
        </View>
        <TouchableScale activeScale={0.6}>
          <View>
            <Icon name="heart" size={20} color="grey" />
          </View>
        </TouchableScale>
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
    height: 200,
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

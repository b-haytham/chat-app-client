import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import ActionBar from '../Components/ActionBar/ActionBar'
import { RootState } from '../redux/rootReducer'
import client from '../utils/feathersClient'
import { EditProfileSceenNavigationProps, EditProfileScreenRouteProps } from './types'

type Props = {
    navigation: EditProfileSceenNavigationProps
    route: EditProfileScreenRouteProps
}

const EditProfile: React.FC<Props> = ({navigation}) => {
    const currentUser = useSelector((state: RootState)=>state.auth.currentUser)

const [data, setData]=useState(null)

    useEffect(() => {

        async function getRooms() {
          try {
            const rooms = await client.service('rooms').find({
              query: {
                $or: [
                  { creator: currentUser._id },
                  { acceptor: currentUser._id }
                ]
              }
            });
            setData(rooms)
            console.log('ROOOOMS----', rooms)
          } catch (error) {
            setData(error)
            console.log('ROOOMS ERROR', error);
          }
        }
    
          getRooms()
        
      }, []);

    return (
        <ScrollView style={styles.container}>
            <ActionBar onPress={()=> navigation.goBack()}/>
            <Text> {JSON.stringify(data, null, 2)} </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})

export default EditProfile

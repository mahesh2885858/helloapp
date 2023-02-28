import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}><Text style={{ color: "black" }} >This is Home page</Text>
            <Button title='go to profile' onPress={(e) => { navigation.navigate("Profile") }} />
        </View>
    )
}

export default HomeScreen
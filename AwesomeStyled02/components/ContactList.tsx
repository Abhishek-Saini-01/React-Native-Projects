import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Abhishek Saini',
            status: 'Just a extra ordinary person',
            imageUrl: 'https://avatars.githubusercontent.com/u/94614718?v=4',
        },
        {
            uid: 2,
            name: 'Abhinav Sharma',
            status: 'Just a extra ordinary person',
            imageUrl: 'https://avatars.githubusercontent.com/u/94614718?v=4',
        },
        {
            uid: 3,
            name: 'Hitesh Singh',
            status: 'Just a extra ordinary person',
            imageUrl: 'https://avatars.githubusercontent.com/u/94614718?v=4',
        },
        {
            uid: 4,
            name: 'Rahul Kumawat',
            status: 'Just a extra ordinary person',
            imageUrl: 'https://avatars.githubusercontent.com/u/94614718?v=4',
        },
    ]

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView 
                style={styles.container}
                scrollEnabled={false}
            >
                {
                    contacts.map(({ uid, imageUrl, name, status }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image source={{uri: imageUrl}} style={styles.userImage}  />
                            <View >
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    container: {
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8d3daf',
        padding: 4,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    userStatus: {
        fontSize: 12,

    },
})


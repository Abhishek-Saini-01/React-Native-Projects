import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
  
  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in this blog?
          </Text>
        </View>

        <Image source={{
          uri: 'https://images.unsplash.com/photo-1678780593184-c71d50923fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        }} 
        style={styles.cardImage} 
        />

        <View style={styles.cardBody}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae fuga beatae dolorum officiis vero maiores harum ipsum voluptatem mollitia, adipisci vitae fugit cupiditate molestias atque deserunt. Minima, reiciendis odit.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> openWebsite('https://hashnode.com/')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> openWebsite('https://instagram.com/')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize : 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 6,
  },
  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
  },
  cardBody: {
    padding: 10,
  },
  bodyText: {},
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  },
})
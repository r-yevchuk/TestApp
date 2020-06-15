import React, { Component } from 'react';
import {Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import Api from './service/api';


export default class Home extends Component{
    constructor() {
        super();
        this.state = {
            photos: []
        }
        this.getImages()
    }

    getImages(){
        Api.get('photos/?client_id=YEXCdQxJKF865-2Vz4FUxGTqFM_aIojwYH62dBmYPrQ')
            .then((response) => {
                if (response.error) {
                    return;
                }
                this.setState({
                    photos: response.data,
                });
            });
    }

    render () {
        const { photos } = this.state;
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={photos}
                    renderItem={({ item }) => <Item author={item.user.name}
                                                    description={item.description}
                                                    image={item.urls.small}
                                                    navigation={navigation}/>}
                />
            </SafeAreaView>
        );
    }
}

const Item = ({ author, description, image, navigation})=> {
    function onItemClick() {
        navigation.navigate('Image', {image})
    }

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => onItemClick(image)}
        >
            <Image style={styles.image} source={{uri: image}}/>
            <Text>Author: {author}</Text>
            <Text style={styles.title}>Description: {description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 4,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 10,
    },
    image: {
        height: 300,
        flex: 1,
        width: null}
});

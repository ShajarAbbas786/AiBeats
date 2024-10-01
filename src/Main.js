import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Features from './Features';
import Library from './Library';
import Profile from './Profile';

// Import your custom icons
import favouriteIcon from '../assets/favourite.png';
import homeIcon from '../assets/Home.png';
import libraryIcon from '../assets/Library.png';
import profileIcon from '../assets/profile.png';

const Main = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource;

                    // Set the iconSource based on the route name
                    if (route.name === 'Home') {
                        iconSource = homeIcon;
                    } else if (route.name === 'Features') {
                        iconSource = favouriteIcon;
                    } else if (route.name === 'Library') {
                        iconSource = libraryIcon;
                    } else if (route.name === 'Profile') {
                        iconSource = profileIcon;
                    }

                    // Return the custom icon component
                    return <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} />;
                },
                headerShown: false, // This hides the navigation header
            })}
            
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                activeBackgroundColor: '#151515',
                inactiveBackgroundColor: '#151515',
                labelStyle: { fontSize: 14 },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Features" component={Features} />
            <Tab.Screen name="Library" component={Library} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default Main;
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { Heart, Home, Search, SquarePen, UserRound } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Search color={color} size={24} />,
        }}
      />

      {/* modal */}
      <Tabs.Screen
        name="memo"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <SquarePen color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="heart"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Heart color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <UserRound color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});

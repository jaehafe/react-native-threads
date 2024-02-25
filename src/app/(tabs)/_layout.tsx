import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { Stack, Tabs, useNavigation, useRouter } from 'expo-router';
import { Heart, Home, Search, SquarePen, UserRound } from 'lucide-react-native';
import Colors from '@/src/constants/Colors';

export default function TabLayout() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const router = useRouter();

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
          headerTitle: '새로운 스레드',
          tabBarIcon: ({ color }) => <SquarePen color={color} size={24} />,
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            router.navigate('(modal)/new-thread');
          },
        })}
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

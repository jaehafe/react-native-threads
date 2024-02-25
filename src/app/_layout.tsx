import * as React from 'react';
import { Text, TouchableOpacity, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Bell, ChevronLeft } from 'lucide-react-native';

import ThreadsContextProvider from '../contexts/thread-context';
import Splash from '../components/Splash';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoading = () => setIsLoading(false);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoading ? (
        <Splash onLoading={onLoading} />
      ) : (
        <ThreadsContextProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen
              name="(modal)/new-thread"
              options={{
                headerTitle: '새로운 스레드',
                presentation: 'modal',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Text>취소</Text>
                  </TouchableOpacity>
                ),
              }}
            />

            <Stack.Screen
              name="thread-details"
              options={{
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <ChevronLeft color={'black'} />
                  </TouchableOpacity>
                ),
                headerTitle: '스레드',
                headerRight: () => <Bell color={'black'} />,
                presentation: 'card',
              }}
            />
          </Stack>
        </ThreadsContextProvider>
      )}
    </ThemeProvider>
  );
}

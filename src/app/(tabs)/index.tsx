import * as React from 'react';
import { Platform, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useThreadContext } from '@/src/contexts/thread-context';
import ThreadItem from '@/src/components/ThreadItem';

export default function Threads() {
  const animationRef = React.useRef<Lottie>(null);
  const { threads } = useThreadContext();
  console.log('threads>>', threads);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={'transparent'}
            onRefresh={() => {
              animationRef.current?.play();
            }}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require('../../../assets/lottie-animations/threads.json')}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: 'center' }}
        />

        {threads.map((thread) => {
          return <ThreadItem key={thread.id} thread={thread} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          書体やレイアウトなどを確認する他に用います。
          本文ようなので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, buttom: 'auto' }}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justfyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },

});

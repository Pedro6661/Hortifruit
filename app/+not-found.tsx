import { Link, Stack } from 'expo-router';
<<<<<<< HEAD
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
=======

import { Text } from 'react-native';

import { Container } from '~/components/Container';
>>>>>>> 2503c8c (a)

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
<<<<<<< HEAD
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
=======
      <Container>
        <Text className={styles.title}>{"This screen doesn't exist."}</Text>
        <Link href="/" className={styles.link}>
          <Text className={styles.linkText}>Go to home screen!</Text>
        </Link>
      </Container>
>>>>>>> 2503c8c (a)
    </>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
=======
const styles = {
  title: `text-xl font-bold`,
  link: `mt-4 pt-4`,
  linkText: `text-base text-[#2e78b7]`,
};
>>>>>>> 2503c8c (a)

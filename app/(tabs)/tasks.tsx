import { Text, View } from '@/components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <TouchableOpacity 
        style={styles.btn}
        onPress={() => router.push('/task_create') }
      >
          <Text style={styles.btntext}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#070A52',
    width: 50,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  btntext: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 2,
    textAlign: 'center'
  }
});

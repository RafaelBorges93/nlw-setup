import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <View className='flex items-center justify-center gap-5'>
      <Text className='text-zinc-400 text-base text-center'>
        Você ainda não está monitorando nenhum hábito.{' '}
      </Text>
      <Text 
        className='bg-green-500 p-5 rounded-lg text-white text-base active:text-gray-500 uppercase'
        onPress={() => navigate('new')}
        >
        Cadastre aqui
      </Text>
    </View>
  )
}
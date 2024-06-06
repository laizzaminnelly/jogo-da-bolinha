import {View, Image} from 'react-native'
import {styles} from './styles'

type Props = {
  posX: number
}

export function Pig({posX}: Props){
  return(
    <View style={[styles.container, {bottom:posX}]}>
     <Image source={require('./pig.png')} style={{width:60, height:70, marginTop:-100,}}/>
    </View>
  )
}
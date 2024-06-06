import {View, Image} from 'react-native'
import {styles} from './styles'

type Props = {
  posY: number
}

export function Boneca({posY}: Props){
  return(
    <View style={[styles.container, {bottom:posY}]}>
     <Image source={require('./boneca.png')} style={{width:70, height:120, marginLeft:100, marginTop:-220,}}/>
    </View>
  )
}
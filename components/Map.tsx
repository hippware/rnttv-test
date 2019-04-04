import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const Map = ({
    params,
}) => {
    const [color, setColor] = useState('red');
    return (
        <View style={{flex: 1, backgroundColor: color}}>
            {/* <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                onPress={() => setColor(color === 'red' ? 'white' : 'red')}
            >
                <Text>Click to Change Color</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={{height: 100, width: 200, right: 5, borderWidth: 1, backgroundColor: 'white'}}
                onPress={() => Actions.friends()}
            >
                <Text>Click to toggle bottom view</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Map;

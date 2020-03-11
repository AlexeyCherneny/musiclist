import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import {get} from 'lodash';

const Libraries = ({library}) => {
  if (!library) {
    return null;
  }

  console.log('library: ', library);
  return (
    <View>
      {library.tracks.map((track, i) => {
        console.log('ewfwef: ', get(track, 'media.mp3.url'));
        return (
          <TouchableOpacity
            key={i}
            style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Video audioOnly source={{uri: get(track, 'media.mp3.url')}} />
            <Text>{get(track, 'title', '')}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Libraries;

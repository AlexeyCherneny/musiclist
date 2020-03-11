import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {get} from 'lodash';

const Libraries = ({handleLibraryPress, isLoading, libraries}) => {
  if (isLoading) {
    return null;
  }

  return (
    <View>
      {libraries.map(library => {

        return (
          <TouchableOpacity
            key={library.id}
            onPress={handleLibraryPress(library.id)}
            style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: get(library, 'cover.url', '')}}
              style={{height: 40, width: 40, marginRight: 10}}
            />
            <Text>{get(library, 'title', '')}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Libraries;

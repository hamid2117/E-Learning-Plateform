import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import ImagePicker from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
​
import {Colors} from 'react-native/Libraries/NewAppScreen';
​
export default function NationalIDCard({navigation}) {
  const [stateC, setStateC] = useState({
    visibility: false,
    DateDisplay: 'Enter Expiry Date',
  });
​
  const [state, setState] = useState({
    image: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  });
​
  const chooseImage = () => {
    let options = {
      title: 'Select Image',
​
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);
​
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
​
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));
        // console.log('response', JSON.stringify(response));
        setState({
          image: response, //photo : response
          fileData: response.data,
          fileUri: response.uri,
        });
        console.log(response);
        // console.log(state.image );
      }
    });
  };
​
  const renderFileData = () => {
    if (state.fileData) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + state.fileData}}
          style={styles.images}
        />
      );
    } else {
      return (
        <View style={styles.iconStyle}>
          <IconAD name={'upload'} size={150} color={'#707070'} />
        </View>
      );
    }
  };
​
  // fetch('https://mtechubregistration.herokuapp.com/api/v1/nationalidimg/', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     userId: '61375f2580d60e0016b2a326',
  //   }),
  // });
​
  const createFormData = (image, body) => {
    const data = new FormData();
​
    data.append('image ', {
      name: image.fileName,
      type: image.type,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
    });
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
    return data;
  };
​
  const handleUploadPhoto = () => {
    fetch('https://mtechubregistration.herokuapp.com/api/v1/nationalidimg/', {
      method: 'POST',
      body: createFormData(state.image, {userId: '61375f2580d60e0016b2a326'}),
    })
      .then(response => response.text())
      .then(response => {
        console.log('Upload Success', response);
        alert('Upload Success!');
        setState({image: null});
        pressHandlerContinue();
      })
      .catch(error => {
        console.log(state.image);
        console.log('upload error', error);
        alert('Upload failed!');
      });
​
    /*<---For sending Expiry Date--->*/
    //   async function getUser() {
    //     try {
    //       const response = await axios.post(
    //         'https://mtechubregistration.herokuapp.com/api/v1/profile',
    //         stateC.DateDisplay,
    //       );
    //       console.log(response);
    //       console.log(response.status);
​
    //       navigation.navigate('NationalIDCard');
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   getUser();
  };
​
  /*<---Calendar Functions--->*/
  const handleConfirm = date => {
    setStateC({DateDisplay: date.toString()});
  };
​
  const onPressCancel = () => {
    setStateC({visibility: false});
  };
  const onPressButton = () => {
    setStateC({visibility: true});
  };
  const pressHandlerContinue = () => {
    navigation.navigate('Welcome');
  };
​
​
​
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          
          <Text style={styles.title}>Add National ID card</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {renderFileData()}
        </View>
​
        <View style={styles.btnParentSection}>
          <TouchableOpacity onPress={chooseImage} style={styles.btnSection}>
            <Text style={styles.btnText}>Choose File</Text>
          </TouchableOpacity>
​
          <TouchableOpacity
            onPress={onPressButton}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingLeft: 10,
              width: '80%',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <IconSLI name="calendar" size={20} color="#6F6F6F" />
            <Text
              style={{
                height: 50,
                width: '95%',
                textAlignVertical: 'center',
                color: '#707070',
                padding: 15,
              }}>
              {stateC.DateDisplay}
            </Text>
            <DateTimePickerModal
              isVisible={stateC.visibility}
              onConfirm={handleConfirm}
              onCancel={onPressCancel}
              mode="date"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={handleUploadPhoto}
            style={{
              backgroundColor: '#FD941E',
              height: 50,
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>
              CONTINUE TO HOME
            </Text>
          </TouchableOpacity>
        </View>
​
​
        
      </View>
    </Fragment>
  );
}
​
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
​
  images: {
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnParentSection: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 30,
  },
  btnSection: {
    width: '80%',
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
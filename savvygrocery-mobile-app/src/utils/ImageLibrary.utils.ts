import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';

export const launchCamera = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = {uri: response.uri};
      console.log('response', JSON.stringify(response));
      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri,
      });
    }
  });
};

export const launchDeviceImageLibrary = async () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const response = await launchImageLibrary(options);
  return response;

  // ImagePicker.launchImageLibrary(options, response => {
  //   console.log(JSON.stringify(response));
  //   // if (response.didCancel) {
  //   //   console.log('User cancelled image picker');
  //   // } else if (response.error) {
  //   //   console.log('ImagePicker Error: ', response.error);
  //   // } else if (response.customButton) {
  //   //   console.log('User tapped custom button: ', response.customButton);
  //   //   alert(response.customButton);
  //   // } else {
  //   //   const source = {uri: response.uri};
  //   //   console.log('response', JSON.stringify(response));
  //   //   this.setState({
  //   //     filePath: response,
  //   //     fileData: response.data,
  //   //     fileUri: response.uri,
  //   //   });
  //   // }
  // });
};

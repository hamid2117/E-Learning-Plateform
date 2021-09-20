import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, TextInput,KeyboardAvoidingView, ScrollView, Picker, TouchableOpacity, ImagePickerIOS, Modal, Button, Alert } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPhoneCodeSelect from "react-native-phone-code-select";
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary,showImagePicker} from 'react-native-image-picker';
import colors from '../constants/colors';
import { BottomSheet } from 'react-native-btr';
export default function Register({navigation}) {
    const [value, setValue] = React.useState('first');
    //fields
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [cityName,setCityName]=useState();
    const [email,setEmail]=useState();
    const [phoneNo,setPhoneNo]=useState();
    const [pincode,setPincode]=useState();
    const [gender,setGender]=useState('Male');
    const [birthdate, setBirthdate] = useState('');
    //fields errors
    const [firstNameError,setFirstNameError]=useState(null);
    const [lastNameError,setLastNameError]=useState(null);
    const [cityNameError,setCityNameError]=useState(null);
    const [emailError,setEmailError]=useState(null);
    const [phoneNoError,setPhoneNoError]=useState(null);
    const [pincodeError,setPincodeError]=useState(null);
    const [birthdateError, setBirthdateError] = useState(null);
    const [visiblity,setVisibility]=useState(null);
    const [modelVisibility,setmodelVisibility]=useState(null);
    const[imageFile,setImageFile]=useState(null)
    const [ImageSource,setImageSource]=useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg');
    const [visible, setVisible] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState({"code": "PK", "dial_code": "+92", "flag": "🇦🇦", "name": "Pakistan"});
    const handleDateSelected=(date)=>
    {
        var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        setBirthdate(selected.toString());
    }
    function selectFromGallery(){
        setmodelVisibility(false);
        let options = {
            storageOptions: {
              skipBackup: true
            }
          };
        launchImageLibrary(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else{
              setImageFile(response.assets[0])
                setImageSource(response.assets[0].uri);
            }
          });
    }
    function selectFromCamera() {
        setmodelVisibility(false);
        let options = {
          title: 'You can choose one image',
          maxWidth: 256,
          maxHeight: 256,
          storageOptions: {
            skipBackup: true
          }
        };
        launchCamera(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else {
              setImageFile(response.assets[0])
              setImageSource(response.assets[0].uri);
            }
          });
      }
      function ValidateFirstName(value)
      {
          setFirstName(value)
          if(value.length==0)
          {
            setFirstNameError("First Name Required")
          }
          else
        {
            setFirstNameError(null)
        }
      }
      function ValidateLastName(value)
      {
        setLastName(value)
        if(value.length==0)
        {
          setLastNameError("Last Name Required")
        }
        else
        {
            setLastNameError(null)
        }
      }
      function ValidatePhoneNo(value)
      {
          setPhoneNo(value)
        if(value.length==0)
        {
          setPhoneNoError("Phone No Required")
        }
        else
        {
            setPhoneNoError(null)
        }
      }
      function ValidateCity(value)
      {
          setCityName(value)
        if(value.length==0)
        {
          setCityNameError("City Required")
        }
        else
        {
            setCityNameError(null)
        }
      }
      function validateEmail(value)
      {
        setEmail(value)
        if(value.length==0)
        {
          setEmailError("Email Required")
        }
        else if(!(value.includes("@")&& value.includes(".com")))
        {
            setEmailError("Invalid Email ")
        }
        else
        {
            setEmailError(null)
        }
      }
      function ValidateBirthdate(value)
      {
          setBirthdate(value)
        if(value.length==0)
        {
          setBirthdateError("Birthdate Required")
        }
        else
        {
            setBirthdateError(null)
        }
      }
      function ValidatePincode(value)
      {
          setPincode(value)
          if(value.length==0)
        {
          setPincodeError("Pin Required")
        }
        else
        {
            setPincodeError(null)
        }
      }
      function signUp()
      {
        UploadImage()
      }
  
    return (
        <ScrollView>
        <KeyboardAvoidingView>
            <View >
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:21,marginBottom:22,marginTop:35}}>REGISTER</Text>
            <TouchableOpacity onPress={()=>setmodelVisibility(true)}>
                  <Image source={
               {uri:ImageSource}
                } style={{height:65,width:65,borderRadius:40,marginBottom:17}}/>
            </TouchableOpacity>
            <BottomSheet
                visible={modelVisibility}
                onBackButtonPress={()=>setmodelVisibility(false)}
                onBackdropPress={()=>setmodelVisibility(false)} 
                onCancel={()=>setmodelVisibility(false)}>
                <View style={{backgroundColor:'white',padding:15}}>
                <TouchableOpacity onPress={selectFromCamera}>
                <Text style={{fontSize:18,padding:20,borderBottomWidth:1,borderColor:'grey'}}>Capture from Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selectFromGallery}>
                <Text style={{fontSize:18,padding:20}}>Choose From Gallery</Text>
                </TouchableOpacity>
                </View>
            </BottomSheet>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput placeholder="First Name" value={firstName} onChangeText={value=>ValidateFirstName(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{firstNameError}</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color={"grey"}/>
                <TextInput placeholder="Last Name" value={lastName} onChangeText={value=>ValidateLastName(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{lastNameError}</Text>
            <TouchableOpacity onPress={()=>setVisibility(true)}>
            <View style={styles.inputContainer}>
            <DateTimePickerModal
            isVisible={visiblity}
            onConfirm={(date)=>handleDateSelected(date)}
            onCancel={()=>setVisibility(false)}></DateTimePickerModal>
                <Icon name="calendar" size={20} color={"grey"}/>
                <TextInput editable={false} value={birthdate} placeholder="Birthday" style={styles.input}/>
            </View>
            </TouchableOpacity>
            <Text style={styles.error}>{birthdateError}</Text>
            <View style={styles.inputContainer}>
                <Icon name="home" size={20} color={"grey"}/>
                <TextInput placeholder="City" value={cityName} onChangeText={value=>ValidateCity(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{cityNameError}</Text>
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color={"grey"}/>
                <TextInput placeholder="Email" keyboardType="email-address" value={email} onChangeText={value=>validateEmail(value)} style={styles.input}/>
            </View>
            <Text style={styles.error}>{emailError}</Text>
            <View style={[styles.inputContainer,{width:'105%'}]}>
            <TouchableOpacity
        onPress={() => setVisible(true)} style={{justifyContent:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Text >{selectedCountry.dial_code}</Text>
                <Image source={require('../assets/images/arrowdown.png')}  style={{marginLeft:10,marginTop:5,marginRight:5}}></Image>
                </View>
           </TouchableOpacity>
           <View style={{justifyContent:'center'}}>
            <TextInput placeholder="Phone No" value={phoneNo} onChangeText={value=>ValidatePhoneNo(value)} keyboardType="number-pad"  />
            </View>
            </View>
            <Text style={styles.error}>{phoneNoError}</Text>
         <RNPhoneCodeSelect
            visible={visible}
            onDismiss={() => setVisible(false)}
            onCountryPress={(country) => {
              setSelectedCountry(country)}}
            primaryColor="#F04A4A"
            secondaryColor="#000000"
            buttonText="Ok"
          />    
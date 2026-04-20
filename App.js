import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function App() {
    const [scannedData, setScannedData] = useState('');
    const [torchOn, setTorchOn] = useState(false);
    const cameraRef = useRef(null);

    const handleBarCodeRead = (event) => {
        const { data } = event;
        setScannedData(data);
        Alert.alert('QR Code Scanned', `Data: ${data}`);
    };

    const toggleTorch = () => {
        setTorchOn(!torchOn);
    };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
                flashMode={torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                onBarCodeRead={handleBarCodeRead}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}  
            />
            <View style={styles.controlsContainer}>
                <Button title={torchOn ? 'Turn Off Torch' : 'Turn On Torch'} onPress={toggleTorch} />
                <Text style={styles.scannedData}> {scannedData ? `Scanned: ${scannedData}` : 'Scan a QR code'} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    controlsContainer: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    scannedData: {
        marginTop: 15,
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
});
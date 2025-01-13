import React from 'react';
import QRCode from 'react-qr-code';

function App() {
    return (
        <QRCode 
            value="https://example.com" 
            bgColor="#ffffff" 
            fgColor="#333333" 
            size={150} 
        />
    );
}
export default App;

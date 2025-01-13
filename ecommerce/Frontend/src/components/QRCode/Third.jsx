import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

function App() {
    const canvasRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, 'https://example.com', {
            width: 200,
            color: {
                dark: '#000', // Dark modules
                light: '#fff', // Light background
            },
        });
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}
export default App;

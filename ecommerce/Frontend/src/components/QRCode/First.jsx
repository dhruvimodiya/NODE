import React, { useRef } from 'react';
import { QRCode } from 'react-qrcode-logo';
import html2canvas from 'html2canvas';

function App() {
    const qrRef = useRef();

    const handleDownload = () => {
        html2canvas(qrRef.current).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qrcode.png';
            link.click();
        });
    };

    return (
        <>
        <div className="flex justify-center items-center ">
            <div ref={qrRef}>
                <QRCode
                    value="https://example.com"
                    size={250}
                    qrStyle="dots"
                    bgColor="#F7F9FB"
                    logoImage="https://example.com/logo.png"
                    logoWidth={60}
                    logoHeight={60}
                    eyeRadius={[
                        { outer: 15, inner: 5 },
                        { outer: 15, inner: 5 },
                        { outer: 15, inner: 5 },
                    ]}
                />
            </div>
        </div>
            <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Download QR Code
            </button>
            </>
    );
}

export default App;

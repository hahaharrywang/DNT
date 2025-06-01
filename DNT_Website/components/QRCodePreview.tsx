import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodePreviewProps {
  url?: string;
}

const QRCodePreview = ({ url }: QRCodePreviewProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'http://localhost:3000');
        const qrDataUrl = await QRCode.toDataURL(currentUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#0369a1',
            light: '#ffffff'
          }
        });
        setQrCodeUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, [url]);

  if (!qrCodeUrl) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <div className="text-center">
        <img src={qrCodeUrl} alt="QR Code for mobile preview" className="mx-auto" />
        <p className="text-xs text-gray-600 mt-2">Scan for mobile preview</p>
      </div>
    </div>
  );
};

export default QRCodePreview; 
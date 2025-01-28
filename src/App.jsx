import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x2145a0,
      color2: 0xe7b9d0,  
      backgroundColor: 0xffffff
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <div
        ref={vantaRef}
        style={{
          position: 'absolute',
          zIndex: 0,
          marginTop: '5%',
          left: 0,
          right: 0,
          width: '100%',
          height: '80%',
        }}
      />
    </div>
  );
}

export default App;
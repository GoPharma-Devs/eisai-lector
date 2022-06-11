import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Logo from './img/logo.png';
import Molecula from './img/molecule.png'
const App = () => {
  const [data, setData] = useState(' ');

  return (
    <>
      <div className='lector'>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              setTimeout(() => {
                setData(' ');
              }, 6000);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{
            display: 'none',
          }}
        />
      </div>
      <div className='pantalla'>
      
        <div className='contenedor'>
        <img src={Logo} className="logo" alt='logo' />
          <div className="textos">
          <h1>¡BIENVENIDO!</h1>
          <p className='nombre'>{data}</p>
         </div>
        <img src={Molecula} className="molecula" alt='logo' />

        </div>
      </div>
    </>
  );
};

export default App;

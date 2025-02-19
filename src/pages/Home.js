import React, { useState } from 'react';
import CameraComponent from '../components/CameraComponent';
import FormComponent from '../components/FormComponent';
import { processImage } from '../services/deepseek';
import { supabase } from '../services/supabase';

const Home = () => {
  const [data, setData] = useState(null);

  const handleCapture = async (imageSrc) => {
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const extractedData = await processImage(blob);
    setData(extractedData);
  };

  const handleSubmit = async (formData) => {
    const fullData = { ...data, ...formData };
    const { error } = await supabase.from('registros').insert([fullData]);
    if (error) {
      console.error('Error al guardar en Supabase:', error);
    } else {
      alert('Datos guardados correctamente');
    }
  };

  return (
    <div>
      <h1>Registro con INE</h1>
      <CameraComponent onCapture={handleCapture} />
      {data && <FormComponent data={data} onSubmit={handleSubmit} />}
    </div>
  );
};

export default Home;
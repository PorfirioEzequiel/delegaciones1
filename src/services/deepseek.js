import axios from 'axios';

const DEEPSEEK_API_KEY = 'sk-0257b92d71114f6c9ebdec56afc82f8e';
const DEEPSEEK_API_URL = 'https://api.deepseek.com';

// sk-d5ccdbbbc4f24d318c973e1f8936223e

export const processImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(DEEPSEEK_API_URL, formData, {
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Retorna los datos extraídos
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    return null;
  }
};
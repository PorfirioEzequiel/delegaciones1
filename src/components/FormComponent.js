import React from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = ({ data, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        defaultValue={data.nombre}
        {...register('nombre', { required: true })}
      />
      <input
        type="text"
        placeholder="Apellido Paterno"
        defaultValue={data.apellido_paterno}
        {...register('apellido_paterno', { required: true })}
      />
      <input
        type="text"
        placeholder="Apellido Materno"
        defaultValue={data.apellido_materno}
        {...register('apellido_materno', { required: true })}
      />
      <input
        type="text"
        placeholder="CURP"
        defaultValue={data.curp}
        {...register('curp', { required: true })}
      />
      <input
        type="text"
        placeholder="Dirección"
        defaultValue={data.direccion}
        {...register('direccion', { required: true })}
      />
      <input
        type="text"
        placeholder="Sección"
        defaultValue={data.seccion}
        {...register('seccion', { required: true })}
      />
      <input
        type="text"
        placeholder="Clave Electoral"
        defaultValue={data.clave_electoral}
        {...register('clave_electoral', { required: true })}
      />
      <input
        type="text"
        placeholder="Teléfono"
        {...register('telefono', { required: true })}
      />
      <input
        type="email"
        placeholder="Correo"
        {...register('correo', { required: true })}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormComponent;
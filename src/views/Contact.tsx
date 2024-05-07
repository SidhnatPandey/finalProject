import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@mui/material';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string().required(),
  name: yup.string().required(),
  subject: yup.string().required(),
});

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  return (
    <>
      <h1>Contact</h1>
      <p>This is the contact page</p>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
        <Input type="text" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <Input type="text" {...register("subject")} />
        {errors.subject && <span>{errors.subject.message}</span>}
        <Input type="text" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
        <button type="submit">Submit</button>
      </form>   */}
    </>
  )
}

export default Contact
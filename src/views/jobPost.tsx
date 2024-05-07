import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@mui/material/Input';

// Define Yup schema
const schema = yup.object().shape({
  address: yup.string().required(),
  company: yup.string().required(),
  description: yup.string().required(),
  email: yup.string().email().required(),
  experience: yup.string().required(),
  industry: yup.array().of(yup.string()).required(),
  jobType: yup.string().required(),
  lastDate: yup.date().required(),
  lastdate: yup.date().required(),
  location: yup.object().shape({
    type: yup.string().required(),
    coordinates: yup.array().of(yup.number()).required(),
  }),
  minEducation: yup.string().required(),
  positions: yup.number().required(),
  postingDate: yup.date().required(),
  postingdate: yup.date().required(),
  salary: yup.number().required(),
  slug: yup.string().required(),
  title: yup.string().required(),
});

function JobForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) // Integrate Yup schema with react-hook-form
  });

  // Handle form submission
  const onSubmit = (data: unknown) => {
    console.log(data); // Log form data on submit
  };

  return (
    <>
    <h1>Job Post Form</h1>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      
      <Input type="text" {...register("address")} />
      {errors.address && <span>{errors.address.message}</span>}
      
      <Input type="text" {...register("company")} />
      {errors.company && <span>{errors.company.message}</span>}
      
      <Input type="text" {...register("description")} />
      {errors.description && <span>{errors.description.message}</span>}
      
      <Input type="text" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <button type="submit">Submit</button>
    </form> */}
    </>
  );
}

export default JobForm;

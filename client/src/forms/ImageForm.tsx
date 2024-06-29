import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import type { ImageFormValues } from '../types/helpers'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
  url: Yup.string().required('Field is required'),
})

interface ImageFormProps {
  submitFunction: (data: ImageFormValues) => void
  defaultValues?: {
    title?: string
    description?: string
    url?: string
  }
}

export const ImageForm: React.FC<ImageFormProps> = ({ submitFunction, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      title: defaultValues?.title || '',
      description: defaultValues?.description || '',
      url: defaultValues?.url || '',
    },
  })
  return (
    <main>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input {...register('title')} type="text" placeholder="Image Title" />
        {errors.title && <p>{errors.title.message}</p>}
        <input {...register('description')} type="text" placeholder="Image Description" />
        {errors.description && <p>{errors.description.message}</p>}
        <input {...register('url')} type="text" placeholder="Image URL" />
        {errors.url && <p>{errors.url.message}</p>}
        <button>Add image</button>
      </form>
    </main>
  )
}

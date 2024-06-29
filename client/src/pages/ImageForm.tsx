import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'

interface ImageForm {
  title: string
  description: string
  url: string
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
  url: Yup.string().required('Field is required'),
})

export const ImageForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const submitForm = (data: ImageForm) => {
    console.log(data)
  }

  return (
    <main>
      <form onSubmit={handleSubmit(submitForm)}>
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

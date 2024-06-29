import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import type { SearchFormValues } from '../types/helpers'
import { useImagesAPI } from '../context/useImagesAPI'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  query: Yup.number().required('Field is required'),
})

export const SearchForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })
  const { api } = useImagesAPI()
  const navigate = useNavigate()

  const onSubmit = async (data: SearchFormValues) => {
    const imageQueryRequest = await api?.getImage({ id: data.query })
    if (imageQueryRequest?.status === 200) {
      navigate('/view', { state: { id: imageQueryRequest.data.id } })
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('query')} type="number" placeholder="Image Title" />
        {errors.query && <p>{errors.query.message}</p>}
        <button>Search by ID</button>
      </form>
    </main>
  )
}

import * as yup from 'yup';
import { ratingValidationSchema } from 'validationSchema/ratings';

export const mp3ValidationSchema = yup.object().shape({
  title: yup.string().required(),
  genre: yup.string().required(),
  file_path: yup.string().required(),
  library_id: yup.string().nullable().required(),
  rating: yup.array().of(ratingValidationSchema),
});

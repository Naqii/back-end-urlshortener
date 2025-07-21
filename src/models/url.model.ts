import mongoose, { Schema } from 'mongoose';
import * as Yup from 'yup';

export const URL_MODEL_SHORTENER = 'Url';

export const urlDTO = Yup.object({
  originalUrl: Yup.string().required(),
  customAlias: Yup.string(),
  newUrl: Yup.string(),
});

export type TypeUrl = Yup.InferType<typeof urlDTO>;

interface Url extends TypeUrl {}

const UrlSchema = new Schema<Url>(
  {
    originalUrl: {
      type: Schema.Types.String,
      required: true,
    },
    customAlias: {
      type: Schema.Types.String,
    },
    newUrl: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

const UrlModel = mongoose.model(URL_MODEL_SHORTENER, UrlSchema);

export default UrlModel;

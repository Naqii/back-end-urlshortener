import dotenv from 'dotenv';

dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URL || '';

export const BASE_URL: string = process.env.BASE_URL || '';

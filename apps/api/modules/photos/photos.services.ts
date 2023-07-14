import { SlideEntity } from '@/utils/types/horse';
import { AddPhotoEntity } from '../../types';
import { api_client } from '../../api_client';

export const addPhoto = (photo: AddPhotoEntity) => api_client.post('/api/photo', photo);

export const fetchPhotos = (horseName: string) => api_client.get<SlideEntity[]>(`/api/photo?name=${horseName}`);

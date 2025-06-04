import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Camera, X, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { DeedCategory } from '../../types';
import { useKarma } from '../../context/KarmaContext';

interface DeedFormData {
  title: string;
  description: string;
  category: DeedCategory;
  karmaPoints: number;
  images?: FileList;
}

const DeedForm: React.FC = () => {
  const { addDeed } = useKarma();
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<DeedFormData>();
  
  const onSubmit = (data: DeedFormData) => {
    // In a real app, we would upload the images and get URLs
    const imageUrls = data.images?.length 
      ? ['https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'] 
      : undefined;
      
    addDeed({
      title: data.title,
      description: data.description,
      category: data.category,
      karmaPoints: data.karmaPoints || 10, // Default to 10 if not specified
      images: imageUrls,
    });
    
    reset();
  };
  
  return (
    <motion.div 
      className="card mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Share Your Good Deed</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="input"
              placeholder="What good deed did you do?"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-error-600">{errors.title.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              className="input"
              placeholder="Describe your good deed..."
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-error-600">{errors.description.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="input"
              {...register('category', { required: 'Category is required' })}
            >
              {Object.values(DeedCategory).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-error-600">{errors.category.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="karmaPoints" className="block text-sm font-medium text-gray-700 mb-1">
              Karma Points (optional)
            </label>
            <input
              id="karmaPoints"
              type="number"
              className="input"
              placeholder="10"
              min={1}
              max={100}
              {...register('karmaPoints', { 
                valueAsNumber: true,
                min: { value: 1, message: 'Minimum 1 point' },
                max: { value: 100, message: 'Maximum 100 points' }
              })}
            />
            <p className="mt-1 text-xs text-gray-500">
              We'll review and adjust karma points if necessary.
            </p>
            {errors.karmaPoints && (
              <p className="mt-1 text-sm text-error-600">{errors.karmaPoints.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Photos (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center">
                <Camera className="text-gray-400 mr-2" size={20} />
                <label htmlFor="images" className="cursor-pointer text-primary-600 font-medium">
                  Upload photos
                </label>
                <input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  {...register('images')}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                JPG, PNG or GIF up to 5MB
              </p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              <Upload size={16} className="mr-1" />
              Share Deed
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default DeedForm;
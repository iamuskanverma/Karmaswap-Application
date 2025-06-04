import React from 'react';
import { useForm } from 'react-hook-form';
import { ShoppingBag, X, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { OfferCategory } from '../../types';
import { useKarma } from '../../context/KarmaContext';

interface OfferFormData {
  title: string;
  description: string;
  category: OfferCategory;
  karmaPointsCost: number;
  image?: FileList;
}

const OfferForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addOffer } = useKarma();
  const { register, handleSubmit, formState: { errors } } = useForm<OfferFormData>();
  
  const onSubmit = (data: OfferFormData) => {
    // In a real app, we would upload the image and get a URL
    const imageUrl = data.image?.length 
      ? 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
      : undefined;
      
    addOffer({
      title: data.title,
      description: data.description,
      category: data.category,
      karmaPointsCost: data.karmaPointsCost,
      image: imageUrl,
    });
    
    onClose();
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-xl w-full max-w-md"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Create New Offer</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="input"
                placeholder="What are you offering?"
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
                placeholder="Describe what you're offering..."
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
                {Object.values(OfferCategory).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-error-600">{errors.category.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="karmaPointsCost" className="block text-sm font-medium text-gray-700 mb-1">
                Karma Points Cost
              </label>
              <input
                id="karmaPointsCost"
                type="number"
                className="input"
                placeholder="50"
                min={1}
                {...register('karmaPointsCost', { 
                  required: 'Karma points cost is required',
                  valueAsNumber: true,
                  min: { value: 1, message: 'Minimum 1 point' }
                })}
              />
              {errors.karmaPointsCost && (
                <p className="mt-1 text-sm text-error-600">{errors.karmaPointsCost.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Image (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center">
                  <ShoppingBag className="text-gray-400 mr-2" size={20} />
                  <label htmlFor="image" className="cursor-pointer text-primary-600 font-medium">
                    Upload image
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register('image')}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG or GIF up to 5MB
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                type="button" 
                className="btn-outline"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <Upload size={16} className="mr-1" />
                Create Offer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferForm;
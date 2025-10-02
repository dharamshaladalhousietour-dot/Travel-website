import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockGalleryImages } from '../data/mockData';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Destinations', 'Weddings', 'Events'];
  
  const filteredImages = activeFilter === 'All' 
    ? mockGalleryImages 
    : mockGalleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Destinations: 'bg-blue-500',
      Weddings: 'bg-rose-500',
      Events: 'bg-amber-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of breathtaking destinations, elegant events, 
            and magical moments we've helped create.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-6 mx-1 transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-blue-900 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(image.category)} text-white border-0 px-3 py-1 font-semibold`}>
                    {image.category}
                  </Badge>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                  <Badge className={`${getCategoryColor(selectedImage.category)} text-white border-0 px-3 py-1 font-semibold`}>
                    {selectedImage.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import useFetchAbout from '../hooks/useFetchAbout';
import { useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast"
axios.defaults.withCredentials = true;

const About = () => {
  const { about, loading, error } = useFetchAbout();
  const [formData, setFormData] = useState({
    title: '',
    paragraphs: ['']
  });

  useEffect(() => {
    if (about) {
      setFormData({
        title: about.title,
        paragraphs: about.paragraphs
      });
    }
  }, [about]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index] = value;
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const handleAddParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, '']
    });
  };

  const handleRemoveParagraph = (index) => {
    const newParagraphs = formData.paragraphs.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = about
        ? await axios.put(`${import.meta.env.VITE_SERVER_URL}/about/update`, formData)
        : await axios.post(`${import.meta.env.VITE_SERVER_URL}/about/create`, formData);

      if (response.data.success) {
        toast.success(about ? 'About section updated.' : 'About section created.');
      }
    } catch (error) {
      console.error('Error saving about data:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">About</h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {formData.paragraphs.map((para, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Paragraph {index + 1}:</label>
              <textarea
                value={para}
                onChange={(e) => handleParagraphChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveParagraph(index)}
                className="bg-red-500 text-white py-1 px-2 mt-2 rounded-md hover:bg-red-600"
              >
                Remove Paragraph
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddParagraph}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
          >
            Add Paragraph
          </button>
          <button
            type="submit"
            className="bg-green-500 mx-2 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Save About Section
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;

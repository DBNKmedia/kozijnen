import React from 'react';
import { Save } from 'lucide-react';

type FrameConfig = {
  width: number;
  height: number;
  material: string;
  color: string;
  glazing: string;
};

export default function Configurator() {
  const [config, setConfig] = React.useState<FrameConfig>({
    width: 100,
    height: 100,
    material: 'aluminum',
    color: 'white',
    glazing: 'double',
  });

  const materials = ['aluminum', 'wood', 'pvc'];
  const colors = ['white', 'anthracite', 'black', 'natural'];
  const glazingOptions = ['single', 'double', 'triple'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Configuration submitted:', config);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Window Frame Configurator</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Width (cm)</label>
              <input
                type="number"
                value={config.width}
                onChange={(e) => setConfig({...config, width: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min="30"
                max="300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <input
                type="number"
                value={config.height}
                onChange={(e) => setConfig({...config, height: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                min="30"
                max="300"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Material</label>
              <select
                value={config.material}
                onChange={(e) => setConfig({...config, material: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {materials.map((material) => (
                  <option key={material} value={material}>
                    {material.charAt(0).toUpperCase() + material.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <select
                value={config.color}
                onChange={(e) => setConfig({...config, color: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Glazing</label>
              <select
                value={config.glazing}
                onChange={(e) => setConfig({...config, glazing: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {glazingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)} Glass
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Request Quote
          </button>
        </div>
      </form>
    </div>
  );
}
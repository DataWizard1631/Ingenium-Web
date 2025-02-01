import React from 'react';

export const FormsSection = () => {
  const forms = [
    { 
      id: 1, 
      name: 'Contact Form', 
      submissions: 145, 
      lastSubmission: '2025-02-01'
    },
    { 
      id: 1, 
      name: 'Contact Form', 
      submissions: 145, 
      lastSubmission: '2025-02-01'
    },
    { 
      id: 1, 
      name: 'Contact Form', 
      submissions: 145, 
      lastSubmission: '2025-02-01'
    },
    { 
      id: 1, 
      name: 'Contact Form', 
      submissions: 145, 
      lastSubmission: '2025-02-01'
    },
    // ... more forms
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Forms</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Form
        </button>
      </div>
      
      <div className="space-y-4">
        {forms.map((form) => (
          <div key={form.id} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">{form.name}</h3>
                <p className="text-sm text-gray-300">Last submission: {form.lastSubmission}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-400">{form.submissions}</p>
                <p className="text-sm text-gray-300">Submissions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

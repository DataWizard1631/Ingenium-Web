import React from 'react';
import { Mail, UserCircle, Badge, Edit, Trash2 } from 'lucide-react';

export const MembersSection = () => {
  const members = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      role: 'Admin', 
      status: 'Active',
      enrollmentNo: 'EN2024001',
      imgUrl: '/api/placeholder/150/150'
    },
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      role: 'Admin', 
      status: 'Active',
      enrollmentNo: 'EN2024001',
      imgUrl: '/api/placeholder/150/150'
    },
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      role: 'Admin', 
      status: 'Active',
      enrollmentNo: 'EN2024001',
      imgUrl: '/api/placeholder/150/150'
    },
    // ... more members
  ];

  const handleDelete = (id) => {
    console.log('Delete member:', id);
  };

  const handleEdit = (id) => {
    console.log('Edit member:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Members</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Member
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="relative">
              <img 
                src={member.imgUrl} 
                alt={member.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                  onClick={() => handleEdit(member.id)}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Edit size={16} className="text-blue-400" />
                </button>
                <button 
                  onClick={() => handleDelete(member.id)}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <Trash2 size={16} className="text-red-400" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  member.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-gray-600 text-gray-300'
                }`}>
                  {member.status}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <UserCircle size={16} className="mr-2" />
                  <span className="text-sm">{member.role}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Badge size={16} className="mr-2" />
                  <span className="text-sm">{member.enrollmentNo}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

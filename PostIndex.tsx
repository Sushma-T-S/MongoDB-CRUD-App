// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function PostIndex() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <>
//       <div className="p-3">
//         <h1 className="text-2xl font-bold mb-4">CRUD App</h1>

//         {/* Create Button */}
//         <button className="mb-4 px-4 py-2 font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
//           Create
//         </button>

//         {/* Table Section */}
//         <div className="overflow-x-auto mt-4">
//           <table className="w-full text-sm text-left text-gray-700">
//             <thead className="text-xs uppercase bg-gray-50 text-gray-700">
//               <tr>
//                 <th className="px-6 py-3">ID</th>
//                 <th className="px-6 py-3">Title</th>
//                 <th className="px-6 py-3">Body</th>
//                 <th className="px-6 py-3 w-40">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {posts.map((post) => 
//                 <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200" >
//                   <td className="px-6 py-2 font-medium text-gray-900">{post._id}</td>
//                   <td className="px-6 py-2 text-gray-700">{post.title}</td>
//                   <td className="px-6 py-2 text-gray-700">{post.body}</td>
//                   <td className="px-6 py-2 space-x-1">
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
//                       Edit
//                     </button>
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700">
//                       Show
//                     </button>
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function PostIndex() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/posts").then((res)=>{
//         setPosts(res.data);
//       })
//   });

//   return (
//     <>
//     <div className="p-3">
//       <h1 className="text-2xl font-bold mb-4">CRUD App</h1>

//       {/* Create Button */}
//       <Link 
//       to="/create"
//       className="mb-4 px-4 py-2 font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
//         Create
//       </Link>

//       {/* Table Section */}
//       <div className="overflow-x-auto mt-4">
//         <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
//           <thead className="text-xs uppercase bg-gray-50 text-gray-700">
//             <tr>
//               <th className="px-6 py-3 border-b">ID</th>
//               <th className="px-6 py-3 border-b">Title</th>
//               <th className="px-6 py-3 border-b">Body</th>
//               <th className="px-6 py-3 border-b w-40">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//            {posts.map((post) => 
//                 <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200" >
//                   <td className="px-6 py-2 font-medium text-gray-900">{post._id}</td>
//                   <td className="px-6 py-2 text-gray-700">{post.title}</td>
//                   <td className="px-6 py-2 text-gray-700">{post.body}</td>
//                   <td className="px-6 py-2 flex space-x-1">
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
//                       Edit
//                     </button>
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700">
//                       Show
//                     </button>
//                     <button className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Post {
  _id: string;
  username: string;
  phone: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function PostIndex() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const deletePost = (id: string) => {
    if (confirm("Are you sure?")) {
      axios.delete(`http://localhost:8000/api/posts/${id}`).then(() => {
        setPosts(posts.filter((p) => p._id !== id));
      });
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">CRUD Application</h1>
        <p className="text-center text-gray-600 mb-8">Manage your entries with ease</p>

        {/* Create Button */}
        <div className="flex justify-center mb-8">
          <Link
            to="/create"
            className="px-6 py-3 font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create New Entry
            </span>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
          <div className="text-gray-700">
            <span className="font-semibold">Total Entries:</span> {posts.length}
          </div>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Loading State */}
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-gray-500 mb-4">No entries found</div>
            <Link 
              to="/create"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Create your first entry
            </Link>
          </div>
        ) : (
          /* Card Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      ID: {post._id.substring(0, 6)}...
                    </div>
                    <div className="text-xs text-gray-500">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{post.username}</h2>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-1">Phone:</p>
                    <p className="text-gray-800 font-medium">{post.phone}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-1">Address:</p>
                    <p className="text-gray-700 italic line-clamp-3">
                      {post.address || "No address provided"}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/edit/${post._id}`}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/show/${post._id}`}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200 text-center"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => deletePost(post._id)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

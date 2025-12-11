// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function PostEdit() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const navigate = useNavigate();
//   const {id} = useParams();

//   useEffect(() => {
//     if(id){
//         axios.get("http://localhost:8000/api/posts/" + id).then((res)=>{
//         })
//     }
//   },[id]);

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     axios.put("http://localhost:8000/api/posts" + id, { title:title, body:body })
//       .then(() => navigate("/"));
      
//   }

//   return (
//     <>
//       <Link
//         to="/"
//         className="mb-4 px-4 py-2 font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
//       >
//         Back
//       </Link>

//       <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto">
//         <h1 className="font-bold text-2xl">Edit Post</h1>

//         <div className="grid gap-2">
//           <label htmlFor="title" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed">
//             Title:
//           </label>
//           <input
//             id="title"
//             name="title"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow"
//             placeholder="Enter title"
//             required
//           />
//         </div>

//         <div className="grid gap-2">
//           <label htmlFor="body" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed">
//             Body:
//           </label>
//           <textarea
//             id="body"
//             name="body"
//             onChange={(e) => setBody(e.target.value)}
//             value={body}
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow"
//             placeholder="Enter body"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PostEdit() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/posts/${id}`)
        .then((res) => {
          setUsername(res.data.username);
          setPhone(res.data.phone);
          setAddress(res.data.address || '');
        })
        .catch((err) => {
          console.error("Error fetching post:", err);
        });
    }
  }, [id]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/posts/${id}`, { username, phone, address })
      .then(() => {
        navigate("/");  // Navigate to the homepage after successful update
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        // Optionally, display an error message to the user
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white text-center">Edit Entry</h1>
          </div>
          
          <div className="px-6 py-8">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>

            <form onSubmit={submit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <textarea
                      id="address"
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter address (optional)"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Update Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

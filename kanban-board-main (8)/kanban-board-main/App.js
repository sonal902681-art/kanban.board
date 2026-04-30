// import { useEffect, useState } from "react";
// import API from "./api";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   // GET tasks
//   const getTasks = async () => {
//     const res = await API.get("/");
//     setTasks(res.data);
//   };

//   useEffect(() => {
//     getTasks();
//   }, []);

//   // ADD task
//   const addTask = async () => {
//     if (!title) return;
//     await API.post("/", { title });
//     setTitle("");
//     getTasks();
//   };

//   // MOVE task
//   const moveTask = async (id, status) => {
//     await API.put(`/${id}`, { status });
//     getTasks();
//   };

//   // DELETE task
//   const deleteTask = async (id) => {
//     await API.delete(`/${id}`);
//     getTasks();
//   };

//   return (
//     <div className="container">
//       <h1>🔥 Kanban Board</h1>

//       {/* Input */}
//       <div className="inputBox">
//         <input
//           placeholder="Enter task..."
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>

//       {/* Board */}
//       <div className="board">

//         {/* TODO */}
//         <div className="column">
//           <h2>🟡 Todo</h2>
//           {tasks.filter(t => t.status === "todo").map(t => (
//             <div key={t._id} className="card">
//               {t.title}
//               <div>
//                 <button onClick={() => moveTask(t._id, "inprogress")}>
//                   Move →
//                 </button>
//                 <button onClick={() => deleteTask(t._id)}>
//                   ❌
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* IN PROGRESS */}
//         <div className="column">
//           <h2>🔵 In Progress</h2>
//           {tasks.filter(t => t.status === "inprogress").map(t => (
//             <div key={t._id} className="card">
//               {t.title}
//               <div>
//                 <button onClick={() => moveTask(t._id, "done")}>
//                   Move →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* DONE */}
//         <div className="column">
//           <h2>🟢 Done</h2>
//           {tasks.filter(t => t.status === "done").map(t => (
//             <div key={t._id} className="card">
//               {t.title}
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [lanes, setLanes] = useState([]);

  useEffect(() => {
    API.get("/lanes")
      .then((res) => {
        setLanes(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kanban Board</h1>

      {lanes.length === 0 ? (
        <p>No lanes found</p>
      ) : (
        lanes.map((lane, i) => (
          <div key={i} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
            {lane.title || "Untitled Lane"}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
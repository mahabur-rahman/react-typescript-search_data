import { useState } from "react";
// style
import "./userfind.scss";

const UserFind: React.FC = () => {
  const users = [
    { name: "mahabur", age: 26, designation: "software engineer" },
    { name: "noman", age: 27, designation: "Designer" },
    { name: "sakib", age: 22, designation: "Programmer" },
    { name: "tamim", age: 29, designation: "UX designer" },
    { name: "sakib", age: 45, designation: "writer" },
  ];

  //   state 👍 👍

  const [userLists, setUserLists] = useState<
    { name: string; age: number; designation: string }[] | undefined
  >(users);

  console.log(userLists);

  const [text, setText] = useState("");

  // handleClick
  const handleClick = () => {
    // console.log(text);
    const findUsers =
      userLists && userLists?.length > 0
        ? userLists?.filter((u) => u?.name === text)
        : undefined;
    // console.log(findUsers);
    setUserLists(findUsers);
  };

  return (
    <>
      <div className="main_div">
        <h1>User find</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="search.."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setUserLists(users);
            }}
          />
          <button onClick={handleClick} disabled={!text}>
            Search
          </button>
        </div>

        <div className="body">
          {/* no user  */}
          {userLists && userLists?.length === 0 && (
            <div className="text-danger display-5 my-2 font-bold">
              Users not found !
            </div>
          )}
          {/* if  user has */}
          {userLists &&
            userLists?.length > 0 &&
            userLists?.map((user) => {
              return (
                <div className="mt-5" key={user?.age}>
                  <h3>Name : {user?.name}</h3>
                  <p>Age : {user?.age}</p>
                  <p>Designation :{user?.designation}</p>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default UserFind;

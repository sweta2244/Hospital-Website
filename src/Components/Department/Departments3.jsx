import { useState, useEffect } from "react";


export default function Departments3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
        const json = await response.json();
        setData(json);
        console.log("Fetched Data:", json);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Departments</h1>
      {data ? (
        <ul>
          {data.slice(0,5).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <br/>
      <h2>Second API</h2>
      <Practice/>
      <div>
        <button popoverTarget="modal">open</button>
        <div id="modal" popover="auto">
          <p>iiiiiiiiiiiiiiiiiiiiiii</p>
          <button popoverTarget="modal">close</button>
        </div>
      </div>
    </div>
  );
}

function Practice(){
  const [data1,setData1]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await fetch('#url');
        const json=await response.json();
        setData1(json);
      } catch(error){
        console.error("error:",error);
      }
    };
    fetchData();
  },[])
  return(
    <div>
      {data1?(
        <ul>
          {data1.map((i)=><li key={i.id}>{i.name}</li>)}
        </ul>
      ):(<p>Loading..</p>)}
    </div>
  ) 
}
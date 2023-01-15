import Table from 'react-bootstrap/Table';
import  api from '../helpers/api';
import { useState , useEffect } from 'react';
import FileDownload from 'js-file-download';
import { useNavigate } from 'react-router-dom';
import './LoginForms';
import '../pages/Home';
const TTable = () => {
const [loading, setLoading] = useState(true)
const [ Rows , setRows ]  = useState ([{}])
const isLoggedin = localStorage.getItem("login")
const navigate= useNavigate()
  const handleLogout =(e) =>{
    e.preventDefault();
    localStorage.clear();
    navigate('/Home');
  }
  const fetchData = () => {
    fetch(`http://127.0.0.1:5000/Upload`)
    .then((response) => response.json())
    .then((actualData) => {
      setRows(actualData);
      setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
const download = async (e,x,y)=>{
  e.preventDefault()
  let name=x+y+'.pdf'
    api({
      url:`http://127.0.0.1:5000/download/${name}/`,
      method:"GET",
      responseType:'blob'
    }).then ((res)=>{
      const file = new Blob ([res.data], {type : 'application/pdf' })
      FileDownload(file ,'file.pdf')
    })
  }
return (
    <div >
      {!isLoggedin? (<p>you re not logged in</p>) : (
        <>
      <button onClick={(e)=>{handleLogout(e)}}>Logout</button>
     {loading ? (
         <p>Loading...</p>
      ) : (
        <>
    <Table striped bordered hover>
    <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
          {Rows.map((item, index) => (
          <tr key={index}>
            <td>{item.FirstName}</td>
            <td>{item.LastName}</td>
            <td>{item.Email}</td>
            <td><button onClick={(e)=>{download(e,item.FirstName,item.LastName)}}>Download File</button></td>
          </tr>
        ))}
          </tbody>
        </Table>
        </>
      )
      }
      </>
      )
    }
        </div>
   );
}
export default TTable;

import './AbstractSubmission.css';
import { useState } from 'react';
import api from '../helpers/api';
function AbstractSubmission() {
  const url='/Upload'
  const [FirstName , setFirstName ] = useState ('')
  const [LastName , setLastName ] = useState ('')
  const [Email , setEmail ] = useState ('')
  let myFile
  let file
  const handleFileChange = (e) => {
    myFile = e.target.files[0];
    file = new File([myFile],FirstName+LastName+'.pdf');
  }
function Upload (e){
   const formData = new FormData();
  formData.append('file', file);
fetch('https://sarah-flask.herokuapp.com/upload', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.catch(error => console.error(error));
}
  function submit(e){
    e.preventDefault();
    Upload(e)
    api.post(url,{
      FirstName:FirstName,
      LastName:LastName,
      Email: Email   
  })
    .then (res => {
      console.log(res) 
    })
  }
    return (
      <div> 
      <p>Only files in pdf format are accepted</p>
      <p>The file submitted should be named in this format "firstname_lastname.pdf"</p>
      <form onSubmit={(e)=>submit(e)}>
        <label htmlFor="FirstName">First name:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} id="FirstName" className="FirstName" required/>
        <label htmlFor="LastName">Last name:</label>
        <input type="text"  onChange={(e)=> setLastName(e.target.value)} id="LastName"  name="LastName" required/>
        <label htmlFor="Email">Email:</label>
        <input type="email"  onChange={(e)=> setEmail(e.target.value)} id="Email"  name="Email" required/>
        <input type="file" name="file" id="File" accept=".pdf" onChange={(e) => (handleFileChange(e))} required/>
        <input type="submit" value ="Submit forms"/>
</form>
      </div>
  );
}
    export default AbstractSubmission;


 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
//import { } from '../utils/queries';
import { CREATE_USER } from '../utils/mutations';

const SignUp = () => {
  //const { loading, data } = useQuery(QUERY_TECH);

  //const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    username: 'Username',
    password: 'Password'
  });

  const [validated] = useState(false);

  const handleTech1Change = (e) => {
    setFormData({ ...formData, tech1: e.target.value });
  };
  /*
    const handleTech2Change = (e) => {
      setFormData({ ...formData, tech2: e.target.value });
    };
  */
  let navigate = useNavigate();

  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>

      <h1>Ctrl-Alt-Win</h1>

      < input
        type="text"
        value={formData.tech1}
        onChange={(e) => setFormData({ ...formData, tech1: e.target.value })}
      />
      <br></br>
      < input
        type="text"
        value={formData.tech2}
        onChange={(e) => setFormData({ ...formData, tech2: e.target.value })}
      />
      <br></br>
      < input
        type="text"
        value={formData.tech3}
        onChange={(e) => setFormData({ ...formData, tech3: e.target.value })}
      />
      <br></br>
      < input
        type="text"
        value={formData.tech4}
        onChange={(e) => setFormData({ ...formData, tech4: e.target.value })}
      />
      <br></br>
      < input
        type="text"
        value={formData.tech5}
        onChange={(e) => setFormData({ ...formData, tech5: e.target.value })}
      />
      <br></br>
      <button>Create Account</button>
    </div>

  );
};
export default SignUp;

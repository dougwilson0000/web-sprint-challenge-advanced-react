// write your custom hook here to control your checkout form
import { useState } from 'react'; 


const useForm = (obj) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(true);
    const [values, setValues] = useState(obj);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
  
        return ([values, showSuccessMessage, handleChanges, handleSubmit]);
}

  export default useForm;
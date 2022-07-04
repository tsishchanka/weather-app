import { useCallback, useState } from 'react';

const useForm = (initialFormData: any) => {
  const [data, setData] = useState(initialFormData);

  const handleChange = useCallback((event: any) => {
    setData((state: any) => {
      const { name, value } = event.currentTarget;
      return {
        ...state,
        [name]: value,
      };
    });
  }, []);
  const handleReset = useCallback(() => {
    setData(initialFormData);
  }, []);
  return {data, handleChange, handleReset};
};

export default useForm;

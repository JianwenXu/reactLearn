/**
 * Form 组件
 */
import FieldContext from './FieldContext'
import useForm from './useForm';

const Form = (props) => {
  const { children, onFinish, onFinishFailed, form } = props;

  const [formInstance] = useForm(form);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;
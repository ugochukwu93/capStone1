
import { useForm } from "react-hook-form";
import './Form.css'

export default function App() {
  const { register, handleSubmit } = useForm();

  return (
      <div className="formInput">
          <h4 className="header-head">Get in Touch</h4>
          <p className="header-text">Feel free to drop us a line below</p>
        <form onSubmit={handleSubmit()}>
        <input {...register("firstName")} placeholder="First name" required />
        <input {...register("firstName")} placeholder="Last name" required />
        <textarea {...register("aboutYou")} placeholder="About you"  required/>
        <input type="submit" />
        </form>
      </div>
  );
}

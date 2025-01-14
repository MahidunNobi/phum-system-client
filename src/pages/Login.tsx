import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (userInfo: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId });
      navigate(`/admin/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit"> Submit</Button>
    </form>
  );
};

export default Login;

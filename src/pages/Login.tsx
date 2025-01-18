import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/forms/PHForm";
import PHInput from "../components/forms/PHInput";

const Login = () => {
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
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onsubmit={onSubmit}>
        <PHInput type="text" name="id" label="ID: " />
        <PHInput type="text" name="password" label="Password: " />
        <Button htmlType="submit"> Submit</Button>
      </PHForm>
    </Row>
  );
};

export default Login;

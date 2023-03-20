import { Wrapper, Logo, Title, Form, Input, Button } from "../styles";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "L'username deve contenere almeno 3 caratteri." }),
  password: z
    .string()
    .min(6, { message: "La password deve contenere almeno 6 caratteri." }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <Wrapper>
      <Logo></Logo>
      <Title>LOGIN</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("username")} type="text" placeholder="Username" />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}{" "}
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}{" "}
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

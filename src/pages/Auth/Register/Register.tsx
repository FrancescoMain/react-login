import { Wrapper, Logo, Title, Form, Input, Button } from "../styles";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    username: z
      .string()
      .min(3, { message: "L'username deve contenere almeno 3 caratteri." }),
    email: z
      .string()
      .email({ message: "Inserisci un email valida" })
      .min(5, { message: "L'email deve contenere almeno 5 caratteri" }),
    password: z.string().regex(/^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, {
      message:
        "La password deve contenere almeno un numero e un carattere speciale",
    }),
    confirmPassword: z.string().regex(/^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, {
      message:
        "La password deve contenere almeno un numero e un carattere speciale",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Le password non corrispondono",
    path: ["confirmPassword"],
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
      <Title>REGISTER</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("username")} type="text" placeholder="Username" />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}{" "}
        <Input {...register("email")} type="email" placeholder="Email" />
        {errors.email && (
          <p className="text-danger">{errors.email.message}</p>
        )}{" "}
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}{" "}
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Password"
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}{" "}
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

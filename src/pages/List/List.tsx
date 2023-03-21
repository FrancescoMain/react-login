import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Wrapper } from "../../App.styles";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Form } from "./style";
import Button from "@mui/material/Button";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//ZOD VALIDATION
//Schema
const schema = z.object({
  name: z.string().min(3, { message: "Richiesti 3 caratteri." }),
  calories: z
    .number({ invalid_type_error: "Campo Richiesto" })
    .min(1, { message: "Campo Richiesto" }),
  fat: z
    .number({ invalid_type_error: "Campo Richiesto" })
    .min(1, { message: "Campo Richiesto" }),
  carbs: z
    .number({ invalid_type_error: "Campo Richiesto" })
    .min(1, { message: "Campo Richiesto" }),
  protein: z
    .number({ invalid_type_error: "Campo Richiesto" })
    .min(1, { message: "Campo Richiesto" }),
});

type FormData = z.infer<typeof schema>;

//passiamo a DenseTable (MaterialUi Component), le ROWS con useState
export default function DenseTable() {
  const [rows, setRows] = useState([
    {
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  ]);

  //funzoine di DELETE sul click
  const handleClick = (index: number) => {
    setRows(rows.filter((row) => row != rows[index]));
    // setRows(...newRows);
  };

  //funzioni di HOOK-FORM
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //CREATE ROW ON SUBMIT
  const onSubmit = (data: FieldValues) =>
    setRows([
      ...rows,
      {
        name: data.name,
        calories: data.calories,
        fat: data.fat,
        carbs: data.carbs,
        protein: data.protein,
      },
    ]);

  return (
    <Wrapper>
      {/* TABLE */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell onClick={() => handleClick(index)} align="right">
                  X
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* FORM */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            error={!!errors.name}
            {...register("name")}
            required
            id="outlined-required"
            placeholder="Name"
            helperText={errors?.name?.message}
          />
        </div>
        <div>
          <TextField
            error={!!errors.calories}
            {...register("calories", { valueAsNumber: true })}
            required
            id="outlined-required"
            placeholder="Calories"
            type="number"
            helperText={errors?.calories?.message}
          />
        </div>
        <div>
          <TextField
            {...register("fat", { valueAsNumber: true })}
            required
            id="outlined-required"
            placeholder="Fat"
            type="number"
            error={!!errors.fat}
            helperText={errors?.fat?.message}
          />
        </div>
        <div>
          <TextField
            {...register("carbs", { valueAsNumber: true })}
            required
            id="outlined-required"
            placeholder="Carbs"
            type="number"
            error={!!errors.carbs}
            helperText={errors?.carbs?.message}
          />
        </div>
        <div>
          <TextField
            {...register("protein", { valueAsNumber: true })}
            required
            id="outlined-required"
            placeholder="Protein"
            type="number"
            error={!!errors.protein}
            helperText={errors?.protein?.message}
          />
        </div>
        <Button type="submit" variant="contained">
          CREA
        </Button>{" "}
      </Form>
    </Wrapper>
  );
}

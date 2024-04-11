import { User } from '@/app/models/user';
import * as yup from 'yup';



const requiredString = yup
    .string().
    typeError("Debe ser un texto").
    required('Campo requerido');

const requiredNumber = yup.
    number().
    typeError("Debe ser un número")
    .required('Campo requerido');


export const createUserSchema = yup.object<User>().shape({
    name: requiredString,
    lastName: requiredString,
    email: yup.string().email('Correo inválido').required('Campo requerido'),
    password: requiredString,
    confPassword: requiredString.oneOf([yup.ref('password')], 'Las contraseñas deben ser iguales'),
    age: requiredNumber.min(18, 'Debes ser mayor de edad')
})                                                             
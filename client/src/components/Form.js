import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

//We create a Schema. properties of the schema
// MUST BE THE SAME AS THE NAME OF THE INPUT Types of the form

// yup has functions that describe different inputs :)

const schema =yup.object().shape({
    firstName: yup.string().required ,
    lastName: yup.string().required ,
    email: yup.string().email().required,
    age: yup.number().min(18, 'Minimum value 18 years.').max(100, 'Maximum age 100 years.'),
    registrationPlate:yup.string(),
    password: yup.string().min(6).max(15).required ,
    // this will track to see if confirm password is the same as the password.
    // yup.string().oneOf([yup.ref("password"),null])
    confirmPassword: yup.string().oneOf([yup.ref("password"),null])

})

// Now we write our React-Hook-Form code so that it will take on the schema and validate our inputs.
// And display the error messages.


export default function Form() {

    // We destructure register,handleSubmit,errors the useForm. 
    
    // To connect with yup, we pass in the useForm() hook a resolver.
    // We pass in the yup resolver we imported.
    // inside the yupResolver we pass in our schema, and this is how we connect yup schema to React hook form.
   
   
   
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: yupResolver(schema)
    });

    //register - function that determines which fields of the form we want to be part of our validation
    // handleSubmit - function that we can put as the 'onSubmit' event of our form.
    // errors - object containing errors.
   

    // data will be the information from the form when we submit.
    const submitForm = (data) => {
        console.log(data)
    }

    // Now we just have to make our form and display the errors
    // We will use the register function to actually make it that each of our input is actually
    // part of our yup validation

    // We will pass a ref to each input. we set the input as a reference to something. like useRef() 
    // ref={register} :)


    // we want to also display errors :)
    return (
    <div className='Form'>
        <div className='title'>Sign Up</div>
        <div className='inputs'>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type='text' name='firstName' placeholder='First Name..' {...register('firstName')} />
                <p> {errors.firstName?.message}</p>
                <input type='text' name='lastName' placeholder='Last Name..' {...register('lastName')}/>
                <p> {errors.lastName?.message}</p>
                <input type='email' name='email' placeholder='Email..' {...register('email')}/>
                <p> {errors.email?.message}</p>
                <input type='number' name='age' placeholder='Age..' {...register('age')} />
                <p> {errors.age?.message}</p>
                <input type='text' name='registrationPlate' placeholder='Registration Plate Number..' {...register('registrationPlate')} />
                <p> {errors.registrationPlate?.message}</p>               
                <input type='password' name='password' placeholder='Password..'  {...register('password')} />
                <p> {errors.password?.message}</p>
                <input type='password' name='confirmPassword' placeholder='Confirm Password..'  />
                <p> {errors.confirmPassword && "Passwords don't match"}</p>
                <input type='submit' id='submit'/>
            </form>
        </div>
    </div>
  )
}

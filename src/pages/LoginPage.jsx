import React from 'react'
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
=======
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
<<<<<<< HEAD
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Replace with actual login/API logic
    console.log('Login Data:', values);
    // Simulate login success
    setTimeout(() => {
      // Call onLogin to update app state and clear cart if user changed
      if (onLogin) {
        onLogin({ email: values.email, password: values.password });
      }
      alert('Login successful!');
      setSubmitting(false);
      // Redirect to products page after login
      navigate('/products');
    }, 500);
=======
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login Data:', values);
    alert('Login successful! (Placeholder action)');
    setSubmitting(false);
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-center text-[#415160] mb-6">Log In</h2>
=======
        <h2 className="text-3xl font-bold text-center text-[#415160] mb-6">Welcome Back</h2>
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
<<<<<<< HEAD
                  placeholder="you@example.com"
=======
                  placeholder=""
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF5151] focus:border-[#FF5151]"
                />
                <ErrorMessage name="email" component="div" className="text-xs text-red-500 mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
<<<<<<< HEAD
                  placeholder="••••••••"
=======
                  placeholder=""
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF5151] focus:border-[#FF5151]"
                />
                <ErrorMessage name="password" component="div" className="text-xs text-red-500 mt-1" />
              </div>

<<<<<<< HEAD
=======
              <div className='text-right text-sm'>
                <Link to="/forgot-password" className="text-gray-500 hover:text-orange-500">
                  Forgot Password?
                </Link>
              </div>

>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF5151] hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
<<<<<<< HEAD
          <Link to="/" className="text-orange-500 hover:text-[#FF5151] font-medium">
            Sign up
=======
          <Link to="/signup" className="text-orange-500 hover:text-[#FF5151] font-medium">
            Sign Up
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
          </Link>
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default LoginPage;

=======
export default LoginPage;
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8

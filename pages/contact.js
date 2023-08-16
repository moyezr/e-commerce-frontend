import React from 'react'
import { useForm } from "react-hook-form"
import { RiGalleryFill } from 'react-icons/ri'
import { send } from "emailjs-com";
import {ToastContainer, toast} from "react-toastify"
import Wrapper from '@/components/Wrapper';
import "react-toastify/dist/ReactToastify.css";
const ContactFormInput = ({ register, id, label, required, type, errors }) => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-gray-500'>{label} <span className='ml-2 text-red-500'>{errors ? (
                errors.type === 'required' ? `${label} is Required` : errors?.message
            ) : null}</span> </label>
            <input type={type} className='rounded-md border  border-gray-200 px-2 py-1' {...register(id, { required })} />
        </div>
    )
}



const ContactPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues
    } = useForm();

    const onSubmit = (data) => {
        try {
            const formData = {
                from_name: data.name,
                to_name: data.email,
                message: data?.msg,
                reply_to: 'moyezrabbani.work@gmail.com',
              }
          
              send(
                'service_3e37l1m',
                'template_w9mq0nj',
                formData,
                'iy4BcqnVh9KhTIMvo'
              )
                .then((response) => {
                    toast.success("Success. I'll get back to you soon!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                  console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                //   toast.error("Something Went Wrong!")
                  console.log('FAILED...', err);
                });
              console.log(data, errors.email);
        } catch (error) {
            console.log(error);
        }

     
      };
    


    return (
        <div className="w-full py-8">


        <ToastContainer />
        <Wrapper>
 


        <section className='w-full  flex flex-col items-center gap-8'>

            <h1 className='tex-3xl sm:text-4xl md:text-5xl font-bold text-center'>Contact Us</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 w-[80%] sm:w-[70%] md:w-[50%'>

                <ContactFormInput
                    label="Name"
                    type="text"
                    required={true}
                    id="name"
                    register={register}
                    errors={errors.name}
                />
                <ContactFormInput
                    label="Email"
                    type="email"
                    required={true}
                    id="email"
                    register={register}
                    errors={errors.email}
                />

                <div className='flex flex-col gap-1'>
                    <label className='text-gray-500'>Wanna Say Something</label>
                    <textarea className='rounded-md border  border-gray-200 px-2 py-1 w-full h-[100px]' {...register("msg")} />
                </div>

                <input type='submit' className='px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-200 cursor-pointer disabled:cursor-not-allowed' />


            </form>

        </section>
        </Wrapper>
        </div>
    )
}

export default ContactPage
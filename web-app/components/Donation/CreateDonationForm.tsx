
import { v4 as uuidv4 } from 'uuid';
import { Field, Form, Formik } from "formik";
import styles from "./Donation.module.css";
import { DonationDTO } from "../../types/index";



;
export default function CreateDonationForm() {

    const initalValues: DonationDTO = {
        id: uuidv4(),
        idEvent:"",
        donorName:"",
        currency:  "USDC",
        status: "pending"
      };

    return (

        <div className="bg-black/40 rounded-md backdrop-blur-sm ">
            <div className="border-b py-5 px-10">
                <h1 className="font-bold text-3xl">Create event</h1>
            </div>
            <div className="py-5 px-20">
                <Formik
                    initialValues={initalValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        actions.setSubmitting(false);
                    }}
                >
                    <Form className="flex flex-col gap-2">

                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="id">
                                id
                            </label>
                            <Field className={styles.input} id="id" name="id" disable />
                        </div>



                       
                        <button type="submit" className="bg-gray-500 rounded-md text-md p-2 mt-5">
                        Create
                        </button>
                      
           
                       

                    </Form>
                </Formik>
            </div>
        </div>


    )
}
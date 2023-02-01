
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
                            <Field className={styles.input} id="id" name="id"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="idEvent">
                                id Event
                            </label>
                            <Field className={styles.input} id="idEvent" name="idEvent"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="donorName">
                            Donor name
                            </label>
                            <Field className={styles.input} id="donorName" name="donorName"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Location">
                            Location
                            </label>
                            <Field className={styles.input} id="Location" name="Location"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Material">
                            Material
                            </label>
                            <Field className={styles.input} id="Material" name="Material"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Quantity">
                            Quantity
                            </label>
                            <Field className={styles.input} id="Quantity" name="Quantity"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="donorAddress">
                            Donor address
                            </label>
                            <Field className={styles.input} id="Donor address" name="Donor address"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Amount">
                            Amount
                            </label>
                            <Field className={styles.input} id="Amount" name="Amount"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Currency">
                            Currency
                            </label>
                            <Field className={styles.input} id="Currency" name="Currency"  />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Status">
                            Status
                            </label>
                            <Field className={styles.input} id="Status" name="Status"  />
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
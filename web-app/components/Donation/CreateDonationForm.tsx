import { Field, Form, Formik } from "formik";
import styles from "../Event/Event.module.css";
export default function CreateDonationForm() {
    return (
        <>
            <div className="bg-black/40 rounded-md backdrop-blur-sm ">
                <div className="border-b py-5 px-10">
                    <h1 className="font-bold text-3xl">Create donation</h1>
                </div>
                

                <div className="py-5 px-10">
                    <Form className="flex flex-col gap-2">
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Event_ID">
                                Event ID
                            </label>
                            <Field className={styles.input} id="Event_ID" name="Event_ID" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Donation_ID">
                                Donation ID
                            </label>
                            <Field className={styles.input} id="Donation_ID" name="Donation_ID" disabled />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="DonorName">
                                Donor name
                            </label>
                            <Field className={styles.input} id="DonorName" name="DonorName" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="Location">
                                Location
                            </label>
                            <Field className={styles.input} id="Location" name="Location" />
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
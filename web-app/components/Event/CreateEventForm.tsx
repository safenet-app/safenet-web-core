import { Field, Form, Formik } from "formik";
import { CreateEventDTO } from "../../types/index";
import styles from "./Event.module.css";
//import { useAccount } from 'wagmi';
import { getHashId } from "../../lib/utils";

export default function CreateEventForm() {
  //const { address } = useAccount();
  const address = "0x0e425124C49aD293b2577D948197dA9d77B810E5";
  const initalValues: CreateEventDTO = {
    id: "",
    timestamp: new Date().getTime(),
    location: "",
    reportingUser: address || "",
    shortDescription: "",
    estimatedDate: new Date().toLocaleDateString(),
  };
  return (
    <div className="bg-black/40 rounded-md backdrop-blur-sm ">
      <div className="border-b py-5 px-10">
        <h1 className="font-bold text-3xl">Create event</h1>
      </div>
      <div className="py-5 px-10">
        <Formik
          initialValues={initalValues}
          onSubmit={(values, actions) => {
            const evtId = getHashId(Object.values(values));

            values.id = evtId;

            console.log({ values, actions });

            actions.setSubmitting(false);
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="date">
                Timestamp
              </label>
              <Field
                className={styles.input}
                id="date"
                name="date"
                value={initalValues.timestamp}
                disabled={true}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="location">
                Location
              </label>
              <Field className={styles.input} id="location" name="location" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="reportingUser">
                Reporting User
              </label>
              <Field
                className={styles.input}
                id="reportingUser"
                name="reportingUser"
                value={initalValues.reportingUser}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="shortDescription">
                Short Description
              </label>
              <Field
                className={styles.input}
                id="shortDescription"
                name="shortDescription"
                type="textarea"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="estimatedDate">
                Estimated Date
              </label>
              <Field
                className={styles.input}
                id="estimatedDate"
                name="estimatedDate"
                type="date"
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-300 rounded-md text-md p-2 mt-5"
            >
              Create
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

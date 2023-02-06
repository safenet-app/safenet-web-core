import { Field, Form, Formik } from "formik";
import { CreateEventDTO } from "../../types/index";
import { useState } from "react";
import styles from "./Event.module.css";
import uploader from "../lighthouse/lighthouse.jsx";
//import { useAccount } from 'wagmi';
import { getHashId } from "../../lib/utils";
import EventService from "./Event";
import { v4 as uuidv4 } from 'uuid';


export default function CreateEventForm() {
  

  const notice= () => {
    alert("Event recorded, we will check it as soon as possible!")
  }

  const [files, setFiles] = useState([] as any);

  const upload = async(e:any) => {
    const result = await uploader(e)
    setFiles([...files, `https://gateway.lighthouse.storage/ipfs/${result.hash}`])
    // console.log(`https://gateway.lighthouse.storage/ipfs/${result.hash}`)
  }

  //const { address } = useAccount();
  // const address = "0x0e425124C49aD293b2577D948197dA9d77B810E5";
  const initialValues: CreateEventDTO = {
    id: uuidv4(),
    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    estimatedDate: new Date().toLocaleDateString(),
    phoneNumber: "",
    reportingUser: "",
    shortDescription: "",
    location: "",
    files: files,
  };
  return (
    <div className="bg-black/40 rounded-md backdrop-blur-sm ">
      <div className="border-b py-5 px-10">
        <h1 className="font-bold text-3xl">Create event</h1>
      </div>
      <div className="py-5 px-10">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            
            
            /*const evtId = getHashId(Object.values(values));*/
            const eventService = new EventService
            eventService.createEvent(values)
            
           // values.id = evtId;
            
            console.log({ values, actions });
            
            actions.setSubmitting(false);
          }}
          enableReinitialize={true}
          >
          <Form className="flex flex-col gap-2">
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="date">
                Date
              </label>
              <Field
                className={styles.input}
                id="date"
                name="date"
                value={initialValues.date}
                disabled={true}
                />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="time">
                Time
              </label>
              <Field
                className={styles.input}
                id="time"
                name="time"
                value={initialValues.time}
                disabled={true}
                />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="files">
                Files
              </label>
              <Field
                className={styles.input}
                id="files"
                name="files"
                value={files}
                disabled={true}
                />
            <div className="uploader">
              <input onChange={e=>{upload(e)}} type="file"/>
            </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phoneNumber">
                PhoneNumber
              </label>
              <Field
                className={styles.input}
                id="phoneNumber"
                name="phoneNumber"
                />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="location">
                Location
              </label>
              <Field 
              className={styles.input} 
              id="location" 
              name="location" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="reportingUser">
                Your full name
              </label>
              <Field
                className={styles.input}
                id="reportingUser"
                name="reportingUser"
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

            <button type="submit" className="bg-emerald-300 rounded-md text-md p-2 mt-5" onClick={notice}>
              Create Event
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

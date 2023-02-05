
"use client";
import { v4 as uuidv4 } from 'uuid';
import { Field, Form, Formik } from "formik";
import styles from "./Donation.module.css";
import { TempDonation } from "../../types/index";
import Donation from './Donations';
import { useEffect, useState } from 'react';
import EventService from '../Event/Event';
import WalletAddress from "./Wallet/WalletAddress";



export default function CreateDonationForm() {
  // console.log(EthereumContext.)

  const notice= () => {
    alert("Donation recorded, thank you")
  }

  const [idEvents, setidEvents] = useState([] as string[]);

  useEffect(() => {
      idExtractor();
      return () => {
      }
  }, []);

  const idExtractor = async () => {

      const eventService = new EventService;
      const promise1 = new Promise(async (resolve, reject) => {
          resolve(await eventService.getAllEvents());
      });
      promise1.then((value) => {

          setidEvents(value as string[]);
          console.log("eventos", value);
      });
  }

  const initalValues: TempDonation = {
      id: uuidv4(),
      idEvent: "",
      donorName: "",
      location: "",
      material: "",
      quantity: 0,
      donorAddress: "",
      currency: "USDC",
      amount: 0,
      status: "pending",
      statusMessage: "",
      donationType:""
  };

  return (

      <div className="self-center bg-black/40 rounded-md backdrop-blur-sm ">
          <div className="border-b py-5 px-10">
              <h1 className="font-bold text-3xl">Create donation</h1>
          </div>
          <div className="py-5 px-20">
              <Formik
                  initialValues={initalValues}
                  enableReinitialize={true}
                  onSubmit={(values, actions) => {
                      const donation = new Donation;
                      console.log(values);
                      donation.createDonation(values.id, values.idEvent, values.donorName, values.location, values.material, values.quantity, values.donorAddress, values.amount);
                      actions.setSubmitting(false);
                  }}
              >
                {props => (
                  <Form className="flex flex-col gap-2">

                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="id">
                          </label>
                          <Field className={styles.input} id="id" name="id" hidden={true}/>
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="idEvent">
                              id Event
                          </label>
                          <Field component="select" className={styles.input} id="idEvent" name="idEvent" >

                          <option key = "0" value="" id="idEvent" ></option>
                              {idEvents.map((item, index) => {
                                  return <option key={index} value={item} id="idEvent" >{item}</option>
                              })}

                          </Field>
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="donorName">
                              Donor name
                          </label>
                          <Field className={styles.input} id="donorName" name="donorName" />
                      </div>

                      <fieldset className="form-group">
                        <label>Donation Type</label>
                        <Field name="donationType" component="select">
                        <option value="null"></option>
                          <option value="Materials">Materials</option>
                          <option value="Class_Fee">Cryptocurrency</option>
                        </Field>
                      </fieldset>

                      {props.values.donationType !== "Materials" && (
                          <fieldset className="form-group">
                              <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="donorAddress">
                              Donor address
                          </label>
                          <Field className={styles.input} id="donorAddress" name="donorAddress" />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="amount">
                              Amount
                          </label>
                          <Field className={styles.input} id="amount" name="amount" />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="currency">
                              Currency
                          </label>
                          <Field className={styles.input} id="currency" name="currency" disabled={true} />
                      </div>  
                          </fieldset>
               )}
                      {props.values.donationType == "Materials" && (
                          <fieldset className="form-group">
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="location">
                              Location
                          </label>
                          <Field className={styles.input} id="location" name="location" />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="material">
                              Material
                          </label>
                          <Field className={styles.input} id="material" name="material" />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="quantity">
                              Quantity
                          </label>
                          <Field className={styles.input} id="quantity" name="quantity" />
                      </div>
                      </fieldset>
                      )}
                     
                      <div className={styles.inputGroup}>
                          <label className={styles.label} htmlFor="status">
                          </label>
                          <Field className={styles.input} id="status" name="status" hidden={true} />
                      </div>


                      <button type="submit" className="bg-gray-500 rounded-md text-md p-2 mt-5" onClick={notice}>
                          Create
                      </button>
                  </Form>
                )}
              </Formik>
          </div>
      </div>
  )
}
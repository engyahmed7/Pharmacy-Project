import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Franklin Gothic Medium",
  headerBgColor: "#1976d2",
  headerFontColor: "#fff",
  headerFontSize: "30px",
  botBubbleColor: "#1976d2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const config = {
  width: "100%",
  height: "600px",
};

function Service() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "q-firstname",
              message: "What Is Your Name?",
              trigger: "firstname",
            },
            {
              id: "firstname",
              user: true,
              validator: (value) => {
                if (/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/.test(value)) {
                  return true;
                } else {
                  return "Please Input Alphabet Characters Only.";
                }
              },

              trigger: "q-email",
            },

            {
              id: "q-email",
              message: "What Is Your Email?",
              trigger: "email",
            },
            {
              id: "email",
              user: true,
              validator: (value) => {
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                  return true;
                } else {
                  return "Please Enter A Valid Email.";
                }
              },
              trigger: "q-submit",
            },
            {
              id: "q-submit",
              message: "What Is Your Problem?",
              trigger: "firstsubmit",
            },
            {
              id: "firstsubmit",
              options: [
                {
                  value: "y",
                  label: "I Have A Complaint",
                  trigger: "complaint",
                },

                {
                  value: "n",
                  label: "I Want A Medicine",
                  trigger: "medicine",
                },
                {
                  value: "w",
                  label: "I Want A Home Visit",
                  trigger: "home_visit",
                },
              ],
            },
            {
              id: "submit",
              options: [
                {
                  value: "y",
                  label: "I Have A Complaint",
                  trigger: "complaint",
                },

                {
                  value: "n",
                  label: "I Want A Medicine",
                  trigger: "medicine",
                },
                {
                  value: "w",
                  label: "I Want A Home Visit",
                  trigger: "home_visit",
                },
                {
                  value: "o",
                  label: "No Thanks",
                  trigger: "thanks",
                },
              ],
            },
            {
              id: "thanks",
              message: "OK. THANKS FOR VISITING US ",
              end: true,
            },
            {
              id: "complaint",
              message: "Please Write Your complaint",
              trigger: "user_complaint",
            },
            {
              id: "user_complaint",
              user: true,
              trigger: "complaint_submit",
            },
            {
              id: "complaint_submit",
              message:
                "Ok, We Will Try To Solve Your Problem As Soon As Possible",
              trigger: "another_problem",
            },
            {
              id: "another_problem",
              message: "Do You Have Another Problem?",
              trigger: "submit",
            },
            {
              id: "medicine",
              message: "Please Enter The Medicine's Name",
              trigger: "enter_medicine",
            },

            {
              id: "enter_medicine",
              user: true,
              trigger: "medicine_entered",
            },
            {
              id: "medicine_entered",
              message: "Please Enter Your Address ",
              trigger: "location",
            },
            {
              id: "location",
              user: true,
              trigger: "confirm",
            },
            {
              id: "confirm",
              message: "Ok, Your Medicine Will Arrive Soon. ",
              trigger: "another_problem",
            },

            {
              id: "home_visit",
              message:
                "We Have 5 Doctors Available Which Doctor Do You Prefer?",
              trigger: "choose",
            },
            {
              id: "choose",
              options: [
                {
                  value: "a",
                  label: "Dr. Alexander Henry",
                  trigger: "homeAddress",
                },
                { value: "b", label: "Dr. Christina", trigger: "homeAddress" },
                {
                  value: "c",
                  label: "Dr. William Lucas",
                  trigger: "homeAddress",
                },
                {
                  value: "d",
                  label: "Dr. Jessica John",
                  trigger: "homeAddress",
                },
                {
                  value: "e",
                  label: "Dr. Sarah Gorge",
                  trigger: "homeAddress",
                },
              ],
            },
            {
              id: "homeAddress",
              message: "Please Enter Your Address",
              trigger: "home",
            },

            {
              id: "home",
              user: true,
              trigger: "ok",
            },

            {
              id: "ok",
              message: "Ok, The Doctor Will Arrive Soon.",
              trigger: "another_problem",
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    </>
  );
}

export default Service;

//rfce

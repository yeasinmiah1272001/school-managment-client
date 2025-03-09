const formFields = [
  { label: "Name", name: "name" },
  { label: "Admission Number", name: "admissionNumber" },
  { label: "Subject Name", name: "subject" },
  { label: "Date of Birth", name: "date", type: "date" },
  { label: "Gender", name: "gender" },
  { label: "Photo", name: "image", type: "file" },
  { label: "Email", name: "email", type: "email" },
  { label: "Joining Date", name: "joiningDate", type: "date" },
  { label: "Father's Name", name: "fatherName" },
];
const apiData = [
  {
    timetable: [
      {
        time: "08:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "09:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "10:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "11:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
    ],
  },
];

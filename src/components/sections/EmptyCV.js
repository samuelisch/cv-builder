import { v4 as uuidv4 } from "uuid";

const CVTemplate = {
  userInfo: {
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    number: "",
    portfolio: "",
  },
  education: [
    {
      id: uuidv4(),
      schoolName: "",
      city: "",
      major: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  work: [
    {
      id: uuidv4(),
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ],
}

export default CVTemplate;
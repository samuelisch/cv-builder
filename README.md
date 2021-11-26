# CV-Builder Application

## Motivation

I realised that there are a ton of questions every now and then, with regards to building a presentable CV for job applications. Although I believe that the structure of CVs should be dependent on the nature of the applicants' career choices, the CV should still be simple, clear and readable.

I have created an implementation of a CV creator based on a template that I use for my own CV. This template has clear headings, and simple yet readable sections, where styles only differ to separate organisations / date, positions / locations, and descriptions.

## Access Deployment

A working production build is deployed on [Github Pages](https://facebook.github.io/create-react-app/docs/running-tests)

All information entered into the form will be erased upon reload.

## Features

The app features a Form, and a sticky template element. This template element will fill up whenever information is entered into the form. The form features a few Sub Sections:

- General Information
- Education experience
- Work experience
- Other expertise the user might want to share in his CV

### Technologies used

This application is created with React, and the main learning point of the project is the use of State Hooks. 

The project is styled with styled-components. 

One of the features of the project is to allow the user to download the CV-template in PDF format. The following packages are used to make that possible:

- html2canvas [documentation](https://html2canvas.hertzen.com/)
- jsPDF [documentation](https://github.com/parallax/jsPDF)

### Nice to have future implementations

I would implement these few changes to improve the application:
- Further Form Validation
- Expand on the Expertise component - allow users to define headings for expertise subjects, while maintaining the current input box for subject examples
- Add a portfolio input to be shown in the expertise component, while LinkedIn / website input is maintained in General Info
- Adding API calls to city input and school input, for user to select their cities / schools
- Selection of Month + Year for date inputs.

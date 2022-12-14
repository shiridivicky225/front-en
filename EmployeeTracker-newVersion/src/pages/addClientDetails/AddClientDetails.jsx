import React, { Fragment, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormInputs } from "../../components/formInputs/FormInputs";

import ApiService from "../../services/ApiService";
import { useEffect } from "react";

function AddClientDetails() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const [clients, setClients] = useState(null);
  const [emp, setEmp] = useState(null);
  const [msg, setMsg] = useState("");
  let type = sessionStorage.getItem("type");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // eslint-disable-next-line  no-unused-vars
  const [errors, setErrors] = useState(false);
  // eslint-disable-next-line
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    // setErrors(false);
    ApiService.addClientDetails(data, data.clientsId, data.employeeID)
      .then((res) => {
        console.log(res.data);
        alert("successfull");
        navigate(`/${type}`);
        setStatus(false);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setStatus(true);
        setErrors(false);
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  };

  useEffect(() => {
    ApiService.getAllClients()
      .then((res) => {
        console.log(res.data);
        setClients(res.data);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setClients(null);
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
    ApiService.getEmployeeId()
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setEmp(null);
        setMsg(
          error.response.data.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  }, []);
  const formData = [
    {
      id: "employeeID",
      data: (
        <Form.Group className="mb-3 px-2">
          <Form.Label htmlFor="employeeID">
            Employee ID
            <nobr />
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Select
            required
            id="employeeID"
            aria-label="Client Name"
            className="selectInput"
            name="employeeID"
            onChange={handleChange}
          >
            <option value="">{status ? "loading..." : "select "}</option>
            {emp?.map((type, index) => (
              <option key={index} value={type.lancesoftId}>
                {type.firstName} {type.lastName}({type.lancesoftId})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      ),
    },
    {
      id: "clientEmail",
      title: "client email",
      name: "clientEmail",
      type: "email",
      placeholder: "Enter client email",
      required: true,
      defaultValue: data.clientEmail,
      handleChange: handleChange,
    },
    {
      id: "clientManagerName",
      title: "Client Manager Name",
      name: "clientManagerName",
      type: "text",
      placeholder: "Enter client Manager Name",
      required: true,
      defaultValue: data.clientManagerName,
      handleChange: handleChange,
    },
    {
      id: "clientsId",
      data: (
        <Form.Group className="mb-3 px-2">
          <Form.Label htmlFor="clientsId">
            Client Name
            <nobr />
            <span className="text-danger"> *</span>
          </Form.Label>
          <Form.Select
            required
            id="clientsId"
            aria-label="Client Name"
            className="selectInput"
            name="clientsId"
            onChange={handleChange}
          >
            <option value="">{status ? "loading" : "select "}</option>
            {clients?.map((type, index) => (
              <option key={"clientsId" + index} value={type.clientsId}>
                {type.clientsNames}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      ),
    },
    // {
    //   id: "clientName",
    //   title: "Client Name",
    //   name: "clientName",
    //   type: "text",
    //   placeholder: "Enter client name",
    //   required: true,
    //   defaultValue: data.clientName,
    //   handleChange: handleChange,
    // },
    {
      id: "clientSalary",
      title: "Client billing",
      name: "clientSalary",
      type: "text",
      placeholder: "Enter client billing",
      required: true,
      defaultValue: data.clientSalary,
      handleChange: handleChange,
    },
    {
      id: "desgAtClient",
      title: "Desgination at client",
      name: "desgAtClient",
      type: "text",
      placeholder: "Enter designation at client",
      required: true,
      defaultValue: data.desgAtClient,
      handleChange: handleChange,
    },
    {
      id: "Posdate",
      title: "POS Date",
      name: "posdate",
      type: "date",
      placeholder: "Enter POS Date",
      required: true,
      defaultValue: data.posdate,
      handleChange: handleChange,
    },
    {
      id: "Poedate",
      title: "POE Date",
      name: "poedate",
      type: "date",
      placeholder: "Enter POE Date",
      required: false,
      defaultValue: data.poedate,
      handleChange: handleChange,
    },
  ];
  return (
    <div id="add-employee" className="container-sm ">
      <h1 className="title text-center">Add Client Details</h1>

      <Form onSubmit={handleSubmit}>
        <h4>Employee Details</h4>
        <hr></hr>
        {errors && (
          <p className="text-danger mb-2">Network problem please try again</p>
        )}
        {!errors && (
          <div className="form">
            {formData.map((item) => (
              <Fragment key={item.id}>
                {item?.data ? (
                  item.data
                ) : (
                  <FormInputs
                    id={item.id}
                    title={item.title}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    required={item.required}
                    defaultValue={item.defaultValue}
                    handleChange={item.handleChange}
                  />
                )}
              </Fragment>
            ))}
          </div>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {status && (
          <p className="text-success mb-2">
            Please wait while we are processing your request.
          </p>
        )}

        {<p className="text-danger mb-2">{msg}</p>}
      </Form>
    </div>
  );
}

export default AddClientDetails;

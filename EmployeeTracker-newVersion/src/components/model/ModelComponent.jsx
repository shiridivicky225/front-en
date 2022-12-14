import React, { Fragment } from "react";
import { useState } from "react";
import { Button, Modal, Col, Row, Form } from "react-bootstrap";
// import moment from "moment";
import "./modelComponent.css";
import { useEffect } from "react";
import ApiService from "../../services/ApiService";
import SubEmployee from "../subEmployee/SubEmployee";

function ModelComponent(props) {
  console.log(props.data);
  const [data, setData] = useState({});
  const [client, setClient] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [status, setStatus] = useState(false);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
  };

  // const handleEdit = () => {
  //   setDisabled(true);
  // };
  const handleClose = () => {
    props.onHide();
    setData("");
  };

  useEffect(() => {
    if (props.show && props.data) {
      setStatus(true);
      ApiService.getEmployeeById(props.data)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          // setStatus(false);
          setMsg("");
        })
        .catch((err) => {
          console.log(err);
          setData("");
          // setStatus(false);
          setMsg(err.message);
        });

      ApiService.getAllClientsByEmpId(props.data)
        .then((res) => {
          console.log(res.data);
          setClient(res.data.details);
          setStatus(false);
        })
        .catch((err) => {
          console.log(err);
          setClient({});
          setStatus(false);
        });
    }
  }, [props.data, props.show]);

  return (
    <>
      <Modal
        show={props.show}
        size={
          ["lead", "Consultant"].includes(
            data.employeeDetailsResponse?.designation
          )
            ? "xl"
            : "lg"
        }
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="title">
            Employee Profile
          </Modal.Title>
          <Button className="btnClose" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          {status && <p className="text-success mb-1">loading...</p>}
          <p className="text-danger">{msg}</p>
          {!status && (
            <Form onSubmit={handleSubmit}>
              <Row xs="auto">
                <Col>
                  <div id="modelSection">
                    <h5 className="modelHeading">Employee Details</h5>
                    <hr></hr>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="employeeId">EmployeeID</Form.Label>
                      <Form.Control
                        name="employeeId"
                        id="employeeId"
                        required
                        disabled={disabled ? "" : "disabled"}
                        type="text"
                        placeholder="Enter employeeId"
                        defaultValue={data.employeeDetailsResponse?.employeeId}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="firstName">
                        Employee first name
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        id="firstName"
                        required
                        type="text"
                        placeholder="enter firstName name"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="lastName">
                        Employee last name
                      </Form.Label>
                      <Form.Control
                        name="lastName"
                        id="lastName"
                        required
                        type="text"
                        placeholder="enter last name"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="joiningDate">
                        Joining date
                      </Form.Label>
                      <Form.Control
                        name="joiningDate"
                        id="joiningDate"
                        required
                        type="date"
                        placeholder="Enter joining Date"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.joiningDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        name="email"
                        id="email"
                        // autoComplete="email"
                        required
                        type="email"
                        placeholder="name@gmail.com"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="dateOfBirth">
                        Date of Birth
                      </Form.Label>
                      <Form.Control
                        name="dob"
                        id="dateOfBirth"
                        required
                        type="date"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.dob}
                        // moment(
                        //   data.employeeDetailsResponse?.dob
                        // ).format("YYYY-MM-DD")
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="gender">Gender</Form.Label>
                      <Form.Control
                        name="gender"
                        id="gender"
                        required
                        type="text"
                        placeholder="enter gender"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.gender}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="employeeType">
                        Employee type
                      </Form.Label>
                      <Form.Control
                        name="employeeType"
                        id="employeeType"
                        required
                        type="text"
                        placeholder="enter employeeType"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={
                          data.employeeDetailsResponse?.employeeType
                        }
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="location">Location</Form.Label>
                      <Form.Control
                        name="location"
                        id="location"
                        required
                        type="text"
                        placeholder="enter location"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.location}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    {/* <Form.Group className="mb-3 checkbox">
                <Form.Label>Gender : </Form.Label>{" "}
                <Form.Check
                  required
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  defaultValue={data.gender}
                  onChange={(e) => {
                    data.gender = "Male";
                  }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  defaultValue={data.gender}
                  onChange={(e) => {
                    data.gender = "Female";
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone number">Phone Number</Form.Label>
                <Form.Control
                  // required
                  id="phone number"
                  type="tel"
                  disabled={disabled ? "" : "disabled"}
                  // pattern="[+91][0-9]{13}"
                  // pattern="[0-9]{10}"
                  message="please enter correct number"
                  placeholder="please enter phone number"
                  name="phoneNo"
                  // placeholder="+919999999999"
                  // pattern="[+91][0-9].{11}"
                  // maxLength={13}
                  title="enter phone number like +919999999999"
                  defaultValue={data.phoneNo}
                  onChange={handleChange}
                />
              </Form.Group> */}

                    {/* <Form.Group className="mb-3">
                  <Form.Label htmlFor="practice">Practice</Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="practice"
                    type="text"
                    placeholder="please enter practice"
                    name="practice"
                    title="enter salary"
                    defaultValue={data.practice}
                    onChange={handleChange}
                  />
                </Form.Group> */}
                    {/* <Form.Group className="mb-3">
                  <Form.Label htmlFor="designationAtLs">
                    Designation at Lancesoft
                  </Form.Label>
                  <Form.Control
                    required
                    disabled={disabled ? "" : "disabled"}
                    id="designationAtLs"
                    type="text"
                    placeholder="please enter designation at Lancesoft"
                    name="designationAtLs"
                    title="enter designation"
                    defaultValue={data.designationAtLs}
                    onChange={handleChange}
                  />
                </Form.Group> */}

                    {/* <Form.Group className="mb-3">
                  <Form.Label htmlFor="tenure">Tenure</Form.Label>
                  <Form.Control
                    disabled
                    id="tenure"
                    type="text"
                    name="tenure"
                    defaultValue={data.internalExpenses?.tenure}
                    // onChange={handleChange}
                  />
                </Form.Group> */}
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="subDepartName">
                        Sub department Name
                      </Form.Label>
                      <Form.Control
                        name="subDepartName"
                        id="subDepartName"
                        required
                        type="text"
                        placeholder="enter sub department name"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={
                          data.employeeDetailsResponse?.subDepartName
                        }
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="designation">designation</Form.Label>
                      <Form.Control
                        name="designation"
                        id="designation"
                        required
                        type="text"
                        placeholder="enter designation"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.employeeDetailsResponse?.designation}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="vertical">Vertical</Form.Label>
                      <Form.Control
                        name="vertical"
                        id="vertical"
                        required
                        type="text"
                        placeholder="enter vertical"
                        disabled={disabled ? "" : "disabled"}
                        defaultValue={data.masterEmployeeDetails?.vertical}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="benchTenure">
                        Bench Tenure
                      </Form.Label>
                      <Form.Control
                        disabled
                        id="benchTenure"
                        type="text"
                        name="benchTenure"
                        defaultValue={data.internalExpenses?.benchTenure}
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="salary">Salary</Form.Label>
                      <Form.Control
                        required
                        disabled={disabled ? "" : "disabled"}
                        id="salary"
                        type="number"
                        placeholder="please enter salary"
                        name="salary"
                        title="enter salary"
                        defaultValue={data.salary?.salary}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col>
                  {["lead", "Consultant"].includes(
                    data.employeeDetailsResponse?.designation
                  ) && (
                    <>
                      {client?.map((client, index) => (
                        <div
                          id="modelSection"
                          key={index}
                          className="container-sm "
                        >
                          <h5 className="modelHeading">Client {index + 1}</h5>
                          <hr></hr>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="desgAtClient">
                              Designation at Client
                            </Form.Label>
                            <Form.Control
                              // required
                              id="desgAtClient"
                              type="text"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter designation at Client"
                              name="desgAtClient"
                              title="enter designation"
                              defaultValue={client?.desgAtClient}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="clientsNames">
                              Client Name
                            </Form.Label>
                            <Form.Control
                              // required
                              id="clientsNames"
                              disabled={disabled ? "" : "disabled"}
                              type="text"
                              placeholder="please enter Client name"
                              name="clientsNames"
                              title="enter client name"
                              defaultValue={client?.clients?.clientsNames}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="clientSalary">
                              Client Salary
                            </Form.Label>
                            <Form.Control
                              // required
                              id="clientSalary"
                              type="number"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter Client salary"
                              name="totalEarningAtclient"
                              title="enter Total Client billing"
                              defaultValue={client?.clientSalary}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="totalEarningAtclient">
                              Total Billing at Client
                            </Form.Label>
                            <Form.Control
                              // required
                              id="totalEarningAtclient"
                              type="number"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter Client salary"
                              name="totalEarningAtclient"
                              title="enter Total Client billing"
                              defaultValue={client?.totalEarningAtclient}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="poSdate">
                              PO Start date
                            </Form.Label>
                            <Form.Control
                              // required
                              id="poSdate"
                              type="date"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter PO Start date"
                              name="poSdate"
                              title="enter PO Start date"
                              defaultValue={client?.posdate}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="poEdate">
                              PO end date
                            </Form.Label>
                            <Form.Control
                              // required
                              id="poEdate"
                              disabled={disabled ? "" : "disabled"}
                              type="text"
                              placeholder="Present"
                              name="poEdate"
                              title="enter PO end date"
                              defaultValue={client?.poedate}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="totalEarningAtclient">
                              Client email
                            </Form.Label>
                            <Form.Control
                              // required
                              id="clientEmail"
                              type="email"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter Client mail"
                              name="clientEmail"
                              title="enter client mail"
                              defaultValue={client?.clientEmail}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label htmlFor="totalEarningAtclient">
                              Client Manager Name
                            </Form.Label>
                            <Form.Control
                              // required
                              id="clientManagerName"
                              type="email"
                              disabled={disabled ? "" : "disabled"}
                              placeholder="please enter client Manager Name"
                              name="clientManagerName"
                              title="enter client Manager Name"
                              defaultValue={client?.clientManagerName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </div>
                      ))}
                    </>
                  )}
                  {/* </div> */}
                </Col>
                <Col
                // className={
                //   ["lead", "Consultant"].includes(
                //     data.employeeDetailsResponse?.designation
                //   )
                //     ? "break"
                //     : ""
                // }
                >
                  {/* {["lead", "Consultant"].includes(
                  data.employeeDetailsResponse?.designation
                ) && (
                 
                )} */}
                  <div id="modelSection" className="container-sm ">
                    <h5 className="modelHeading">Bill</h5>
                    <hr></hr>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="paidTillNow">
                        Total salary paid till now
                      </Form.Label>
                      <Form.Control
                        disabled
                        id="paidTillNow"
                        type="text"
                        name="paidTillNow"
                        defaultValue={
                          data.internalExpenses?.totalSalPaidTillNow
                        }
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="totalExpenses">
                        Total Expences
                      </Form.Label>
                      <Form.Control
                        disabled
                        id="totalExpenses"
                        type="text"
                        name="totalExpenses"
                        // placeholder="please enter cubical cost"
                        defaultValue={data.internalExpenses?.totalExpenses}
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="cubicleCost">
                        Cubical cost
                      </Form.Label>
                      <Form.Control
                        required
                        disabled={disabled ? "" : "disabled"}
                        id="cubicleCost"
                        type="number"
                        // placeholder="please enter cubical cost"
                        name="cubicleCost"
                        title="enter Cubical cost"
                        defaultValue={data.internalExpenses?.cubicleCost}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="foodCost">Food Cost</Form.Label>
                      <Form.Control
                        required
                        id="foodCost"
                        disabled={disabled ? "" : "disabled"}
                        type="number"
                        // placeholder="please enter food Cost"
                        name="foodCost"
                        title="enter food Cost"
                        defaultValue={data.internalExpenses?.foodCost}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="transportationCost">
                        Transport Cost
                      </Form.Label>
                      <Form.Control
                        required
                        id="transportationCost"
                        type="number"
                        disabled={disabled ? "" : "disabled"}
                        // placeholder="please enter Transport Cost"
                        name="transportationCost"
                        title="enter Transport Cost"
                        defaultValue={data.internalExpenses?.transportationCost}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="profitOrLoss">
                        Profit/Loss
                      </Form.Label>
                      <Form.Control
                        disabled
                        id="profitOrLoss"
                        type="text"
                        name="profitOrLoss"
                        defaultValue={data.internalExpenses?.profitOrLoss}
                      />
                    </Form.Group>
                    {/* {disabled ? (
                  <Button className="btn-signup" type="submit">
                    Submit
                  </Button>
                ) : ["md"].includes(props.type) ? (
                  <Button className="btn-signup" type="submit">
                    Transfer
                  </Button>
                ) : (
                  <Button
                    className="btn-signup"
                    onClick={handleEdit}
                    // type="submit"
                  >
                    Edit
                  </Button>
                )}{" "}
                <Button variant="danger" onClick={() => setDisabled(false)}>
                  Cancel
                </Button> */}
                    <SubEmployee id={props.data} />
                  </div>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelComponent;

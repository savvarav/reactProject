import { Form, CustomInput, Card, CardTitle, CardText, FormGroup, Label, Input, Col, Button, FormText } from 'reactstrap';

const Forma = () => {



    return (
        <div>
            <Form style={{ margin: '3rem' } >
                <FormGroup>
                    <Label for="title"><h5>Title: </h5></Label>
                    <Input placeholder="Title" />
                </FormGroup>

                <FormGroup>
                    <Label for="duration"><h5>Duration: </h5></Label>
                    <Input
                        type="text"
                        name="duration"
                        id="duration"
                        placeholder="Duration"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="imagePath"><h5>Image Path: </h5></Label>
                    <Input
                        type="url"
                        name="url"
                        id="imagePath"
                        placeholder="Image Path"
                    />
                </FormGroup>
                <FormGroup style={{ margin: '2rem' }}>
                    <h5><CustomInput type="checkbox" id="bookable" label="Bookable" /></h5>
                </FormGroup>
                <hr />

                <FormGroup style={{ margin: '2rem' }}>
                    <h2 style={{ margin: '2rem' }}>Instructors</h2>
                    <h5><CustomInput type="checkbox" id="01" label="John Tsevdos" /></h5>
                    <h5><CustomInput type="checkbox" id="02" label="Yiannis Nikolakopoulos" /></h5>
                </FormGroup>

                <hr />

                <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    <Label for="exampleText"><h5>Description: </h5></Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <hr />

                <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    <h2 style={{ margin: '2rem' }}>Dates</h2>

                    <Label for="exampleDate"><h5>Start Date: </h5></Label>
                    <Input
                        type="date"
                        name="start_date"
                        id="start_date"
                        placeholder="date placeholder"
                    />
                </FormGroup>

                <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    <Label for="exampleDate"><h5>End Date: </h5></Label>
                    <Input
                        type="date"
                        name="end_date"
                        id="end_date"
                        placeholder="date placeholder"
                    />
                </FormGroup>

                <hr />

                <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    <h2 style={{ margin: '2rem' }}>Price</h2>

                    <Label for="exampleNumber"><h5>Early Bird: </h5></Label>
                    <Input
                        type="number"
                        name="early_bird"
                        id="early_bird"
                        placeholder="0"
                    />
                </FormGroup>

                <FormGroup style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                    <Label for="exampleNumber"><h5>Normal Price: </h5></Label>
                    <Input
                        type="number"
                        name="normal"
                        id="normal"
                        placeholder="0"
                    />
                </FormGroup>
                <hr />
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>

                <hr />

            </Form >
        </div>
    )


}

export default Forma;
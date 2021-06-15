import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import CityService from '../services/cityService';
import { Select, Button } from 'evergreen-ui';
import * as Yup from 'yup';
import { Form,  Label, Container, TextArea, Grid, Segment } from 'semantic-ui-react';
import JobPositionService from '../services/jobPositionService';
import WayOfWorkingService from '../services/wayOfWorkingService';
import WorkingTimeService from '../services/workingTimeService';
import JobAdvertisementService from '../services/jobAdvertisementService';
import swal from 'sweetalert';



export default function JobAdvertisementAdd() {

    
    const validationSchema = Yup.object().shape({
        description: Yup.string().max(100,"Açıklama En fazla 100 karakter olabilir").required('Zorunlu Alan'),
        numberOfOpenPosition: Yup.number().min(1, 'En az 1 olabilir').max(10, 'En fazla 10 olabilir').required('Zorunlu Alan'),
        maxSalary: Yup.number().min(1, 'En az 1 olabilir').max(100000, 'En fazla 100000 olabilir'),
        minSalary: Yup.number().min(1, 'En az 1 olabilir').max(100000, 'En fazla 100000 olabilir'),
        employerId: Yup.number().required('Zorunlu Alan').nullable(),
        cityId: Yup.string().required("Zorunlu Alan").nullable(),
        endDate: Yup.date().required("Zorunlu Alan").nullable(),
        jobId: Yup.string().required("Zorunlu Alan").nullable(),
        workingTimeId: Yup.string().required("Zorunlu Alan").nullable(),
        wayOfWorkingId: Yup.string().required("Zorunlu Alan").nullable(),
    })

    const [city, setCity] = useState([])
    const [position, setPosition] = useState([])
    const [wayofworking, setWayOfWorkings] = useState([])
    const [workingtime, setWorkingsTime] = useState([])


    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCity(result.data.data))
        let jobPositionService = new JobPositionService();
        jobPositionService.getAllPositions().then(result => setPosition(result.data.data))
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getAllWayOfWorkings().then(result => setWayOfWorkings(result.data.data))
        let workingTimeService = new WorkingTimeService();
        workingTimeService.getAllWorkingsTime().then(result => setWorkingsTime(result.data.data))
    }, [])
    return (
        <Container>
            <Formik
                initialValues={{
                    description: "",
                    numberOfOpenPosition: "",
                    maxSalary: "",
                    minSalary: "",
                    endDate: "",
                    cityId: "",
                    jobId: "",
                    wayOfWorkingId: "",
                    workingTimeId: "",
                    employerId: ""

                }}


                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, setErrors, setFieldError, setStatus, resetForm }) => {
                    let jobAdvertisementService = new JobAdvertisementService();
                    jobAdvertisementService.jobAdvertisementadd(values).then();
                    console.log(values);
                    swal("Ekleme Başarılı!", `${values.cityId}`, "success");


                }}
            >
                {({ handleSubmit, handleChange, values, errors, handleBlur }) => (
                    <Form style={{ background: "#f1f5f8", borderRadius: 20,position:"relative",alignItems:"center",display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
                        <Grid columns={1} >
                            <Grid.Row>
                                <Grid.Column stretched>
                                    <Segment basic>
                                        <Form.Field>
                                            <TextArea rows={2} type="text"
                                                name="description"
                                                onChange={handleChange}
                                                value={values.description || ''}
                                                 placeholder='İlan Açıklama' >

                                            </TextArea>
                                            {
                                                errors.description &&
                                                <Label basic color='red' pointing  >
                                                    {errors.description}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input

                                                type="number"
                                                name="numberOfOpenPosition"
                                                placeholder="Açık Pozisyon Adedi"
                                                onChange={handleChange}
                                                value={values.numberOfOpenPosition || ''}
                                            />
                                            {
                                                errors.numberOfOpenPosition &&
                                                <Label basic color='red' pointing  >
                                                    {errors.numberOfOpenPosition}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="minSalary"
                                                min="0"
                                                placeholder="Minimum Maaş Miktarı"
                                                onChange={handleChange}
                                                value={values.minSalary || ''}
                                            />
                                            {
                                                errors.minSalary &&
                                                <Label basic color='red' pointing >
                                                    {errors.minSalary}
                                                </Label>
                                            }
                                        </Form.Field>

                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="maxSalary"
                                                min="0"
                                                placeholder="Maximum Maaş Miktarı"
                                                onChange={handleChange}
                                                value={values.maxSalary || ''}


                                            />
                                            {
                                                errors.maxSalary &&
                                                <Label basic color='red' pointing >
                                                    {errors.maxSalary}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="number"
                                                name="employerId"
                                                min="0"
                                                placeholder="İş Veren Id"
                                                onChange={handleChange}
                                                value={values.employerId || ''}


                                            />
                                            {
                                                errors.employerId &&
                                                <Label basic color='red' pointing >
                                                    {errors.employerId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <input
                                                type="date" 
                                                name="endDate"
                                                placeholder="İlan Bitiş Tarihi"
                                                onChange={handleChange}
                                                value={values.endDate || ''}


                                            />
                                            {
                                                errors.endDate &&
                                                <Label basic color='red' pointing >
                                                    {errors.endDate}
                                                </Label>
                                            }
                                        </Form.Field>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic>
                                        <Form.Field>
                                            <Select
                                                name="cityId"
                                                onChange={handleChange}
                                                value={values.cityId || ''}
                                                onBlur={handleBlur}
                                                touched={values.cityId}

                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Şehir Seçiniz" defaultValue>Şehir Seçiniz</option>
                                                {

                                                    city.map(c => (
                                                        <option key={c.cityId} value={c.cityId}   >
                                                            {c.cityName}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.cityId &&
                                                <Label basic color='red' pointing >
                                                    {errors.cityId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <Select
                                                name="jobId"
                                                value={values.jobId || ''}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.jobId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Pozisyon Seçiniz" defaultValue    >Pozisyon Seçiniz</option>
                                                {

                                                    position.map(p => (
                                                        <option key={p.id} value={p.id}   >
                                                            {p.jobName}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.jobId &&
                                                <Label basic color='red' pointing >
                                                    {errors.jobId}
                                                </Label>
                                            }

                                        </Form.Field>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column stretched>
                                    <Segment basic>
                                        <Form.Field>
                                            <Select
                                                name="wayOfWorkingId"
                                                value={values.wayOfWorkingId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.wayOfWorkingId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Çalışma Türü Seçiniz" defaultValue    >Çalışma Türü Seçiniz</option>
                                                {

                                                    wayofworking.map(wow => (
                                                        <option key={wow.id} value={wow.id}   >
                                                            {wow.wayOfWorkingTitle}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.wayOfWorkingId &&
                                                <Label basic color='red' pointing >
                                                    {errors.wayOfWorkingId}
                                                </Label>
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <Select
                                                name="workingTimeId"
                                                value={values.workingTimeId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={values.workingTimeId}
                                                style={{ display: 'block' }}
                                            >
                                                <option placeholder="Çalışma Zamanı Seçiniz" defaultValue>Çalışma Zamanı Seçiniz</option>
                                                {

                                                    workingtime.map(wt => (
                                                        <option key={wt.id} value={wt.id}   >
                                                            {wt.workingTimeTitle}
                                                        </option>

                                                    ))
                                                }

                                            </Select>
                                            {
                                                errors.workingTimeId &&
                                                <Label basic color='red' pointing >
                                                    {errors.workingTimeId}
                                                </Label>
                                            }
                                        </Form.Field>


                                        <Button type="submit">İlanı Kaydet</Button>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>

                )}
            </Formik>
        </Container>
    );
}

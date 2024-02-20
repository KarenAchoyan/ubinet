import React, {useEffect, useState} from 'react';
import Info from "./info";
import styles from "../../styles/contactus.module.css";

import {Button, Form, Input, message} from 'antd';

const {TextArea} = Input;
const Contactus = () => {
    const [addresses, setAddresses] = useState([])
    const [form] = Form.useForm();


    const handleSubmit = (values) => {
        form.resetFields()
        message.success("Ձեր հայտը ուղարկված է")
    };



    const validateArmenianOrRussianPhoneNumber = (rule, value) => {
        const armenianPhoneRegex = /^\+374\d{2}\d{6}$/;
        const russianPhoneRegex = /^\+7\d{10}$/;
        if (!armenianPhoneRegex.test(value) && !russianPhoneRegex.test(value)) {
            return Promise.reject('Խնդրում ենք մուտքագրել ճիշտ համարակալման ձևաչափին');
        }
        return Promise.resolve();
    };

    return (
        <div>
            <div className={styles.page}>
                <div className={styles.contact}>
                    <div className={styles.contactPage}>
                        <div className={styles.title}>
                            <h1>Հետադարձ կապ</h1>
                        </div>
                        <div className={styles.location}>
                            <Info info={
                                {
                                    title: "Հեռախոսահամար",
                                    info: [
                                        "+37495388218",
                                    ],
                                    icon: ""
                                }
                            }>
                                <img src="/phone.png" alt=""/>
                            </Info>
                            <Info info={
                                {
                                    title: "Էլ․ հասցե",
                                    info: [
                                       'info@ubinet.am'
                                    ],
                                    icon: ""
                                }
                            }>
                                <img src="/mail.png" alt=""/>
                            </Info>
                        </div>
                    </div>
                </div>
                <div className={styles.registration}>
                    <div className={styles.regTitle}>
                        <h2>Ուղարկել հաղորդագրություն</h2>
                    </div>
                    <div className={styles.background}>
                        <Form form={form} onFinish={handleSubmit}>
                            <div className={styles.regPage}>
                                <div className={styles.regInputs}>
                                    <label htmlFor="">Անուն*</label>
                                    <Form.Item
                                        name="name"
                                        rules={[{required: true, message: 'Խնդրում ենք մուտքագրել անունը'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </div>
                                <div className={styles.regInputs}>
                                    <label htmlFor="">Ազգանուն*</label>
                                    <Form.Item
                                        name="surname"
                                        rules={[{required: true, message: 'Խնդրում ենք մուտքագրել ազգանունը'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </div>
                                <div className={styles.regInputs}>
                                    <label htmlFor="">Էլ․հասցե*</label>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {required: true, message: 'Խնդրում ենք մուտքագրել Էլ․հասցեն'},
                                            {type: 'email', message: 'Էլ․հասցեն չի համընկնում ընթացիկ ձևաչափին'},
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </div>
                                <div className={styles.regInputs}>
                                    <label htmlFor="">Հեռախոսահամար*</label>
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            { required: true, message: 'Խնդրում ենք մուտքագրել հեռախոսահամարը' },
                                            { validator: validateArmenianOrRussianPhoneNumber, message: 'Խնդրում ենք մուտքագրել ճիշտ ձևաչափ' },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div className={styles.regInputs}>
                                    <label htmlFor="">Հաղորդագրություն*</label>
                                    <Form.Item
                                        name="message"
                                        rules={[
                                            { required: true, message: 'Խնդրում ենք մուտքագրել հաղորդագրությունը' },
                                            { min: 10, message: 'Բավարարեք նվազագույն 10 սիմվոլները' },
                                            { max: 200, message: 'Հավասարեք առավելագույն 200 սիմվոլներին' },
                                        ]}
                                    >
                                        <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                                    </Form.Item>
                                    <div>
                                        <Button type="primary" htmlType="submit">
                                            Ուղարկել
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
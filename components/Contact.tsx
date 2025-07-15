"use client";

import React from "react";
import { Input, Select, Button, Form, Typography, message } from "antd";
import '@ant-design/v5-patch-for-react-19';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import axios from "axios";
import Link from "next/link";

const { Title, Paragraph } = Typography;
export interface ContactInterface {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  serviceName: 'branding' | 'web' | 'uiux' | 'app';
  message: string;
}


const Contact = () => {

  const createContact = async (values:ContactInterface)=>{   

    try{
       await axios.post("/api/contact",values)
     
      return message.success("message send success fully")

    }
    catch(err)
    {
     if(err instanceof Error)
      message.error("An error occured message not sent")
    }
  }


  return (
    <div className="px-4 py-16 bg-gradient-to-br from-[#0b0510] via-[#171225] to-[#2a2a4b]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Text + Form */}
        <div className="bg-[#0b0510] p-4 rounded-2xl">
          <Title level={1} className="!text-blue-500 text-4xl! font-extrabold!   mb-4">
            Let’s work together!
          </Title>
          <Paragraph className="  text-white! mb-10 max-w-lg">
            I design and code beautifully simple things and I love what I do. Just
            simple like that!
          </Paragraph>

          <Form
            layout="vertical"
            className="text-white"
            onFinish={createContact}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item name="firstName" label={<span className="text-white">First Name</span>}>
                <Input placeholder="First name" className="bg-black! !text-white placeholder-gray-400! py-2! " />
              </Form.Item>
              <Form.Item name="lastName" label={<span className="text-white">Last Name</span>}>
                <Input placeholder="Last name" className="bg-black! !text-white placeholder-gray-400! py-2!" />
              </Form.Item>
              <Form.Item name="email" label={<span className="text-white">Email</span>}>
                <Input type="email" placeholder="Email address" className="bg-black! !text-white placeholder-gray-400! py-2!" />
              </Form.Item>
              <Form.Item name="mobile" label={<span className="text-white">Phone</span>}>
                <Input placeholder="Phone number" className="bg-black! !text-white placeholder-gray-400! py-2!" />
              </Form.Item>
            </div>
            <Form.Item
              name="serviceName"
              label={<span className="text-white">Select Service</span>}
            >
              <Select
                placeholder="-- Please choose an option --"
                className="bg-black text-white"
              
              >
                <Select.Option value="branding" className="text-white">Branding Design</Select.Option>
                <Select.Option value="web" className="text-white">Web Design</Select.Option>
                <Select.Option value="uiux" className="text-white">UI/UX Design</Select.Option>
                <Select.Option value="app" className="text-white">App Design</Select.Option>
              </Select>
            </Form.Item>
                <Form.Item name="message" label={<span className="text-white">Message</span>}>
                  <Input.TextArea rows={5} placeholder="Message" className="bg-black! !text-white placeholder-gray-400! py-2!" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-600">
                    Send Message
                  </Button>
                </Form.Item>
          </Form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col  items-start justify-center  gap-6 ml-8">
          <div className="flex items-start gap-8 text-white">
            <PhoneOutlined className="text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] rounded-full p-2 " />
            <div>
              <p className="font-semibold">Phone</p>
              <Link href="tel:+011236548096" className="text-blue-400 hover:underline">
                +91 7073736054
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-8 text-white">
            <MailOutlined className="text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] rounded-full p-2 "/>
            <div>
              <p className="font-semibold">Email</p>
              <Link href="mailto:gerolddesign@mail.com" className="text-blue-400 hover:underline">
                bk@mail.com
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-8 text-white">
            <EnvironmentOutlined className="text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] rounded-full p-2 "/>
            <div>
              <p className="font-semibold">Address</p>
              <p>Warne Park Street Pine, FL 33157, </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

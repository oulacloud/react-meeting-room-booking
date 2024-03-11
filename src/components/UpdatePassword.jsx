import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import "../css/update_password.css";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

export function UpdatePassword() {
  const [form] = useForm();
  const [emailTime, setemailTime] = useState(60);
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const onFinish = useCallback(async function () {
    console.log("send captcha");
  }, []);

  const sendCaptcha = useCallback(async function () {
    console.log("send captcha");
  }, []);

  return (
    <div id="updatePassword-container">
      <h1>会议室预订系统</h1>
      <Form
        form={form}
        {...layout1}
        colon={false}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱!" },
            { type: "email", message: "请输入合法邮箱地址!" },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="captcha-wrapper">
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: "请输入验证码!" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" onClick={sendCaptcha}>
            发送验证码
          </Button>
        </div>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[{ required: true, message: "请输入确认密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout1} label=" ">
          <Button className="btn" type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

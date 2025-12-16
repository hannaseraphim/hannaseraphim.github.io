import { MdMailOutline } from "react-icons/md";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { FaDiscord } from "react-icons/fa";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EmailJS = {
  ServiceID: "service_enbl4ji",
  TemplateID: "template_70j1lbr",
  PublicKey: "9mCGB-6Xy7uBHkI3W",
};

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(
    null
  ) as React.RefObject<HTMLFormElement>;

  const [isSending, setIsSending] = useState<boolean>(
    () => !!getCookie("emailSent")
  );

  const handleEmail = (
    e: FormEvent,
    formRef: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);

    console.log("Sending...");
    console.log(formRef);
    if (formRef.current) {
      emailjs
        .sendForm(
          EmailJS.ServiceID,
          EmailJS.TemplateID,
          formRef.current,
          EmailJS.PublicKey
        )
        .then(
          () => {
            formRef.current!.reset();
            const date = new Date();
            date.setDate(date.getDate() + 3);
            console.log("Email sent");
            document.cookie = `emailSent=true; expires=${date.toUTCString()}; path=/`;
          },
          (error: { text: string }) => {
            console.log("Failed...", error.text);
            setIsSending(false);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col p-10"
    >
      <h1 className="text-2xl text-emerald-600 font-bold">Contact me</h1>

      <Card className="m-5 bg-neutral-950 border-neutral-800 w-130 flex items-center">
        <CardContent className="w-full">
          <form
            className="w-full"
            onSubmit={(e) => handleEmail(e, formRef)}
            ref={formRef}
          >
            <div className="p-2 flex flex-col gap-2 w-full">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                className="text-white border-neutral-700"
                required
              />
            </div>
            <div className="p-2 flex flex-col gap-2 w-full">
              <Label htmlFor="email" className="text-white ">
                Email
              </Label>
              <Input
                name="email"
                id="email"
                className="text-white border-neutral-700"
                required
              />
            </div>
            <div className="p-2 flex flex-col gap-2 w-full">
              <Label htmlFor="content" className="text-white">
                Content
              </Label>
              <Textarea
                id="content"
                name="content"
                className="min-h-35 text-white border-neutral-700"
                required
              />
            </div>
            <div className="p-2">
              <Button
                className="w-full p-6 bg-emerald-600 cursor-pointer hover:bg-emerald-800"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-neutral-950 border-neutral-800 w-130">
        <CardContent>
          <div className="flex items-center gap-5">
            <FaDiscord className="text-3xl text-white" />
            <p className="text-white">hannaseraphim</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center gap-5">
            <MdMailOutline className="text-3xl text-white" />
            <p className="text-white">hannaseraphim@gmail.com</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Contact;

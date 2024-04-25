import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
// import { PageTitle } from "../../widgets/layout";
// import { TeamCard } from "../../widgets/cards";
// import { teamData } from "../../../Data";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast"; // Import toast

export function AboutUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the API using Axios
      await axios.post("YOUR_API_ENDPOINT_HERE", {
        fullName: formData.fullName,
        emailAddress: formData.emailAddress,
        message: formData.message,
      });

      // Handle success
      toast.success("Message sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-1 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                We focus on Simplifying healthcare & Impacting lives!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-15 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-3 w-full p-12">
              <Typography
                variant="h3"
                className="mb-3 font-bold text-black-500"
                style={{ fontStyle: "italic" }}
                color="black"
              >
                What is MedDonor ?
              </Typography>
              <Typography className="mb-8  text-gray-600">
                MedDonor is a platform dedicated to facilitating medicine
                donations to those in need.
                <br />
                <br />
                "It provides individuals with the opportunity to donate unused
                medicines, ensuring they reach those who require them the most.
                Through our platform, donors can contribute prescription
                medications, over-the-counter pharmaceuticals, and other
                essential healthcare products. Together, we strive to meet the
                healthcare needs of underserved communities."
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
          </div>
        </div>
      </section>
      {/* <PageTitle heading="Our Mission"></PageTitle> */}
      <div className="container my-13 mx-auto md:px-6">
        <section className="mb-32 text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block self-center w-full h-auto shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://safetyservicesmanitoba.ca/wp-content/uploads/2020/11/emergency-response.gif"
                  alt="acidity"
                  className="w-full h-96 object-cover bg-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full self-start shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-2 text-3xl font-bold italic  text-primary dark:text-primary-400 text-blue-900">
                    Emergency Responses
                  </h2>
                  <p className=" leading-loose mb-4 text-oran-700 font-semibold italic">
                    <span className="font-bold italic text-primary dark:text-primary-400 text-orange-800 ">
                      "
                    </span>
                    We are dedicated to extending a helping hand to those who
                    cannot afford vital medications through our medicine
                    donation initiative. We recognize the pressing need for
                    access to essential medicines, particularly among
                    individuals and communities facing financial hardship.
                    <br />
                    Our mission is centered on providing timely assistance to
                    those who would otherwise struggle to obtain the medications
                    they require. With a firm commitment to inclusivity and
                    equity, we prioritize reaching underserved populations who
                    lack the means to purchase essential medicines. Through our
                    initiative, we aim to bridge the gap in healthcare access
                    and ensure that no one is left behind during times of crisis
                    or emergency. Our team works diligently to identify and
                    respond to emergency situations swiftly, collaborating
                    closely with local communities, healthcare providers, and
                    relief organizations to distribute donated medicines where
                    they are most needed.
                    <br />
                    Join us in our mission to make a meaningful difference in
                    emergency responses, providing essential medicines to those
                    in need, regardless of their ability to pay
                    <span className="font-bold italic text-primary dark:text-primary-400 text-orange-800">
                      "
                    </span>
                  </p>
                  <p className="mb-4 font-semibold text-blue-500">
                    Summary 
                    </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <ul className="list-disc">
                      <li >
                        Pain and burning sensation in the chest, stomach or
                        throat
                      </li>
                      <li>Flatulence or Gas Indigestion</li>
                      <li>Bad Breath</li>
                    </ul>
                  </p>  
                  {/* <ul className="flex justify-center md:justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-32 text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="w-full self-start shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400  text-blue-800">
                    Swollen Gums
                  </h2>
                  <p className="mb-4 text-gray-700">
                    Swollen gums might feel abnormally bulging and protruding.
                    It is a common problem where one or many triangle-shaped
                    areas of gum between teeth swell. Gum diseases, also called
                    periodontal diseases, affect the gums supporting the teeth.
                    Swelling in the gums can be a symptom of underlying gum
                    diseases, like gingivitis
                  </p>
                  <p className="mb-4 font-semibold text-blue-500 ">
                    Symptoms of Swollen Gums Are:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <ul>Swelling and redness of gums </ul>
                    <ul>Bad mouth odour </ul>
                    <ul>Altered taste </ul>
                    <ul>Loose teeth</ul>
                  </p>
                  <p className="mb-4 font-semibold text-blue-500 ">
                    Common Causes of Swollen Gums:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <ul>Poor Oral Hygiene</ul>
                    <ul>Poor Nutrition</ul>
                    <ul>Dental Issues</ul>
                  </p>
                  <p className="mb-4 font-semibold text-blue-500  ">
                    Home Remedies for Swollen Gums:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    1. Kali Mirch (Black pepper):
                    <br />
                    You can grind some black pepper to make powder and use this
                    powder with mustard oil to make a paste. This paste can be
                    used to massage the teeth and gums to steer clear of dental
                    problems like swollen gums
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    2. Clove Oil :
                    <br />
                    Clove oil helps prevent the growth and formation of
                    bacteria, thereby preventing infections. Clove is also a
                    good pain reliever and might help with pain associated with
                    swollen gums.4 To use clove for gums, mince some cloves, and
                    use a cotton swab or cotton ball to apply the powder to your
                    gums. Let the powder sit on the gums for some time. Rinse
                    the clove off your gums once done.
                  </p>
                  <ul className="flex justify-center md:justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block self-center w-full h-auto shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://etimg.etb2bimg.com/photo/89409588.cms"
                  alt="Trendy Pants and Shoes"
                  className="w-full h-96 object-cover bg-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-32 text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block self-center w-full h-auto shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://img.freepik.com/free-vector/world-humanitarian-day-concept-illustration_114360-6458.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais"
                  alt="acidity"
                  className="w-full h-96 object-cover bg-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full self-start shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400 text-blue-800">
                    Acidity
                  </h2>
                  <p className="mb-4 text-gray-700">
                    Acid Reflux, commonly known as Acidity is a condition in
                    which bile or stomach acids flow back into our oesophagus or
                    food pipe and cause irritation.
                  </p>
                  <p className="mb-4 font-semibold text-blue-500">
                    Symptoms of Acidity Are:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <ul>
                      Pain and burning sensation in the chest, stomach or throat
                    </ul>
                    <ul>Flatulence or Gas Indigestion</ul>
                    <ul>Bad Breath</ul>
                  </p>
                  <p className="mb-4 font-semibold text-blue-500 ">
                    Common Causes of Acidity:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <ul>Over-eating</ul>
                    <ul>Eating at odd times or skipping meals</ul>
                    <ul>
                      Unhealthy eating habits like having too much tea, coffee,
                      cold- drinks, junk, spicy, oily food etc.
                    </ul>
                    <ul>
                      A bad lifestyle like taking too much stress, sleeping
                      less, smoking, drinking alcohol etc.
                    </ul>
                  </p>
                  <p className="mb-4 font-semibold text-blue-500 ">
                    Home Remedies for Acidity:
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    1. Fennel or Saunf Image Source:
                    <br />
                    Having around 1 teaspoon fennel powder with a glass of warm
                    water relieves acidity and its symptoms like heartburn,
                    bloating and improves digestion.
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    2. Black Cumin Seeds:
                    <br />
                    Chew cumin seeds directly or boil 1 teaspoon of them in a
                    glass of water and drink it to relieve acidity. Black cumin
                    seeds are gastro-protective. They are effective in reducing
                    and preventing acidity and its symptoms like heartburn,
                    pain, nausea, bloating, constipation etc
                  </p>
                  <ul className="flex justify-center md:justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="px-4 pt-5 pb-24">
        <div className="container mx-auto">
          {/* <PageTitle section="Our Team" heading="Meet our heroes">
            We believe that great work culture is a vital ingredient to a
            company’s success. Our team members are encouraged to take ownership
            and work as a unit. Every team member inspires and motivates other
            members to contribute to the team’s success.
          </PageTitle> */}
          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24  xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div> */}
        </div>
      </section>
      <section className="relative bg-white px-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-48 bg-blue-gray-900 mb-10">
            <Typography
              //  variant="h1"
              color="white"
              className="mb-6 font-bold text-3xl"
            >
              Our ultimate goal is to provide accessible healthcare to one and
              all !
            </Typography>
          </div>
        </div>
      </section>
      <section className="relative bg-white px-4">
        <div className="container mx-auto">
          {/* <PageTitle
            section="Contact Us"
            heading="Interested in working with us?"
          >
            Fill out the form and expect our response within 24 hours.
          </PageTitle> */}
          <form
            className="mx-auto w-full mt-12 lg:w-5/12"
            onSubmit={handleSubmit}
          >
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              rows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8 mb-10"
              fullWidth
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

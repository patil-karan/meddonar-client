import React from 'react'
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCarousel,
//     MDBCarouselInner,
//     MDBCarouselItem,
//     MDBCol,
//     MDBContainer,
//     MDBIcon,
//     MDBRow,
//   } from "mdb-react-ui-kit";
  

function HomeRemedies() {
  return (
    <div className="container mx-auto md:px-6">
    <section className="mb-32 text-center md:text-left">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          <div className="block self-center w-full h-auto shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img
              src="data:image/jpeg;base64,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"
              alt="acidity"
              className="w-full h-96 object-cover bg-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          <div className="w-full self-start shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-2 text-3xl font-bold text- primary dark:text-primary-400 text-blue-800">
                Acidity
              </h2>
              <p className="mb-4 text-gray-700">
                Acid Reflux, commonly known as Acidity is a condition in which
                bile or stomach acids flow back into our oesophagus or food
                pipe and cause irritation.
              </p>
              <p className="mb-4 font-semibold text-blue-500">
                Symptoms of Acidity Are:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                <ul>
                  Pain and burning sensation in the chest, stomach or throat
                </ul>
                <ul>Flatulence or Gas Indigestion</ul>
                <ul>Bad Breath</ul>
              </p>
              <p className="mb-4 font-semibold text-blue-500 ">
                Common Causes of Acidity:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                <ul>Over-eating</ul>
                <ul>Eating at odd times or skipping meals</ul>
                <ul>
                  Unhealthy eating habits like having too much tea, coffee,
                  cold- drinks, junk, spicy, oily food etc.
                </ul>
                <ul>
                  A bad lifestyle like taking too much stress, sleeping less,
                  smoking, drinking alcohol etc.
                </ul>
              </p>
              <p className="mb-4 font-semibold text-blue-500 ">
                Home Remedies for Acidity:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                1. Fennel or Saunf Image Source:
                <br />
                Having around 1 teaspoon fennel powder with a glass of warm
                water relieves acidity and its symptoms like heartburn,
                bloating and improves digestion.
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                2. Black Cumin Seeds:
                <br />
                Chew cumin seeds directly or boil 1 teaspoon of them in a
                glass of water and drink it to relieve acidity. Black cumin
                seeds are gastro-protective. They are effective in reducing
                and preventing acidity and its symptoms like heartburn, pain,
                nausea, bloating, constipation etc
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
    <section className="mb-32 text-center md:text-left">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          <div className="w-full self-start shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400  text-blue-800">
                Swollen Gums
              </h2>
              <p className="mb-4 text-gray-700">
                Swollen gums might feel abnormally bulging and protruding. It
                is a common problem where one or many triangle-shaped areas of
                gum between teeth swell. Gum diseases, also called periodontal
                diseases, affect the gums supporting the teeth. Swelling in
                the gums can be a symptom of underlying gum diseases, like
                gingivitis
              </p>
              <p className="mb-4 font-semibold text-blue-500 ">
                Symptoms of Swollen Gums Are:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                <ul>Swelling and redness of gums </ul>
                <ul>Bad mouth odour </ul>
                <ul>Altered taste </ul>
                <ul>Loose teeth</ul>
              </p>
              <p className="mb-4 font-semibold text-blue-500 ">
                Common Causes of Swollen Gums:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                <ul>Poor Oral Hygiene</ul>
                <ul>Poor Nutrition</ul>
                <ul>Dental Issues</ul>
              </p>
              <p className="mb-4 font-semibold text-blue-500  ">
                Home Remedies for Swollen Gums:
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                1. Kali Mirch (Black pepper):
                <br />
                You can grind some black pepper to make powder and use this
                powder with mustard oil to make a paste. This paste can be
                used to massage the teeth and gums to steer clear of dental
                problems like swollen gums
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300 ">
                2. Clove Oil :
                <br />
                Clove oil helps prevent the growth and formation of bacteria,
                thereby preventing infections. Clove is also a good pain
                reliever and might help with pain associated with swollen
                gums.4 To use clove for gums, mince some cloves, and use a
                cotton swab or cotton ball to apply the powder to your gums.
                Let the powder sit on the gums for some time. Rinse the clove
                off your gums once done.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wYwRj5UNImK1OXUKCPKGHE_ZrXcsglivnQ&usqp=CAU"
              alt="Trendy Pants and Shoes"
              className="w-full h-96 object-cover bg-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default HomeRemedies
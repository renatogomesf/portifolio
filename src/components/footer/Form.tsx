import { useState, useTransition } from "react";

import emailjs from "@emailjs/browser";

export default function Form() {
  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  const [status, setStatus] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: any) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }

    if (!email) {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    if (!message) {
      setMessageAlert(true);
    } else {
      setMessageAlert(false);
    }

    if (!name || !email || !message) {
      return;
    }

    startTransition(async () => {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      await emailjs
        .send(
          "service_k6owaol",
          "template_zcy9tyq",
          templateParams,
          "OoweqMZpZqSGI_LRK"
        )
        .then((res) => {
          if (res.status == 200) {
            setStatus(true);

            setTimeout(() => {
              setStatus(false);
            }, 2000);
          }
          console.log("email enviado", res.status, res.text);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="flex flex-col gap-5 w-[400px] max-md:w-full max-md:max-w-[400px]"
      >
        <input
          className={`bg-[#333438] p-2 rounded-[5px] outline-0 focus:ring-2 ${
            nameAlert ? "ring-2 ring-[#ff0101]" : ""
          }`}
          onFocus={() => setNameAlert(false)}
          type="text"
          name="name"
          placeholder="Nome"
        />
        {nameAlert && (
          <div className="text-[#ff0101] text-[1rem] -mt-4">
            Campo Obrigatório!
          </div>
        )}
        <input
          className={`bg-[#333438] p-2 rounded-[5px] outline-0 focus:ring-2 ${
            emailAlert ? "ring-2 ring-[#ff0101]" : ""
          }`}
          onFocus={() => setEmailAlert(false)}
          type="email"
          name="email"
          placeholder="Email"
        />
        {emailAlert && (
          <div className="text-[#ff0101] text-[1rem] -mt-4">
            Campo Obrigatório!
          </div>
        )}
        <textarea
          className={`bg-[#333438] p-2 rounded-[5px] outline-0 h-25 focus:ring-2 ${
            messageAlert ? "ring-2 ring-[#ff0101]" : ""
          }`}
          onFocus={() => setMessageAlert(false)}
          name="message"
          placeholder="Mensagem"
        ></textarea>
        {messageAlert && (
          <div className="text-[#ff0101] text-[1rem] -mt-4">
            Campo Obrigatório!
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="flex items-center justify-center min-w-[100px] border-2 rounded-[5px] w-fit h-[40px] p-2 text-[#93FA21] hover:text-white cursor-pointer duration-150"
          >
            {status ? (
              <div className="flex items-center gap-2 p-1">
                <span className="text-[#fff]">Enviado!</span>
                <svg
                  className="w-[20px]"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            ) : (
              "Enviar Mensagem!"
            )}
          </button>
          {isPending && (
            <svg
              className="w-[30px] h-[30px] animate-spin"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 "
                  stroke="none"
                  fill-rule="evenodd"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          )}
        </div>
      </form>
    </>
  );
}

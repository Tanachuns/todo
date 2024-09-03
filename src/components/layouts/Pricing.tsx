import React from "react";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <>
      <div className="bg-neutral-100">
        <div className="p-24 ">
          <div className="w-1/2 m-auto text-center">
            <small>Pricing</small>
            <h2 className="text-5xl font-bold">
              แพ็คเกจยืดหยุ่นตามความต้องการ
            </h2>
            <p className="text-neutral-400">
              เลือกแผนที่เหมาะสมที่สุดสำหรับธุรกิจของคุณและขยายตามการเติบโตของคุณ
              <br />
              เรามีการกำหนดราคาที่โปร่งใสและออกแบบมาเพื่อให้คุณได้รับความคุ้มค่าสูงสุด
            </p>
          </div>
          <div className="mt-24 m-auto w-2/3 grid grid-cols-3 gap-2">
            <div></div>
            <div className="p-5 bg-white  rounded-lg">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-neutral-400">สำหรับผู้เริ่มลงทุน</p>
              <div className="my-10 text-center">
                <h3 className="text-3xl font-bold">500 บาท</h3>
                <p className="text-neutral-400">/เดือน</p>
              </div>
              <ul className="text-neutral-400">
                <li className="flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  มีนู่น
                </li>
                <li className="flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  มีนู่น
                </li>
                <li className="flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  มีนู่น
                </li>
              </ul>
              <button className="btn btn-neutral w-full mt-3">เริ่มเลย</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <div className=" ">
        <div className="p-24 text-center">
          <div className="w-1/2 m-auto">
            <small>Our Services</small>
            <h2 className="text-5xl font-bold">บริการของเรา</h2>
            <p className="text-neutral-400">
              เราคือผู้ให้บริการแพลตฟอร์มที่ครบวงจร
              ช่วยให้คุณสร้างและจัดการร้านค้าออนไลน์ได้อย่างง่ายดาย
              ด้วยเครื่องมือที่ทรงพลังและใช้งานง่าย เพิ่มประสิทธิภาพธุรกิจของคุณ
              เพื่อให้คุณสามารถเติบโตได้อย่างยั่งยืนในโลกออนไลน์
            </p>
          </div>
          <div className="mt-24 m-auto w-2/3 grid grid-cols-3 gap-2">
            <div className=" p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <br />
              <h3 className="font-bold text-xl">รองรับ API ภายนอก</h3>
              <p className="text-neutral-400">
                เชื่อมต่อการทำงานกับบริการภายนอกได้อย่างง่ายดาย
                ด้วยระบบที่รองรับ API เช่น ByShop
              </p>
            </div>
            <div className=" p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <br />
              <h3 className="font-bold text-xl">เช็คสลิปอัตโนมัติ</h3>
              <p className="text-neutral-400">
                ระบบตรวจสอบสลิปการชำระเงินแบบอัตโนมัติ
                <br />
                ช่วยให้คุณประหยัดเวลาและลดความผิดพลาด
              </p>
            </div>
            <div className=" p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              <br />
              <h3 className="font-bold text-xl">ดูแลผ่านระบบหลังบ้าน</h3>
              <p className="text-neutral-400">
                จัดการและควบคุมเต็มที่ผ่านระบบหลังบ้านที่ใช้งานง่ายและครบครันโดยไม่ต้องรู้วิธีเขียนโปรแกรม
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

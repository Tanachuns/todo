import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              ยกระดับร้านเติมแพ็ค เติมเกม ซื้อขายไอดี/ไอเทม
              <br />
              ด้วยแพลตฟอร์มของเรา
            </h1>
            <p className="py-6">
              จัดการร้านซื้อขายออนไลน์อย่างมืออาชีพ
              ด้วยแพลตฟอร์มที่ทรงพลังและใช้งานง่าย ขยายโอกาสการเติบโต
              และมอบประสบการณ์ซื้อขายที่ราบรื่นให้กับลูกค้าของคุณ
            </p>
            <button className="btn btn-primary">
              สร้างเว็บไซต์ของคุณเองวันนี้!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

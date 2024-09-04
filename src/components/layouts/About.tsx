import React from "react";
import Image from "next/image";

import teamImage from "@/images/team.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <div className=" ">
        <div className="p-24 text-center" id="about">
          <div className="w-1/2 m-auto">
            <small>About Us</small>
            <h2 className="text-5xl font-bold">เกี่ยวกับเรา</h2>
            <p className="text-neutral-400">
              เราเป็นผู้ให้บริการแพลตฟอร์มอีคอมเมิร์ซที่มุ่งเน้นการช่วยเหลือธุรกิจทุกขนาดให้สามารถเติบโตในโลกออนไลน์ได้อย่างมีประสิทธิภาพ
              ด้วยเทคโนโลยีที่ทันสมัยและเครื่องมือที่ใช้งานง่าย
              เรามุ่งมั่นที่จะสร้างสรรค์บริการที่ตอบโจทย์และเพิ่มคุณค่าให้กับผู้ประกอบการทุกคน
              ไม่ว่าคุณจะเพิ่งเริ่มต้นหรือกำลังมองหาวิธีขยายธุรกิจ
            </p>
          </div>
          <div className="w-1/2 m-auto my-10 text-left flex">
            <div className="w-1/2 p-2">
              <div>
                <h1 className=" text-xl font-bold">พันธกิจ (Mission)</h1>
                <p className=" text-neutral-400">
                  เรามุ่งมั่นที่จะช่วยเหลือผู้ประกอบการทุกขนาดให้สามารถสร้างและเติบโตธุรกิจออนไลน์ได้อย่างยั่งยืน
                  ด้วยแพลตฟอร์มอีคอมเมิร์ซที่ทันสมัยและใช้งานง่าย
                  เรามีความตั้งใจในการสร้างสรรค์เครื่องมือและบริการที่ช่วยเพิ่มประสิทธิภาพในการดำเนินธุรกิจ
                  เพื่อให้ลูกค้าของเราประสบความสำเร็จในโลกดิจิทัล
                </p>
              </div>
              <div className="mt-5">
                <h1 className=" text-xl font-bold">วิสัยทัศน์ (Vision)</h1>
                <p className=" text-neutral-400">
                  เราเป็นผู้นำในการพัฒนาแพลตฟอร์มอีคอมเมิร์ซที่ครอบคลุมและตอบโจทย์ความต้องการของธุรกิจทุกประเภท
                  เพื่อสร้างอนาคตที่ทุกคนสามารถเข้าถึงและเติบโตในตลาดออนไลน์ได้อย่างเท่าเทียมและมีประสิทธิภาพ
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <Image src={teamImage} width={500} height={500} alt="Teamwork" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

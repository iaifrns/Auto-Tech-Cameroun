import { TestimoniesType } from "../constants/testimonies";
import { Icon } from "@iconify/react";

export const Testimony = ({ testimony }: { testimony: TestimoniesType }) => {
  return (
    <div className="w-[300px] flex flex-col gap-2 shadow-sm">
      <div className="flex flex-col p-8 bg-gray-200 gap-4 h-[200px]">
        <h1 className="text-xl font-bold">{testimony.title}</h1>
        <p className="text-gray-600">{testimony.desc}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Icon icon="mingcute:user-4-fill" width={50} className="text-primary" />
        <div className="flex flex-col">
          <p className="font-bold">{testimony.name}</p>
          <div className="flex gap-2">
            <Icon icon="noto:star" />
            <Icon icon="noto:star" />
            <Icon icon="noto:star" />
            <Icon icon="noto:star" />
            <Icon icon="noto:star" />
          </div>
        </div>
      </div>
    </div>
  );
};

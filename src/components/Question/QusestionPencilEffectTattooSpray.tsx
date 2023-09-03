import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Question() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const questions: string[] = [
    "1. Phun mày hiệu ứng bút chì bao lâu thì bong?",
    "2. Phun mày có kiêng thịt gà không?",
    "3. Phun mày bao lâu thì dặm lại?",
    "4. Có nên phun mày hiệu ứng bút chì không?",
  ];

  const answer: string[] = [
    "Tùy vào cơ địa, chế độ chăm sóc sau phun xăm mà mỗi người sẽ có thời gian bong khác nhau. Tuy nhiên, trung bình thì khoảng 5-7 ngày sau phun mày hiệu ứng bút chì, bạn đã thấy chân mày bong từ từ.",
    "Thịt gà đứng đầu danh sách những thực phẩm cần kiêng sau phun xăm và điêu khắc chân mày. Thịt gà thuộc nhóm thực phẩm có tính phong và chứa nhiều collagen dễ gây ra tình trạng ngứa ngáy hay viêm nhiễm trong quá trình kết vảy, bong ra của chân mày.",
    "Khoảng một tháng sau khi phun mày hiệu ứng bút chì bạn có thể đến cơ sở thẩm mỹ để thực hiện dặm lại. Nếu thời gian phun mày đã lâu thì bạn có thể xem xét tình trạng cụ thể của chân mày để quyết định có dặm lại hay không.",
    "Việc phun mày hiệu ứng bút chì hay không phụ thuộc vào sở thích cũng như tình trạng chân mày của từng người. Nếu bạn đang sở hữu một dáng chân mày có nhiều khuyết điểm thì có thể phun xăm hiệu ứng bút chì để khắc phục và mang đến một hàng chân mày sắc sảo, tự nhiên.",
  ];

  return (
    <div className='bg-white text-mainSpaColor w-full py-10 max-w-[1400px] m-auto'>
      <div className="sm:text-3xl text-2xl font-bold text-center">
        <h1>PHUN MÀY HIỆU ỨNG BÚT CHÌ</h1>
        <h1>VÀ CÂU HỎI THƯỜNG GẶP</h1>
      </div>
      <div className="max-w-[1000px] py-10 px-3 m-auto">
        {questions.map((question, index) => (
          <div key={index}>
            <Accordion open={openAccordion === index} icon={<FiChevronDown />} onClick={() => handleAccordionClick(index)}>
              <AccordionHeader className="text-mainSpaColor font-bold">{question}</AccordionHeader>
              <AccordionBody className="text-mainSpaColor font-bold pl-4 text-base">
                {answer[index]}
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;

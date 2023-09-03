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
    "1. Laser triệt lông có đau không?",
    "2. Liệu trình triệt lông bao nhiêu buổi?",
    "3. Triệt lông có vĩnh viễn không? Lông có mọc lại sau khi điều trị?",
    "4. Triệt lông bằng công nghệ Laser có làm trắng da?",
  ];

  const answer: string[] = [
    "Thực tế, việc laser tác động vào vùng da để triệt lông vẫn gây đau nhưng cảm giác chỉ châm chích và bạn hoàn toàn có thể chịu đựng được.",
    "Liệu trình triệt lông sẽ phụ thuộc vào vùng cần triệt và cơ địa của mỗi người. Thông thường, bác sĩ khuyên bạn nên triệt từ 6 đến 10 buổi để mang lại hiệu quả tốt nhất.",
    "Một số vùng có thể sẽ có lông mọc lại sau khi triệt, tuy nhiên, thời gian rất lâu lông mới mọc. Lông mọc lại thường nhạt màu như lông tơ, thưa và mỏng hơn nên vẫn đảm bảo có tính thẩm mỹ.",
    "Ánh sáng của laser sẽ giúp kích thích tăng sinh collagen giúp trẻ hóa da, đàn hồi và trắng hồng hơn trước rất nhiều.",
  ];

  return (
    <div className='bg-white text-mainSpaColor w-full py-10 max-w-[1400px] m-auto'>
      <div className="sm:text-3xl text-2xl font-bold text-center">
        <h1>NHỮNG THẮC MẮC THƯỜNG GẶP VỀ</h1>
        <h1>TRIỆT LÔNG</h1>
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

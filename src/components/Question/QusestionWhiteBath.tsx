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
    "1. Tắm trắng 1 lần có trắng không?",
    "2. Tắm trắng bao nhiêu lần mới trắng?",
    "3. Tắm trắng có bị đen lại không?",
    "4. Lưu ý chăm sóc dành cho khách hàng sau khi tắm trắng",
  ];

  const answer: string[] = [
    "Công nghệ tắm trắng hiện nay có cơ chế cơ học, hỗ trợ thay đổi màu da một cách từ từ thông qua việc thanh lọc và đào thải hắc sắc tố theo hệ bài tiết. Vì vậy, sau 1 lần tắm trắng, da bạn sẽ bật lên từ 0,5 đến 1 tone. Sau một liệu trình, da sẽ bật 3-5 tone không bắt nắng hay hồi tone trở lại.",
    "Tùy vào cơ địa, tình trạng da, công nghệ tắm trắng cũng như chế độ chăm sóc quyết định đến việc bạn tắm trắng bao nhiêu lần. Thông thường, liệu trình tắm trắng sẽ diễn ra trung bình 3-5 buổi.",
    "Nếu bạn vừa tắm trắng vừa sử dụng các chất lột tẩy và không biết chăm sóc thì làn da hoàn toàn có thể đen trở lại. Vì vậy, hãy tuân thủ chỉ dẫn của bác sĩ để làn da luôn trắng mịn, tươi trẻ nhé!",
    "Một số lưu ý sau khi tắm trắng để làn da luôn trắng sáng, ẩm mượt: Hạn chế tiếp xúc trực tiếp với ánh nắng, kKhông tắm nước quá nóng hoặc sử dụng các loại sữa tắm có tính axit mạnh, sử dụng kem dưỡng da dịu nhẹ sau khi tắm trắng, ăn uống đầy đủ và bổ sung thực phẩm giàu vitamin C để duy trì hiệu quả tắm trắng lâu dài.",
  ];

  return (
    <div className='bg-white text-mainSpaColor w-full py-10 max-w-[1400px] m-auto'>
      <div className="sm:text-3xl text-2xl font-bold text-center">
        <h1>MỘT SỐ CÂU HỎI THƯỜNG GẶP</h1>
        <h1>VỀ DỊCH VỤ TẮM TRẮNG</h1>
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

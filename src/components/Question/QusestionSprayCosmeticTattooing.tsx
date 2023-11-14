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
    "1. Phun xăm thẩm mỹ có đau không?",
    "2. Kết quả phun xăm thẩm mỹ giữ được bao lâu?",
    "3. Phun xăm thẩm mỹ nên kiêng ăn gì?",
    "4. Giá phun xăm thẩm mỹ là bao nhiêu?",
    "5. Độ tuổi thực hiện công nghệ phun xăm",
  ];

  const answer: string[] = [
    "Ngày nay, các thẩm mỹ viện đã ứng dụng công nghệ hiện đại và có sử dụng thuốc gây tê trong quá trình thực hiện phun xăm nên đảm bảo không đau đớn. Thời gian thực hiện cũng rất nhanh chỉ từ 45 đến 60 phút nên bạn sẽ không cảm thấy khó chịu.",
    "Tùy thuộc vào các yếu tố như màu mực phun xăm, công nghệ phun xăm hiện đại, tay nghề kỹ thuật viên cũng như cơ địa và cách chăm sóc của mỗi người mà kết quả phun xăm cũng sẽ khác nhau. Thông thường, phun xăm thẩm mỹ sẽ duy trì độ bền từ 5 đến 7 năm.",
    "Sau khi phun xăm, bạn nên kiêng một số thực phẩm như thịt gà, thịt bò, thịt vịt, rau muống, các đồ ăn được làm từ nếp, các chất kích thích, đối với phun môi thì cần kiêng thêm các thực phẩm có màu sắc quá đậm như nước mắm, nước tương...",
    "Hiện nay, trên thị trường có rất nhiều cơ sở/thẩm mỹ viện thực hiện dịch vụ phun xăm thẩm mỹ và mỗi cơ sở sẽ có những mức giá phun xăm khác nhau. Nó phụ thuộc vào nhiều yếu tố như danh tiếng của thẩm mỹ viện, tay nghề của kỹ thuật viên, chất lượng màu mực, kỹ thuật thực hiện.....",
    "Những bạn trên 18 tuổi đang muốn khắc phục các khuyết điểm lông mày nhợt nhạt, thiếu đầu thiếu đuôi, lông mày bị vểnh lên, môi thâm sạm... thì có thể thực hiện ngay. Đối với các bạn dưới 18 tuổi, hãy xin phép phụ huynh trước khi thực hiện nhé!",
  ];

  return (
    <div className='bg-white text-titlemainSpaColor w-full py-10 max-w-[1400px] m-auto'>
      <div className="sm:text-3xl text-2xl font-bold text-center">
        <h1>MỘT SỐ CÂU HỎI THƯỜNG GẶP KHI</h1>
        <h1>THỰC HIỆN PHUN XĂM THẨM MỸ</h1>
      </div>
      <div className="max-w-[1000px] py-10 px-3 m-auto">
        {questions.map((question, index) => (
          <div key={index}>
            <Accordion open={openAccordion === index} icon={<FiChevronDown />} onClick={() => handleAccordionClick(index)}>
              <AccordionHeader className="text-titlemainSpaColor hover:text-green-900 font-bold">{question}</AccordionHeader>
              <AccordionBody className="text-titlemainSpaColor font-bold pl-4 text-base">
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
